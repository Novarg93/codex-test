<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import {
  Sparkle,
  Tag,
  Paintbrush,
  Blocks,
  LineChart,
  Wallet,
} from "lucide-vue-next";

interface BenefitsProps {
  icon: string;
  title: string;
  description: string;
}

const benefitList: BenefitsProps[] = [
  {
    icon: "blocks",
    title: "Build Brand Trust",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A odio velit cum aliquam. Natus consectetur dolores.",
  },
  {
    icon: "lineChart",
    title: "More Leads",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A odio velit cum aliquam, natus consectetur.",
  },
  {
    icon: "wallet",
    title: "Higher Conversions",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus consectetur. A odio velit cum aliquam",
  },
  {
    icon: "sparkle",
    title: "Test Marketing Ideas",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A odio velit cum aliquam. Natus consectetur dolores.",
  },
];

const iconMap: Record<
  string,
  | typeof Sparkle
  | typeof Tag
  | typeof Paintbrush
  | typeof Blocks
  | typeof LineChart
  | typeof Wallet
> = {
  sparkle: Sparkle,
  tag: Tag,
  paintbrush: Paintbrush,
  blocks: Blocks,
  lineChart: LineChart,
  wallet: Wallet,
};
</script>

<template>
  <section
    
    class="mx-auto w-[90%] pt-14 sm:pt-20 lg:pt-[130px] 2xl:w-[75%]"
  >
    <div class="grid lg:grid-cols-2 place-items-center lg:gap-24">
      <div>
        <h2 class="mb-2 text-sm font-semibold tracking-[0.2em] text-[#4A6CF7] sm:text-base">Benefits</h2>

        <h2 class="mb-4 text-3xl font-semibold text-white sm:text-4xl md:text-[50px] md:leading-[60px]">
          Your Shortcut to Success
        </h2>
        <p class="mb-8 text-base font-medium text-[#79808A] sm:text-xl">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non ducimus
          reprehenderit architecto rerum similique facere odit deleniti
          necessitatibus quo quae.
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-4 w-full">
        <Card
          v-for="({ icon, title, description }, index) in benefitList"
          :key="title"
          class="group/number rounded-sm border border-[#2E333D] bg-[#1D232D] transition-all delay-75 hover:bg-[#222C40]"
        >
          <CardHeader>
            <div class="flex justify-between">
              <component
                class="mb-6 size-8 text-[#4A6CF7]"
                :is="iconMap[icon]"
              />

              <span
                class="text-5xl font-medium text-[#79808A]/15 transition-all delay-75 group-hover/number:text-[#79808A]/40"
                >0{{ index + 1 }}</span
              >
            </div>

            <CardTitle class="text-xl font-semibold leading-tight tracking-tight text-white sm:text-2xl">{{ title }}</CardTitle>
          </CardHeader>

          <CardContent class="text-base font-medium text-[#79808A]">
            {{ description }}
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
</template>
