<script setup lang="ts">
import {
  Card,
  CardHeader,
  CardTitle,
  CardFooter,
  CardContent,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

import DiscordIcon from "@/icons/DiscordIcon.vue";
</script>

<template>
  <section class="mx-auto w-[90%] pt-14 sm:pt-20 lg:pt-[130px] 2xl:w-[75%]">
    <hr class="border-[#2E333D]" />
    <div class="py-20 sm:py-20">
      <div class="mx-auto lg:w-[60%]">
        <Card
          class="flex flex-col items-center justify-center rounded-sm border border-[#2E333D] bg-[#1D232D] px-6 py-10 text-center shadow-none sm:p-[70px]"
        >
          <CardHeader>
            <CardTitle class="text-3xl font-semibold text-white sm:text-4xl md:text-[50px] md:leading-[60px]">
              <Component
                class="m-auto mb-4 h-20 w-20 text-[#4A6CF7]"
                :is="DiscordIcon"
              />
              Ready to join this
              <span
                class="bg-gradient-to-r from-[#9BB1FF] to-[#4A6CF7] bg-clip-text text-transparent"
              >
                Community?
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent class="text-base font-medium text-[#79808A] lg:w-[80%] sm:text-xl">
            Join our vibrant Discord community! Connect, share, and grow with
            like-minded enthusiasts. Click to dive in! 🚀
          </CardContent>

          <CardFooter>
            <Button as-child class="rounded-sm bg-[#4A6CF7] px-8 py-[14px] font-semibold text-white transition hover:bg-[#4A6CF7]/90">
              <a
                href="https://discord.com/"
                target="_blank"
              >
                Join Discord
              </a>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
    <hr class="border-[#2E333D]" />
  </section>
</template>
