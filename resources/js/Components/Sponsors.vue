<script setup lang="ts">
import { Marquee } from "@selemondev/vue3-marquee";
import "@selemondev/vue3-marquee/dist/style.css";

import {
  Crown,
  Vegan,
  Ghost,
  Puzzle,
  Squirrel,
  Cookie,
  Drama,
} from "lucide-vue-next";

interface sponsorsProps {
  icon: string;
  name: string;
}

const sponsors: sponsorsProps[] = [
  {
    icon: "crown",
    name: "Acmebrand",
  },
  {
    icon: "vegan",
    name: "Acmelogo",
  },
  {
    icon: "ghost",
    name: "Acmesponsor",
  },
  {
    icon: "puzzle",
    name: "Acmeipsum",
  },
  {
    icon: "squirrel",
    name: "Acme",
  },
  {
    icon: "cookie",
    name: "Accmee",
  },
  {
    icon: "drama",
    name: "Acmetech",
  },
];

const iconMap: Record<
  string,
  | typeof Crown
  | typeof Vegan
  | typeof Ghost
  | typeof Puzzle
  | typeof Squirrel
  | typeof Cookie
  | typeof Drama
> = {
  crown: Crown,
  vegan: Vegan,
  ghost: Ghost,
  puzzle: Puzzle,
  squirrel: Squirrel,
  cookie: Cookie,
  drama: Drama,
};
</script>

<template>
  <section
    id="sponsors"
    class="mx-auto w-[90%] pt-14 sm:pt-20 lg:pt-[130px] 2xl:w-[75%]"
  >
    <h2 class="mb-8 text-center text-sm font-semibold tracking-[0.2em] text-[#4A6CF7] sm:text-base">Our Platinum Sponsors</h2>

    <div class="mx-auto rounded-sm border border-[#2E333D] bg-[#1D232D]/70 px-4 py-5 backdrop-blur">
      <Marquee
        class="gap-[3rem] text-[#79808A]"
        :pauseOnHover="true"
        :fade="true"
        innerClassName="gap-[3rem]"
      >
        <div
          v-for="{ icon, name } in sponsors"
          :key="name"
        >
          <div class="flex items-center text-xl font-medium md:text-2xl">
            <component
              :is="iconMap[icon]"
              class="mr-2 text-[#4A6CF7]"
              stroke-width="3"
            />
            {{ name }}
          </div>
        </div>
      </Marquee>
    </div>
  </section>
</template>
