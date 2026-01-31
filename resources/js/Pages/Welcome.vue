<script setup lang="ts">
import SeoHead from '@/Components/SeoHead.vue'
import DefaultLayout from '@/Layouts/DefaultLayout.vue'
import Hero from '@/Components/Hero.vue'
import Sponsors from '@/Components/Sponsors.vue'
import Benefits from '@/Components/Benefits.vue'
import Features from '@/Components/Features.vue'
import Services from '@/Components/Services.vue'
import HowItWorks from '@/Components/HowItWorks.vue'
import Testimonials from '@/Components/Testimonials.vue'
import Team from '@/Components/Team.vue'
import Community from '@/Components/Community.vue'
import Pricing from '@/Components/Pricing.vue'
import FAQ from '@/Components/FAQ.vue'

defineProps<{
  faqs: any[]
  seo: any
}>()
</script>

<template>
  
  <SeoHead :seo="seo" />

  <DefaultLayout>
    <Hero/>
    <Sponsors/>
    <Benefits/>
    <Features/>
    <Services/>
    <HowItWorks/>
    <Testimonials/>
    <Team/>
    <Community/>
    <Pricing/>
    <FAQ :faqs="faqs"/>
  </DefaultLayout>
</template>
