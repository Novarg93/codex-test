<script setup lang="ts">
import SeoHead from '@/components/SeoHead.vue'
import DefaultLayout from '@/Layouts/DefaultLayout.vue'
import Hero from '@/components/Hero.vue'
import Sponsors from '@/components/Sponsors.vue'
import Benefits from '@/components/Benefits.vue'
import Features from '@/components/Features.vue'
import Services from '@/components/Services.vue'
import HowItWorks from '@/components/HowItWorks.vue'
import Testimonials from '@/components/Testimonials.vue'
import Team from '@/components/Team.vue'
import Community from '@/components/Community.vue'
import Pricing from '@/components/Pricing.vue'
import FAQ from '@/components/FAQ.vue'

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
