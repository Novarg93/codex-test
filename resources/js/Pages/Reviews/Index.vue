<script setup lang="ts">
import DefaultLayout from "@/Layouts/DefaultLayout.vue";
import { ref, watch, computed } from "vue";
import { router } from "@inertiajs/vue3";
import { Input } from "@/Components/ui/input";
import { Button } from "@/Components/ui/button";
import Pagination from "@/Components/Pagination.vue";


// ✅ shadcn select
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectGroup,
    SelectItem,
} from "@/Components/ui/select";

const props = defineProps<{
    filters: {
        rating?: number | null;
        game?: string | null;     // фильтр по НАЗВАНИЮ (строка)
        product?: string | null;
    };
    games: Array<{ id: number; name: string; image_url?: string | null }>;
    reviews: { data: any[]; links: any; meta: any };
}>();

const ratingLocal = ref<string>(props.filters.rating?.toString() ?? "");
const productLocal = ref<string>(props.filters.product ?? "");


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
</script>

<template>
    <DefaultLayout>
        <section class="w-[90%] 2xl:w-[75%] mx-auto py-8">
            <div class="flex items-end justify-between gap-4 mb-6">
                <div>
                    <h1 class="text-3xl font-semibold">Reviews</h1>
                    <div class="text-sm text-muted-foreground mt-1">Verified & moderated reviews.</div>
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

            <div class="space-y-3">
                <div v-for="r in reviews.data" :key="r.id" class="border border-border rounded-xl p-4">
                    <div class="flex items-start justify-between gap-4">
                        <div class="flex items-start gap-3">
                            <img v-if="r.avatar_url" :src="r.avatar_url" class="w-10 h-10 rounded-full object-cover"
                                :alt="r.display_name ?? 'User'" />
                            <div v-else class="w-10 h-10 rounded-full bg-muted"></div>

                            <div>
                                <div class="font-semibold">{{ r.display_name ?? 'Verified customer' }}</div>
                                <div class="text-xs text-muted-foreground">
                                    Rating: {{ r.rating }}/5 · {{ formatDateShort(r.published_at) }}
                                </div>
                            </div>
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
