<script setup lang="ts">
import { setDateNowForPremierUrl } from '@/utils'
import {useFetch} from "@vueuse/core";
import {API_TOKEN} from "@/constants";

const premiereUrl = setDateNowForPremierUrl()

const { isFetching, error, data } = useFetch(premiereUrl, {
  async beforeFetch({ options }) {
    options.headers = {
      ...options.headers,
      "X-API-KEY": API_TOKEN,
    }
    return {
      options,
    }
  },
})


</script>

<template>
  <div class="carousel w-full">
    <div v-if="isFetching">
      Loading...
    </div>
    <div v-if="error">
      Error: {{ error.message ? error.message : String(error) }}
    </div>
    <div v-if="data">
      {{ data }}
    </div>
  </div>
</template>
