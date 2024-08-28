<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheFooter from '@/components/TheFooter.vue'
import TheHeader from '@/components/TheHeader.vue'
</script>

<template>
  <div class="wrapper flex flex-col min-h-screen">
    <TheHeader />
    <RouterView />
    <TheFooter />
  </div>
</template>

<style scoped>

</style>
