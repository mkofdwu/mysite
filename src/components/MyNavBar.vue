<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="h-20 flex items-center justify-center z-10 gap-x-10 max-sm:gap-x-7 max-sm:h-16">
    <router-link
      to="/"
      class="transition-opacity"
      :class="$route.path === '/' ? 'opacity-100' : 'opacity-60'"
    >
      about me
    </router-link>
    <a href="https://jiajie-writeups.surge.sh" class="opacity-60">ctf writeups</a>
    <router-link
      to="/contact"
      class="transition-opacity"
      :class="$route.path === '/contact' ? 'opacity-100' : 'opacity-60'"
    >
      contact
    </router-link>
  </div>
  <div
    class="wave absolute z-10 top-20 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100vw-120px)] max-sm:w-screen max-sm:top-16"
  ></div>
</template>

<style scoped>
/* Copied from https://css-tricks.com/how-to-create-wavy-shapes-patterns-in-css/ */
.wave {
  --size: 5px;
  --b: 1.5px;
  --m: 0.9;
  --p: calc(var(--m) * var(--size));
  --R: calc(var(--size) * sqrt(var(--m) * var(--m) + 1) + var(--b) / 2);

  --_g: #0000 calc(99% - var(--b)), #000 calc(101% - var(--b)) 99%, #0000 101%;
  --mask: radial-gradient(var(--R) at left 50% bottom calc(-1 * var(--p)), var(--_g))
      calc(50% - 2 * var(--size)) calc(50% - var(--size) / 2 - var(--b) / 2) / calc(4 * var(--size))
      calc(var(--size) + var(--b)) repeat-x,
    radial-gradient(var(--R) at left 50% top calc(-1 * var(--p)), var(--_g)) 50%
      calc(50% + var(--size) / 2 + var(--b) / 2) / calc(4 * var(--size))
      calc(var(--size) + var(--b)) repeat-x;
  -webkit-mask: var(--mask);
  mask: var(--mask);
  background: #727272;
  height: 7px;
}
</style>
