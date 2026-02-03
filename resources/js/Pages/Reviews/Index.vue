<script setup lang="ts">
import DefaultLayout from "@/Layouts/DefaultLayout.vue";
import { ref, watch, computed } from "vue";
import { router } from "@inertiajs/vue3";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Pagination from "@/components/Pagination.vue";
import { Star } from "lucide-vue-next";
import SeoHead from '@/components/SeoHead.vue'
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectGroup,
    SelectItem,
} from "@/components/ui/select";

const props = defineProps<{
    filters: { rating?: number | null; game?: string | null; product?: string | null };
    games: Array<{ id: number; name: string; image_url?: string | null }>;
    reviews: { data: any[]; links: any; meta: any };

    stats: {
        total: number;
        avg: number;
        dist: Record<number, number>; // 1..5
    };

    highlights: {
        most_reviewed: null | { product_id: number; name: string | null; image_url: string | null; count: number };
        highest_rated: null | { product_id: number; name: string | null; image_url: string | null; avg: number; count: number; min_reviews: number };
    };
    seo: any
}>();

const ratingLocal = ref<string>(props.filters.rating?.toString() ?? "");
const productLocal = ref<string>(props.filters.product ?? "");


const totalAll = computed(() => Number(props.stats?.total ?? 0));
const avgAll = computed(() => Number(props.stats?.avg ?? 0));

function pct(star: number) {
    const c = Number((props.stats?.dist as any)?.[star] ?? 0);
    const t = totalAll.value || 1;
    return Math.round((c / t) * 100);
}

function stars(n: number) {
    const v = Math.max(0, Math.min(5, Math.round(Number(n) || 0)));
    return Array.from({ length: 5 }, (_, i) => i < v);
}


// ✅ держим выбранную игру как id (string для Select)
const gameSelectedId = ref<string>("__all__");

// при заходе на страницу с query game=... — выставим выбранный id
watch(
    () => props.filters.game,
    (name) => {
        if (!name) {
            gameSelectedId.value = "__all__"; // чтобы в UI было "All games"
            return;
        }
        const g = props.games.find((x) => x.name === name);
        gameSelectedId.value = g ? String(g.id) : "__all__";
    },
    { immediate: true }
);

// вычисляем game name для отправки в бек
const selectedGameName = computed<string | null>(() => {
    if (!gameSelectedId.value) return null;           // placeholder state
    if (gameSelectedId.value === "__all__") return null;

    const id = Number(gameSelectedId.value);
    const g = props.games.find((x) => x.id === id);
    return g?.name ?? null;
});


function apply() {
    router.get(
        route("reviews.public"),
        {

            rating: ratingLocal.value ? Number(ratingLocal.value) : null,
            game: selectedGameName.value,
            product: productLocal.value.trim() || null,
        },
        {
            preserveScroll: true,
            preserveState: true,
        }
    )
}

function cancelFilters() {
    ratingLocal.value = ""
    productLocal.value = ""

    gameSelectedId.value = "__all__"

    router.get(
        route("reviews.public"),
        { preserveScroll: true, preserveState: true }
    )
}

function formatDateShort(value?: string | null) {
    if (!value) return ""


    const isoLike = value.replace(" ", "T")
    const d = new Date(isoLike)

    if (Number.isNaN(d.getTime())) return value

    return new Intl.DateTimeFormat("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
    }).format(d)
}

function relativeTime(value?: string | null) {
    if (!value) return ""

    const isoLike = value.replace(" ", "T")
    const d = new Date(isoLike)
    if (Number.isNaN(d.getTime())) return ""

    const now = new Date()
    let diffMs = now.getTime() - d.getTime()
    if (diffMs < 0) diffMs = 0

    const dayMs = 24 * 60 * 60 * 1000
    const days = Math.floor(diffMs / dayMs)

    if (days <= 0) return "Today"
    if (days === 1) return "1 day ago"
    if (days < 7) return `${days} days ago`

    const weeks = Math.floor(days / 7)
    if (weeks === 1) return "1 week ago"
    if (weeks < 5) return `${weeks} weeks ago`

    const months = Math.floor(days / 30)
    if (months <= 11) return months === 1 ? "1 month ago" : `${months} months ago`

    const years = Math.floor(days / 365)
    return years <= 1 ? "1+ years ago" : `${years}+ years ago`
}
</script>

<template>
    <SeoHead :seo="props.seo" />
    <DefaultLayout>
        <section class="w-[90%] 2xl:w-[75%] mx-auto py-8">
            <div class="flex items-end justify-between gap-4 mb-6">
                <div>
                    <h1 class="text-3xl font-semibold">Reviews</h1>
                    <div class="text-sm text-muted-foreground mt-1">Verified & moderated reviews.</div>
                </div>


            </div>

            <!-- Overview -->
            <div class="border border-border rounded-xl p-4 mb-6">
                <div>
                    <div class="text-xs text-muted-foreground">Average rating</div>
                    <div class="flex items-center gap-2 mt-1">
                        <div class="text-3xl font-semibold">{{ avgAll.toFixed(1) }}</div>
                        <div class="flex items-center gap-0.5">
                            <Star v-for="(on, i) in stars(avgAll)" :key="i" class="h-4 w-4"
                                :class="on ? 'text-primary fill-primary' : 'text-muted-foreground/40'" />
                        </div>
                    </div>
                    <div class="text-xs text-muted-foreground mt-1">
                        {{ totalAll.toLocaleString("en-US") }} total reviews
                    </div>
                </div>
                <div class="flex items-start gap-4 md:items-stretch">

                    <!-- LEFT: rating + distribution -->
                    <div class="w-full md:w-[420px] space-y-2 mt-4 self-stretch">


                        <div v-for="star in [5, 4, 3, 2, 1]" :key="star" class="flex items-center gap-3">
                            <div class="w-14 text-xs text-muted-foreground">{{ star }}-star</div>

                            <div class="flex-1 h-2 rounded-full bg-muted overflow-hidden">
                                <div class="h-full bg-primary"
                                    :style="{ width: `${pct(star)}%`, minWidth: pct(star) > 0 ? '10px' : '0px' }" />
                            </div>

                            <div class="w-12 text-right text-xs text-muted-foreground">
                                <span v-if="pct(star) === 0">0%</span>
                                <span v-else-if="pct(star) < 1">&lt;1%</span>
                                <span v-else>{{ pct(star) }}%</span>
                            </div>
                        </div>
                    </div>

                    <!-- RIGHT: highlight cards fill available height -->
                    <div class="grid w-full md:grid-cols-2 gap-4 h-full  self-stretch">
                        <!-- Most reviewed -->
                        <div class="border border-border rounded-xl p-3 h-full flex  flex-col">
                            <div class="text-sm font-semibold">Most reviewed product</div>

                            <div v-if="highlights.most_reviewed" class="mt-3 flex items-center gap-3">
                                <img v-if="highlights.most_reviewed.image_url" :src="highlights.most_reviewed.image_url"
                                    class="w-12 h-12 rounded-lg object-cover border border-border"
                                    :alt="highlights.most_reviewed.name ?? ''" />
                                <div v-else class="w-12 h-12 rounded-lg bg-muted border border-border"></div>

                                <div class="min-w-0">
                                    <div class="font-medium truncate">
                                        {{ highlights.most_reviewed.name ?? '—' }}
                                    </div>
                                    <div class="text-xs text-muted-foreground">
                                        {{ highlights.most_reviewed.count }} reviews
                                    </div>
                                </div>
                            </div>

                            <div v-else class="mt-2 text-sm text-muted-foreground">
                                Not enough data yet.
                            </div>

                            <!-- optional: чтобы визуально низ был “занят” -->
                            <div class="mt-auto pt-3 text-[11px] text-muted-foreground/70">
                                Based on approved reviews.
                            </div>
                        </div>

                        <!-- Highest rated -->
                        <div class="border border-border rounded-xl p-3 h-full flex flex-col">
                            <div class="text-sm font-semibold">Highest score product</div>

                            <div v-if="highlights.highest_rated" class="mt-3 flex items-center gap-3">
                                <img v-if="highlights.highest_rated.image_url" :src="highlights.highest_rated.image_url"
                                    class="w-12 h-12 rounded-lg object-cover border border-border"
                                    :alt="highlights.highest_rated.name ?? ''" />
                                <div v-else class="w-12 h-12 rounded-lg bg-muted border border-border"></div>

                                <div class="min-w-0">
                                    <div class="font-medium truncate">
                                        {{ highlights.highest_rated.name ?? '—' }}
                                    </div>

                                    <div class="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                                        <div class="flex items-center gap-0.5">
                                            <Star v-for="(on, i) in stars(highlights.highest_rated.avg)" :key="i"
                                                class="h-4 w-4"
                                                :class="on ? 'text-primary fill-primary' : 'text-muted-foreground/40'" />
                                        </div>
                                        <span>{{ Number(highlights.highest_rated.avg).toFixed(1) }}</span>
                                        <span>·</span>
                                        <span>{{ highlights.highest_rated.count }} reviews</span>
                                    </div>
                                </div>
                            </div>

                            <div v-else class="mt-2 text-sm text-muted-foreground">
                                Need at least {{ highlights.highest_rated?.min_reviews ?? 5 }} reviews for a product.
                            </div>

                            <div class="mt-auto pt-3 text-[11px] text-muted-foreground/70">
                                Minimum {{ highlights.highest_rated?.min_reviews ?? 5 }} reviews required.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="border border-border rounded-xl p-4 mb-6">
                <form @submit.prevent="apply" class="grid md:grid-cols-3 gap-3">
                    <div>
                        <div class="text-xs text-muted-foreground mb-1">Rating (1–5)</div>
                        <Input type="number" min="1" max="5" v-model="ratingLocal" placeholder="e.g. 5" />
                    </div>

                    <div>
                        <div class="text-xs text-muted-foreground mb-1">Game</div>

                        <Select v-model="gameSelectedId">
                            <SelectTrigger class="w-full">
                                <SelectValue placeholder="Select a game…" />
                            </SelectTrigger>

                            <SelectContent class="max-h-[320px]">
                                <SelectGroup>
                                    <SelectItem value="__all__">All games</SelectItem>

                                    <SelectItem v-for="g in games" :key="g.id" :value="String(g.id)">
                                        <div class="flex items-center gap-2">
                                            <img v-if="g.image_url" :src="g.image_url"
                                                class="w-5 h-5 rounded object-cover" :alt="g.name" />
                                            <span class="truncate">{{ g.name }}</span>
                                        </div>
                                    </SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>

                        <div class="text-[11px] text-muted-foreground mt-1">Pick from existing games.</div>
                    </div>

                    <div>
                        <div class="text-xs text-muted-foreground mb-1">Product</div>
                        <Input v-model="productLocal" placeholder="Type product name…" />
                    </div>

                    <div class="md:col-span-3 flex gap-2 pt-2">

                        <Button type="submit">Apply filters</Button>

                        <Button type="button" variant="secondary" @click="cancelFilters">Cancel</Button>
                    </div>
                </form>
            </div>

            <div class="grid grid-cols-2 gap-4 ">
                <div v-for="r in reviews.data" :key="r.id" class="border border-border rounded-xl p-4">
                    <div class="flex items-start justify-between gap-4">
                        <div class="flex items-start gap-3">
                            <img v-if="r.avatar_url" :src="r.avatar_url" class="w-10 h-10 rounded-full object-cover"
                                :alt="r.display_name ?? 'User'" />
                            <div v-else class="w-10 h-10 rounded-full bg-muted"></div>

                            <div>
                                <div class="font-semibold">{{ r.display_name ?? 'Verified customer' }}</div>

                                <div class="flex items-center gap-2 text-xs text-muted-foreground">
                                    <div class="flex items-center gap-0.5">
                                        <Star v-for="(on, i) in stars(r.rating)" :key="i" class="h-4 w-4"
                                            :class="on ? 'text-primary fill-primary' : 'text-muted-foreground/40'" />
                                    </div>

                                    <span v-if="r.published_at">· {{ formatDateShort(r.published_at) }}</span>
                                </div>
                            </div>
                        </div>

                        <!-- ✅ relative label on the right -->
                        <div v-if="r.published_at"
                            class="text-xs whitespace-nowrap rounded-full border border-border bg-muted px-2 py-1 text-muted-foreground">
                            {{ relativeTime(r.published_at) }}
                        </div>
                    </div>

                    <div class="mt-3 whitespace-pre-line">{{ r.body }}</div>

                    <div
                        class="mt-4 pt-3 border-t border-border flex items-center  gap-3 text-sm text-muted-foreground">
                        <div class="flex items-center gap-2">
                            <img v-if="r.game?.image_url" :src="r.game.image_url" class="w-6 h-6 rounded object-cover"
                                :alt="r.game?.name ?? ''" />
                            <span>{{ r.game?.name ?? '—' }}</span>
                        </div>

                        <div class="flex items-center gap-2">
                            <img v-if="r.product?.image_url" :src="r.product.image_url"
                                class="w-6 h-6 rounded object-cover" :alt="r.product?.name ?? ''" />
                            <span>{{ r.product?.name ?? '—' }}</span>
                        </div>
                    </div>
                </div>
            </div>


            <div class="mt-6 text-sm text-muted-foreground">
                <Pagination :links="reviews.links" />
            </div>
        </section>
    </DefaultLayout>
</template>
