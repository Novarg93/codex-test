<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface HowItWorksProps {
  badgeTitle: string;
  title: string;
  description: string;
  image: string;
}

const HowItWorksList: HowItWorksProps[] = [
  {
    badgeTitle: "Contribute",
    title: "Make a Difference with Every Contribution",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem fugiat, quasi sint reiciendis quidem iure.",
    image: "/images/roboto.png",
  },
  {
    badgeTitle: "Discover",
    title: "Create an Impact with Every Choice",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem fugiat, sint reiciendis quidem iure veritatis optio facere tenetur.",
    image: "/images/runner.png",
  },
  {
    badgeTitle: "Innovate",
    title: "Make Every Action Count",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem fugiat, odit similique quasi sint.",
    image: "/images/pacheco.png",
  },
  {
    badgeTitle: "Collaborate",
    title: "Tackle this challenge together",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem fugiat, quasi sint reiciendis quidem iure.",
    image: "/images/gamestation.png",
  },
];
</script>

<template>
  <section    
    class="mx-auto w-[90%] pt-14 sm:pt-20 lg:pt-[130px] 2xl:w-[75%]"
  >
    <div class="text-center mb-8">
      <h2 class="mb-2 text-center text-sm font-semibold tracking-[0.2em] text-[#4A6CF7] sm:text-base">
        How It Works
      </h2>

      <h2 class="text-center text-3xl font-semibold text-white sm:text-4xl md:text-[50px] md:leading-[60px]">
        Step-by-Step Process
      </h2>
    </div>

    <div class="relative mx-auto lg:w-[80%]">
      <div
        v-for="(
          { badgeTitle, title, description, image }, index
        ) in HowItWorksList"
        :key="title"
        :class="[
          'flex mb-8 items-center',
          { ' flex-row-reverse': index % 2 !== 0 },
        ]"
      >
        <Card class="h-full rounded-sm border border-[#2E333D] bg-[#1D232D]/80 shadow-none backdrop-blur">
          <CardHeader>
            <div class="pb-4">
              <Badge class="rounded-sm bg-[#4A6CF7] px-2 py-1 text-xs font-semibold text-white">{{ badgeTitle }}</Badge>
            </div>

            <CardTitle class="text-xl font-semibold leading-tight tracking-tight text-white sm:text-2xl">
              {{ title }}
            </CardTitle>
          </CardHeader>

          <CardContent class="w-[80%] text-base font-medium text-[#79808A]">
            {{ description }}
          </CardContent>
        </Card>

        <img
          :src="image"
          :alt="`Image describing ${title} `"
          class="mx-auto hidden w-[150px] -scale-x-100 sm:block md:w-[250px] lg:w-[300px]"
        />
        <div
          :class="[
            '-z-10 absolute right-0 h-72 w-44 rounded-full bg-[#4A6CF7]/15 blur-3xl lg:h-80 lg:w-64',
            {
              'left-0': index % 2 !== 0,
            },
          ]"
        ></div>
      </div>
    </div>
  </section>
</template>
