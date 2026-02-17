<script setup lang="ts">
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { computed } from "vue"

interface FaqIn {
  id?: number | string
  question: string
  answer: string
  value?: string
}

const props = defineProps<{
  faqs?: FaqIn[] | null
  title?: string
  subtitle?: string
}>()

const fallbackFaqs: FaqIn[] = [
  { question: "Is this template free?", answer: "Yes. It is a free Shadcn/Vue template.", value: "item-1" },
  { question: "Duis aute irure dolor in reprehenderit in voluptate velit?", answer: "Lorem ipsum dolor sit amet...", value: "item-2" },
  { question: "Lorem ipsum dolor sit amet Consectetur natus dolor minus quibusdam?", answer: "Lorem ipsum dolor sit amet consectetur...", value: "item-3" },
  { question: "Excepteur sint occaecat cupidata non proident sunt?", answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.", value: "item-4" },
  { question: "Enim ad minim veniam, quis nostrud exercitation ullamco laboris?", answer: "consectetur adipisicing elit. Sint labore.", value: "item-5" },
]

const faqItems = computed(() =>
  (props.faqs?.length ? props.faqs : fallbackFaqs).map((f, idx) => ({
    ...f,
    _value: f.value ?? `item-${f.id ?? idx + 1}`,
  })),
)
</script>

<template>
  <section id="faq" class="mx-auto w-[90%] pt-14 sm:pt-20 sm:pb-20 lg:pt-[130px] md:w-[700px] ">
    <div class="mb-8 text-center">
      <h2 class="mb-2 text-center text-sm font-semibold tracking-[0.2em] text-[#4A6CF7] sm:text-base">
        {{ subtitle ?? "FAQS" }}
      </h2>

      <h2 class="text-center text-3xl font-semibold text-white sm:text-4xl md:text-[50px] md:leading-[60px]">
        {{ title ?? "Common Questions" }}
      </h2>
    </div>

    <Accordion v-if="faqItems.length" type="single" collapsible class="AccordionRoot">
      <AccordionItem
        v-for="faq in faqItems"
        :key="faq._value"
        :value="faq._value"
        class="my-4 rounded-sm border border-[#2E333D] bg-[#1D232D] px-4"
      >
        <AccordionTrigger class="text-left text-base font-medium text-white hover:text-[#4A6CF7]">
          {{ faq.question }}
        </AccordionTrigger>

        <AccordionContent
          class="text-base font-medium text-[#79808A]"
          v-html="faq.answer"
        />
      </AccordionItem>
    </Accordion>

    <div v-else class="text-center text-[#79808A]">
      We will add FAQs soon.
    </div>

    <h3 class="mt-4 font-medium text-white">
      Still have questions?
      <a href="#" class="text-[#79808A] underline transition hover:text-[#4A6CF7]">Contact us</a>
    </h3>
  </section>
</template>
