<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import {
  Paintbrush,
  MessageCircle,
  TabletSmartphone,
  BadgeCheck,
  Goal,
  PictureInPicture,
  MousePointerClick,
  Newspaper,
} from "lucide-vue-next";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: "tabletSmartphone",
    title: "Mobile Friendly",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A odio velit cum aliquam, consectetur.",
  },
  {
    icon: "badgeCheck",
    title: "Social Proof",
    description:
      "Lorem ipsum dolor sit amet consectetur. Natus consectetur, odio ea accusamus aperiam.",
  },
  {
    icon: "goal",
    title: "Targeted Content",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. odio ea accusamus aperiam.",
  },
  {
    icon: "pictureInPicture",
    title: "Strong Visuals",
    description:
      "Lorem elit. A odio velit cum aliquam. Natus consectetur dolores, odio ea accusamus aperiam.",
  },
  {
    icon: "mousePointerClick",
    title: "Clear CTA",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing. odio ea accusamus consectetur.",
  },
  {
    icon: "newspaper",
    title: "Clear Headline",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A odio velit cum aliquam. Natus consectetur.",
  },
];

const iconMap: Record<
  string,
  | typeof TabletSmartphone
  | typeof BadgeCheck
  | typeof Goal
  | typeof PictureInPicture
  | typeof Paintbrush
  | typeof MousePointerClick
  | typeof MessageCircle
  | typeof Newspaper
> = {
  tabletSmartphone: TabletSmartphone,
  badgeCheck: BadgeCheck,
  goal: Goal,
  pictureInPicture: PictureInPicture,
  paintbrush: Paintbrush,
  mousePointerClick: MousePointerClick,
  messageCircle: MessageCircle,
  newspaper: Newspaper,
};
</script>

<template>
  <section
   
    class="mx-auto w-[90%] pt-14 sm:pt-20 lg:pt-[130px] 2xl:w-[75%]"
  >
    <h2 class="mb-2 text-center text-sm font-semibold tracking-[0.2em] text-[#4A6CF7] sm:text-base">
      Features
    </h2>

    <h2 class="mb-4 text-center text-3xl font-semibold text-white sm:text-4xl md:text-[50px] md:leading-[60px]">
      What Makes Us Different
    </h2>

    <h3 class="mx-auto mb-8 text-center text-base font-medium text-[#79808A] sm:text-xl md:w-1/2">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem
      fugiat, odit similique quasi sint reiciendis quidem iure veritatis optio
      facere tenetur.
    </h3>

    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <div
        v-for="{ icon, title, description } in featureList"
        :key="title"
      >
        <Card class="h-full rounded-sm border border-[#2E333D] bg-[#1D232D] shadow-none transition hover:bg-[#222C40]">
          <CardHeader class="flex justify-center items-center">
            <div
              class="mb-4 rounded-full border border-[#414652] bg-[#4A6CF7]/20 p-2 ring-8 ring-[#4A6CF7]/10"
            >
              <component
                :is="iconMap[icon]"
                class="size-6 text-[#4A6CF7]"
              />
            </div>

            <CardTitle class="text-xl font-semibold leading-tight tracking-tight text-white sm:text-2xl">
              {{ title }}
            </CardTitle>
          </CardHeader>

          <CardContent class="text-center text-base font-medium text-[#79808A]">
            {{ description }}
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
</template>

<style lang="less" scoped></style>
