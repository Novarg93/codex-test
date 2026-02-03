<script setup lang="ts">
import DefaultLayout from '@/Layouts/DefaultLayout.vue';

import Contact from '@/components/Contact.vue';
import { Head } from '@inertiajs/vue3';
import SeoHead from '@/components/SeoHead.vue'

const props = defineProps<{
  seo: any
}>()
</script>





<template>
  <SeoHead :seo="props.seo" />
  <DefaultLayout>
    
        <Contact/>
    
  </DefaultLayout>
</template>