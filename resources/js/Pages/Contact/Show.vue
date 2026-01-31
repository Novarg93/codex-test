<script setup lang="ts">
import DefaultLayout from '@/Layouts/DefaultLayout.vue';

import Contact from '@/Components/Contact.vue';
import { Head } from '@inertiajs/vue3';
import SeoHead from '@/Components/SeoHead.vue'

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