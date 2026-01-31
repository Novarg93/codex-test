<script setup lang="ts">
import { Head } from '@inertiajs/vue3'

const props = defineProps<{
  seo: {
    title?: string | null
    description?: string | null
    canonical?: string | null
    robots?: string | null
    og?: {
      title?: string | null
      description?: string | null
      image?: string | null
      url?: string | null
      type?: string | null
      site_name?: string | null
    }
  }
}>()
</script>

<template>
  <Head :title="seo.title ?? undefined">
    <meta v-if="seo.description" head-key="description" name="description" :content="seo.description" />
    <meta v-if="seo.robots" head-key="robots" name="robots" :content="seo.robots" />
    <meta v-if="seo.robots" head-key="googlebot" name="googlebot" :content="seo.robots" />

    <link v-if="seo.canonical" head-key="canonical" rel="canonical" :href="seo.canonical" />

    <meta v-if="seo.og?.type" head-key="og:type" property="og:type" :content="seo.og.type" />
    <meta v-if="seo.og?.site_name" head-key="og:site_name" property="og:site_name" :content="seo.og.site_name" />
    <meta v-if="seo.og?.url || seo.canonical" head-key="og:url" property="og:url" :content="seo.og?.url ?? seo.canonical" />

    <meta v-if="seo.og?.title" head-key="og:title" property="og:title" :content="seo.og.title" />
    <meta v-if="seo.og?.description" head-key="og:description" property="og:description" :content="seo.og.description" />
    <meta v-if="seo.og?.image" head-key="og:image" property="og:image" :content="seo.og.image" />

    <meta head-key="twitter:card" name="twitter:card" :content="seo.og?.image ? 'summary_large_image' : 'summary'" />
    <meta v-if="seo.og?.title" head-key="twitter:title" name="twitter:title" :content="seo.og.title" />
    <meta v-if="seo.og?.description" head-key="twitter:description" name="twitter:description" :content="seo.og.description" />
    <meta v-if="seo.og?.image" head-key="twitter:image" name="twitter:image" :content="seo.og.image" />
  </Head>
</template>
