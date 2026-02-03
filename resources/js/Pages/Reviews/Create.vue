<script setup lang="ts">
import DefaultLayout from "@/Layouts/DefaultLayout.vue";
import { ref, computed } from "vue";
import axios from "axios";
import { router } from "@inertiajs/vue3";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Alert, AlertDescription } from "@/components/ui/alert";

const props = defineProps<{
    orderId: number;
    item: {
        id: number;
        product_id: number | null;
        product_name: string;
        product_image_url?: string | null;
        qty: number;
    };
    game: { id: number; name: string; image_url?: string | null } | null;
}>();

const rating = ref<number>(5);
const body = ref<string>("");
const isAnonymous = ref<boolean>(false);
const submitting = ref(false);
const error = ref<string | null>(null);


const ratingModel = computed<string>({
    get: () => String(rating.value),
    set: (v) => {
        const n = Number(v);
        if (Number.isFinite(n) && n >= 1 && n <= 5) rating.value = n;
    },
});

async function submit() {
    if (submitting.value) return;
    error.value = null;
    submitting.value = true;

    try {
        await axios.post(route("reviews.store", { order: props.orderId, item: props.item.id }), {
            rating: rating.value,
            body: body.value,
            is_anonymous: isAnonymous.value,
        });

        router.visit(route("orders.show", props.orderId));
    } catch (e: any) {
        error.value = e?.response?.data?.message ?? "Failed to submit review";
        submitting.value = false;
    }
}
</script>

<template>
    <DefaultLayout>
        <section class="w-[90%] 2xl:w-[75%] mx-auto py-8">
            <div class="flex items-start justify-between gap-4 mb-6">
                <div>
                    <h1 class="text-3xl font-semibold">Leave a review</h1>
                    <div class="text-sm text-muted-foreground mt-1">
                        Order #{{ orderId }} · Item #{{ item.id }}
                    </div>
                </div>

                <Button variant="secondary" @click="router.visit(route('orders.show', orderId))">
                    Back to order
                </Button>
            </div>

            <!-- Product snapshot -->
            <Card class="mb-6">
                <CardContent class="pt-6">
                    <div class="flex items-center gap-3">
                        <Avatar class="h-12 w-12 rounded-lg">
                            <AvatarImage v-if="item.product_image_url" :src="item.product_image_url"
                                :alt="item.product_name" />
                            <AvatarFallback class="rounded-lg">
                                {{ (item.product_name || "P").slice(0, 1).toUpperCase() }}
                            </AvatarFallback>
                        </Avatar>

                        <div class="flex-1 min-w-0">
                            <div class="font-medium truncate">{{ item.product_name }}</div>
                            <div class="text-xs text-muted-foreground">Qty: {{ item.qty }}</div>
                        </div>

                        <div v-if="game" class="hidden sm:flex items-center gap-2 text-xs text-muted-foreground">
                            <Avatar class="h-6 w-6">
                                <AvatarImage v-if="game.image_url" :src="game.image_url" :alt="game.name" />
                                <AvatarFallback>{{ (game.name || "G").slice(0, 1).toUpperCase() }}</AvatarFallback>
                            </Avatar>
                            <span class="max-w-[220px] truncate">{{ game.name }}</span>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <!-- Form -->
            <Card>
                <CardHeader>
                    <CardTitle>Review</CardTitle>
                    <CardDescription>Reviews are published after moderation.</CardDescription>
                </CardHeader>

                <CardContent class="space-y-5">
                    <div class="space-y-2">
                        <Label>Rating</Label>

                        <ToggleGroup v-model="ratingModel" type="single" class="justify-start">
                            <ToggleGroupItem v-for="n in 5" :key="n" :value="String(n)" class="h-9 w-9 px-0 border
                       data-[state=on]:bg-primary
                       data-[state=on]:text-primary-foreground
                       data-[state=on]:border-primary">
                                {{ n }}
                            </ToggleGroupItem>
                        </ToggleGroup>

                        <div class="text-xs text-muted-foreground">Selected: {{ rating }}/5</div>
                    </div>

                    <div class="space-y-2">
                        <Label for="review-body">Your review</Label>
                        <Textarea id="review-body" v-model="body" rows="6"
                            placeholder="Tell others about your experience…" />
                    </div>

                    <div class="flex items-center gap-2">
                        <Checkbox id="anonymous" v-model="isAnonymous" />
                        <Label for="anonymous">Post anonymously</Label>
                    </div>
                    
                    <div class="text-xs text-muted-foreground">
                        If enabled, your name and avatar won’t be shown publicly.
                    </div>

                    <Alert v-if="error" variant="destructive">
                        <AlertDescription>{{ error }}</AlertDescription>
                    </Alert>

                    <div class="flex gap-2">
                        <Button :disabled="submitting" @click="submit">
                            {{ submitting ? "Submitting…" : "Submit review" }}
                        </Button>
                        <Button variant="secondary" @click="router.visit(route('orders.show', orderId))">
                            Cancel
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </section>
    </DefaultLayout>
</template>