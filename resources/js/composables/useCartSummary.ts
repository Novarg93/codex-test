import { ref } from "vue";
import axios from "axios";

type CartSummary = { total_qty: number; total_sum_cents: number };

export const summary = ref<CartSummary>({ total_qty: 0, total_sum_cents: 0 });

const TTL_MS = 15_000;
const LS_KEY = "cart:summary:v1";

let inflight: Promise<CartSummary> | null = null;
let expiresAt = 0;

function now() {
    return Date.now();
}

function readCache(): { value: CartSummary; expiresAt: number } | null {
    try {
        const raw = localStorage.getItem(LS_KEY);
        if (!raw) return null;
        const parsed = JSON.parse(raw);
        if (!parsed?.value || typeof parsed?.expiresAt !== "number")
            return null;
        return parsed;
    } catch {
        return null;
    }
}

function writeCache(value: CartSummary, exp: number) {
    try {
        localStorage.setItem(LS_KEY, JSON.stringify({ value, expiresAt: exp }));
    } catch {
        // ignore
    }
}

function hydrateFromCache() {
    const cached = readCache();
    if (!cached) return;
    summary.value = cached.value;
    expiresAt = Math.max(expiresAt, cached.expiresAt);
}

export function setSummary(next: CartSummary, opts?: { refreshWindow?: boolean }) {
  summary.value = next

  if (opts?.refreshWindow) {
    expiresAt = now() + TTL_MS
    writeCache(next, expiresAt)
    return
  }

  // иначе просто синхронизируем значение, не ломая ttl
  const cached = readCache()
  const exp = cached?.expiresAt ?? expiresAt
  if (exp) writeCache(next, exp)
}

/**
 * loadSummary() — для лейаута, переходов, перезагрузок
 * loadSummary({ force: true }) — если прям надо игнорить TTL
 */
export async function loadSummary(opts?: {
    force?: boolean;
}): Promise<CartSummary> {
    const force = !!opts?.force;

    // мгновенно поднимем из localStorage
    hydrateFromCache();

    // если свежо и не force — не ходим на сервер
    if (!force && expiresAt && now() < expiresAt) {
        return summary.value;
    }

    // дедуп запросов: если уже есть запрос — вернём его даже для force
    if (inflight) return inflight;

    inflight = axios
        .get<CartSummary>("/cart/summary", {
            headers: { "Cache-Control": "no-store" },
        })
        .then(({ data }) => {
            expiresAt = now() + TTL_MS;
            summary.value = data;
            writeCache(data, expiresAt);
            return data;
        })
        .finally(() => {
            inflight = null;
        });

    return inflight;
}

export function useCartSummary() {
    return { summary, loadSummary, setSummary };
}
