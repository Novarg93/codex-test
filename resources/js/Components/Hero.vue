<script setup lang="ts">

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-vue-next";
</script>

<template>
    <section class="mx-auto w-[90%] pt-28 pb-24 lg:pt-[170px] lg:pb-[120px] 2xl:w-[75%]">
        <div class="mx-auto grid place-items-center gap-10 lg:max-w-screen-xl">
            <div class="space-y-8 text-center">
                <Badge class="rounded-sm border border-[#2E333D] bg-[#1D232D] px-3 py-2 text-sm font-medium text-[#79808A]">
                    <span class="mr-2 text-primary">
                        <Badge class="rounded-sm bg-[#4A6CF7] p-1 text-white">New</Badge>
                    </span>
                    <span> Design is out now! </span>
                </Badge>

                <div class="mx-auto max-w-[920px] text-center">
                    <h1 class="text-2xl font-semibold leading-tight text-white sm:text-4xl md:text-[50px] md:leading-[60px]">
                        Experience the
                        <span
                            class="bg-gradient-to-r from-[#9BB1FF] to-[#4A6CF7] bg-clip-text text-transparent">Shadcn/Vue
                        </span>
                        landing page
                    </h1>
                </div>

                <p class="mx-auto max-w-[780px] text-base font-medium text-[#79808A] sm:text-xl">
                    We're more than just a tool, we're a community of passionate creators.
                    Get access to exclusive resources, tutorials, and support.
                </p>

                <div class="space-y-4 md:space-x-4 md:space-y-0">
                    <Button class="group/arrow w-5/6 rounded-sm bg-[#4A6CF7] px-8 py-[14px] font-semibold text-white transition hover:bg-[#4A6CF7]/90 md:w-1/4">
                        Get Started
                        <ArrowRight class="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
                    </Button>

                    <Button as-child variant="secondary" class="w-5/6 rounded-sm border border-[#414652] bg-[#222C40] px-8 py-[14px] font-semibold text-white transition hover:bg-[#4A6CF7] md:w-1/4">
                        <a href="https://github.com/leoMirandaa/shadcn-vue-landing-page.git" target="_blank">Github
                            respository</a>
                    </Button>
                </div>
            </div>

            <div class="relative mt-14 group">
                <!-- gradient shadow -->
                <div
                    class="img-shadow-animation absolute -top-6 right-12 h-20 w-[90%] rounded-full bg-[#4A6CF7]/35 blur-3xl lg:h-[80%]">
                </div>

                <img class="img-border-animation relative mx-auto flex w-full items-center rounded-sm border border-[#2E333D] border-t-2 border-t-[#4A6CF7]/40 bg-[#1D232D] leading-none md:w-[1200px]"
                    src="/public/images/hero-image-dark.jpg" alt="dashboard using shadcn-vue" />

                <!-- gradient effect img -->
                <div
                    class="bottom-0 left-0 h-20 w-full rounded-sm bg-gradient-to-b from-transparent via-[#111722]/40 to-[#111722] md:h-28">
                </div>
            </div>
        </div>
    </section>
</template>
