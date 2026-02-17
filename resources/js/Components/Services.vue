<script setup lang="ts">
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

enum ProService {
  YES = 1,
  NO = 0,
}

interface ServiceProps {
  title: string;
  pro: ProService;
  description: string;
}

const serviceList: ServiceProps[] = [
  {
    title: "Custom Domain Integration",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit adipisicing.",
    pro: 0,
  },
  {
    title: "Social Media Integrations",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, dicta.",
    pro: 0,
  },
  {
    title: "Email Marketing Integrations",
    description: "Lorem dolor sit amet adipisicing.",
    pro: 0,
  },
  {
    title: "SEO Optimization",
    description: "Lorem ipsum dolor sit amet consectetur.",
    pro: 1,
  },
];
</script>

<template>
  <section    
   class="mx-auto w-[90%] pt-14 sm:pt-20 lg:pt-[130px] 2xl:w-[75%]"
  >
    <h2 class="mb-2 text-center text-sm font-semibold tracking-[0.2em] text-[#4A6CF7] sm:text-base">
      Services
    </h2>

    <h2 class="mb-4 text-center text-3xl font-semibold text-white sm:text-4xl md:text-[50px] md:leading-[60px]">
      Grow Your Business
    </h2>
    <h3 class="mx-auto mb-8 text-center text-base font-medium text-[#79808A] sm:text-xl md:w-1/2">
      From marketing and sales to operations and strategy, we have the expertise
      to help you achieve your goals.
    </h3>
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"></div>

    <div
      class="mx-auto grid w-full gap-4 sm:grid-cols-2 lg:w-[60%] lg:grid-cols-2"
    >
      <div
        v-for="{ title, description, pro } in serviceList"
        :key="title"
      >
        <Card class="relative h-full rounded-sm border border-[#2E333D] bg-[#1D232D] transition hover:bg-[#222C40]">
          <CardHeader>
            <CardTitle class="text-xl font-semibold leading-tight tracking-tight text-white sm:text-2xl">{{ title }}</CardTitle>
            <CardDescription class="text-base font-medium text-[#79808A]">{{ description }}</CardDescription>
          </CardHeader>
          <Badge
            v-if="pro === ProService.YES"
            variant="secondary"
            class="absolute -right-3 -top-2 rounded-sm bg-[#4A6CF7] px-2 py-1 text-xs font-semibold text-white"
            >PRO</Badge
          >
        </Card>
      </div>
    </div>
  </section>
</template>
