<script setup lang="ts">
import ApplicationLogo from '@/components/ApplicationLogo.vue';
import { Link } from '@inertiajs/vue3';
import SeoHead from '@/components/SeoHead.vue'



const seo = {
  
  robots: 'noindex,nofollow',
}


</script>

<template>
    <SeoHead :seo="seo" />
    <div
        class="flex min-h-screen flex-col items-center pt-6 sm:justify-center sm:pt-0"
    >
        <div>
            <Link href="/">
                <ApplicationLogo class="h-20 w-20 fill-current " />
            </Link>
        </div>

        <div
            class="mt-6 w-full overflow-hidden bg-card border border-border px-6 py-4 shadow-md sm:max-w-md sm:rounded-lg"
        >
            <slot />
        </div>
    </div>
</template>
