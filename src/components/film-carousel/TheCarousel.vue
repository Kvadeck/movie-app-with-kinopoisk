<script setup lang="ts">
import {getDivWidth, setDateNowForPremierUrl} from '@/utils'
import {useFetch} from "@vueuse/core"
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'

import {API_TOKEN} from "@/constants"
import {onMounted, ref} from 'vue'
import {useCarouselScroll} from "@/composables/useCarouselScroll";

const carouselDiv = ref<HTMLDivElement | null>(null)
const slideDiv = ref<HTMLDivElement | null>(null)

const {prevIsVisible, nextIsVisible} = useCarouselScroll(carouselDiv);
const premiereUrl = setDateNowForPremierUrl()

// const { isFetching, error, data } = useFetch(premiereUrl, {
//   async beforeFetch({ options }) {
//     options.headers = {
//       ...options.headers,
//       "X-API-KEY": API_TOKEN,
//     }
//     return {
//       options,
//     }
//   },
// })

function prevSlide() {
  const itemWidth = getDivWidth(slideDiv)
  if ("scrollLeft" in carouselDiv.value) {
    carouselDiv.value.scrollLeft -= itemWidth || 0
  }
}

function nextSlide() {
  const itemWidth = getDivWidth(slideDiv)
  if ("scrollLeft" in carouselDiv.value) {
    carouselDiv.value.scrollLeft += itemWidth || 0
  }
}

</script>

<template>

  <!--  <div class="carousel w-full">-->
  <!--    <div v-if="isFetching">-->
  <!--      Loading...-->
  <!--    </div>-->
  <!--    <div v-if="error">-->
  <!--      Error: {{ error.message ? error.message : String(error) }}-->
  <!--    </div>-->
  <!--    <div v-if="data">-->
  <!--      {{ data }}-->
  <!--    </div>-->
  <!--  </div>-->

  <h1 class="text-2xl pl-3 pb-2 font-semibold">Премьеры:</h1>
  <div class="px-4 sm:px-2 relative">
    <div ref="carouselDiv" class="carousel carousel-center rounded-box space-x-4">
      <div ref="slideDiv" class="carousel-item">
        <img
            src="https://kinopoiskapiunofficial.tech/images/posters/kp_small/5363159.jpg"
            class="rounded-box"/>
      </div>
      <div ref="slideDiv" class="carousel-item">
        <img
            src="https://kinopoiskapiunofficial.tech/images/posters/kp_small/4947675.jpg"
            class="rounded-box"/>
      </div>
      <div ref="slideDiv" class="carousel-item">
        <img
            src="https://kinopoiskapiunofficial.tech/images/posters/kp_small/4542104.jpg"
            class="rounded-box"/>
      </div>
      <div ref="slideDiv" class="carousel-item">
        <img
            src="https://kinopoiskapiunofficial.tech/images/posters/kp_small/5076454.jpg"
            class="rounded-box"/>
      </div>
      <div ref="slideDiv" class="carousel-item">
        <img
            src="https://kinopoiskapiunofficial.tech/images/posters/kp_small/4877770.jpg"
            class="rounded-box"/>
      </div>
      <div ref="slideDiv" class="carousel-item">
        <img
            src="https://kinopoiskapiunofficial.tech/images/posters/kp_small/5506627.jpg"
            class="rounded-box"/>
      </div>
      <div ref="slideDiv" class="carousel-item">
        <img
            src="https://kinopoiskapiunofficial.tech/images/posters/kp_small/5902045.jpg"
            class="rounded-box"/>
      </div>
    </div>

    <div class="hidden lg:flex absolute -left-7 -right-7 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a :class="{ 'opacity-0': !prevIsVisible }" @click.prevent="prevSlide"
         class="transition-opacity btn btn-circle btn-neutral">❮</a>
      <a :class="{ 'opacity-0': !nextIsVisible }" @click.prevent="nextSlide"
         class="transition-opacity btn btn-circle btn-neutral">❯</a>
    </div>

    <div class="flex lg:hidden transform justify-center gap-2">
      <a @click.prevent="prevSlide"
         class="transition-opacity btn btn-circle btn-neutral">❮</a>
      <a @click.prevent="nextSlide"
         class="transition-opacity btn btn-circle btn-neutral">❯</a>
    </div>

  </div>
</template>
