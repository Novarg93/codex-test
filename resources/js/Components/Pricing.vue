<script setup lang="ts">
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Check } from "lucide-vue-next";

enum PopularPlan {
  NO = 0,
  YES = 1,
}

interface PlanProps {
  title: string;
  popular: PopularPlan;
  price: number;
  description: string;
  buttonText: string;
  benefitList: string[];
}

const plans: PlanProps[] = [
  {
    title: "Free",
    popular: 0,
    price: 0,
    description:
      "Lorem ipsum dolor sit, amet ipsum consectetur adipisicing elit.",
    buttonText: "Start Free Trial",
    benefitList: [
      "1 team member",
      "1 GB storage",
      "Upto 2 pages",
      "Community support",
      "AI assistance",
    ],
  },
  {
    title: "Premium",
    popular: 1,
    price: 45,
    description:
      "Lorem ipsum dolor sit, amet ipsum consectetur adipisicing elit.",
    buttonText: "Get starterd",
    benefitList: [
      "4 team member",
      "8 GB storage",
      "Upto 6 pages",
      "Priority support",
      "AI assistance",
    ],
  },
  {
    title: "Enterprise",
    popular: 0,
    price: 120,
    description:
      "Lorem ipsum dolor sit, amet ipsum consectetur adipisicing elit.",
    buttonText: "Contact US",
    benefitList: [
      "10 team member",
      "20 GB storage",
      "Upto 10 pages",
      "Phone & email support",
      "AI assistance",
    ],
  },
];
</script>

<template>
  <section class="mx-auto w-[90%] pt-14 sm:pt-20 lg:pt-[130px] 2xl:w-[75%]">
    <h2 class="mb-2 text-center text-sm font-semibold tracking-[0.2em] text-[#4A6CF7] sm:text-base">
      Pricing
    </h2>

    <h2 class="mb-4 text-center text-3xl font-semibold text-white sm:text-4xl md:text-[50px] md:leading-[60px]">
      Get unlimitted access
    </h2>

    <h3
      class="mx-auto pb-14 text-center text-base font-medium text-[#79808A] sm:text-xl md:w-1/2"
    >
      Lorem ipsum dolor sit amet consectetur adipisicing reiciendis.
    </h3>

    <div class="grid lg:grid-cols-3 gap-8 lg:gap-4">
      <Card
        v-for="{
          title,
          popular,
          price,
          description,
          buttonText,
          benefitList,
        } in plans"
        :key="title"
        :class="[ 'mx-auto rounded-sm border border-[#2E333D] bg-[#1D232D] md:w-[60%] lg:w-full',
        {
          'border-[1.5px] border-[#4A6CF7] shadow-[0_14px_38px_rgba(74,108,247,0.20)] lg:scale-[1.1]':
            popular === PopularPlan?.YES,
        }]"
      >
        <CardHeader>
          <CardTitle class="pb-2 text-xl font-semibold leading-tight tracking-tight text-white sm:text-2xl">
            {{ title }}
          </CardTitle>

          <CardDescription class="pb-4 text-base font-medium text-[#79808A]">{{ description }}</CardDescription>

          <div>
            <span class="text-3xl font-semibold text-white">${{ price }}</span>
            <span class="text-[#79808A]"> /month</span>
          </div>
        </CardHeader>

        <CardContent class="flex">
          <div class="space-y-4">
            <span
              v-for="benefit in benefitList"
              :key="benefit"
              class="flex"
            >
              <Check class="mr-2 text-[#00CB99]" />
              <h3 class="text-base font-medium text-[#79808A]">{{ benefit }}</h3>
            </span>
          </div>
        </CardContent>

        <CardFooter>
          <Button
            :variant="popular === PopularPlan?.NO ? 'secondary' : 'default'"
            :class="[
              'w-full rounded-sm px-8 py-[14px] font-semibold',
              popular === PopularPlan?.NO
                ? 'bg-[#222C40] text-white hover:bg-[#4A6CF7]'
                : 'bg-[#4A6CF7] text-white hover:bg-[#4A6CF7]/90',
            ]"
          >
            {{ buttonText }}
          </Button>
        </CardFooter>
      </Card>
    </div>
  </section>
</template>
