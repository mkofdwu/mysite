<script setup lang="ts">
import { RouterView } from 'vue-router'
import MyNavBar from '@/components/MyNavBar.vue'
</script>

<template>
  <div class="h-full flex flex-col">
    <MyNavBar />
    <RouterView />
  </div>
</template>

<style scoped></style>
