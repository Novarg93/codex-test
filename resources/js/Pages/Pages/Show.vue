<script setup lang="ts">
import DefaultLayout from '@/Layouts/DefaultLayout.vue'
import SeoHead from '@/Components/SeoHead.vue'

const props = defineProps<{
  seo: any
  page: {
    id: number
    name: string
    code: string
    text: string | null
  }
}>()
</script>

<template>
  <SeoHead :seo="props.seo" />

  <DefaultLayout>
    <section class="w-[90%] 2xl:w-[75%] mx-auto py-8 md:py-12 lg:py-16">
      <h1 class="text-3xl font-semibold mb-6">{{ page.name }}</h1>
      <div class="legal max-w-none" v-html="page.text || ''" />
    </section>
  </DefaultLayout>
</template>
