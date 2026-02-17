<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Star } from "lucide-vue-next";

interface ReviewProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
  rating: number;
}

const reviewList: ReviewProps[] = [
  {
    image: "https://github.com/shadcn.png",
    name: "John Doe",
    userName: "Product Manager",
    comment:
      "Wow Vue + Shadcn-Vue is awesome!. This template lets me change colors, fonts and images to match my brand identity. ",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Sophia Collins",
    userName: "Cybersecurity Analyst",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. ",
    rating: 4.8,
  },

  {
    image: "https://github.com/shadcn.png",
    name: "Adam Johnson",
    userName: "Chief Technology Officer",
    comment:
      "Lorem ipsum dolor sit amet,exercitation. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    rating: 4.9,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Ethan Parker",
    userName: "Data Scientist",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod labore et dolore magna aliqua. Ut enim ad minim veniam.",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Ava Mitchell",
    userName: "IT Project Manager",
    comment:
      "Lorem ipsum dolor sit amet, tempor incididunt  aliqua. Ut enim ad minim veniam, quis nostrud incididunt consectetur adipiscing elit.",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Isabella Reed",
    userName: "DevOps Engineer",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    rating: 4.9,
  },
];
</script>

<template>
  <section
    
    class="mx-auto w-[90%] pt-14 sm:pt-20 lg:pt-[130px] 2xl:w-[75%]"
  >
    <div class="text-center mb-8">
      <h2 class="mb-2 text-center text-sm font-semibold tracking-[0.2em] text-[#4A6CF7] sm:text-base">
        Testimonials
      </h2>

      <h2 class="mb-4 text-center text-3xl font-semibold text-white sm:text-4xl md:text-[50px] md:leading-[60px]">
        Hear What Our 1000+ Clients Say
      </h2>
    </div>

    <Carousel
      :opts="{
        align: 'start',
      }"
      class="relative mx-auto w-[75%] sm:w-[90%] lg:max-w-screen-xl"
    >
      <CarouselContent>
        <CarouselItem
          v-for="review in reviewList"
          :key="review.name"
          class="md:basis-1/2 lg:basis-1/3"
        >
          <Card class="rounded-sm border border-[#2E333D] bg-[#1D232D]">
            <CardContent class="pt-6 pb-0">
              <div class="flex gap-1 pb-6">
                <Star class="size-4 fill-[#4A6CF7] text-[#4A6CF7]" />
                <Star class="size-4 fill-[#4A6CF7] text-[#4A6CF7]" />
                <Star class="size-4 fill-[#4A6CF7] text-[#4A6CF7]" />
                <Star class="size-4 fill-[#4A6CF7] text-[#4A6CF7]" />
                <Star class="size-4 fill-[#4A6CF7] text-[#4A6CF7]" />
              </div>

              <p class="text-base font-medium text-[#79808A]">"{{ review.comment }}"</p>
            </CardContent>

            <CardHeader>
              <div class="flex flex-row items-center gap-4">
                <Avatar class="size-10">
                  <AvatarImage
                    src="https://www.radix-vue.com/logo.svg"
                    alt="@radix-vue"
                  />
                  <AvatarFallback>SV</AvatarFallback>
                </Avatar>

                <div class="flex flex-col">
                  <CardTitle class="text-lg text-white">{{ review.name }}</CardTitle>
                  <CardDescription class="text-[#79808A]">{{ review.userName }}</CardDescription>
                </div>
              </div>
            </CardHeader>
          </Card>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious class="border-[#414652] bg-[#1D232D] text-[#79808A] hover:bg-[#222C40] hover:text-[#4A6CF7] disabled:opacity-50" />
      <CarouselNext class="border-[#414652] bg-[#1D232D] text-[#79808A] hover:bg-[#222C40] hover:text-[#4A6CF7] disabled:opacity-50" />
    </Carousel>
  </section>
</template>
