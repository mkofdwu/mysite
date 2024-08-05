<script setup lang="ts">
import MaterialIcon from '@/components/MaterialIcon.vue'
import LinkedInIcon from '@/components/icons/LinkedInIcon.vue'
import GithubIcon from '@/components/icons/GithubIcon.vue'
</script>

<template>
  <div class="absolute top-0 left-0 w-full h-full overflow-hidden">
    <img
      src="@/assets/images/illustration.png"
      class="w-full h-full object-cover absolute top-0 -right-0.5"
    />
    <div class="flex flex-col items-start absolute left-14 bottom-14 max-sm:left-8 max-sm:bottom-8">
      <h1 class="mb-5 text-primary">Contact</h1>
      <a class="group mb-4 flex items-center gap-x-6" href="mailto:mkofdwu@gmail.com">
        <MaterialIcon name="mail" class="h-7" />
        <div class="relative">
          mkofdwu@gmail.com
          <div class="absolute w-0 h-px bg-white transition-all group-hover:w-full"></div>
        </div>
      </a>
      <a
        class="group mb-4 flex items-center gap-x-6"
        href="https://linkedin.com/in/lee-jia-jie"
        target="_blank"
      >
        <LinkedInIcon />
        <div class="relative">
          linkedin.com/in/lee-jia-jie
          <div class="absolute w-0 h-px bg-white transition-all group-hover:w-full"></div>
        </div>
      </a>
      <a class="group flex items-center gap-x-6" href="https://github.com/mkofdwu" target="_blank">
        <GithubIcon />
        <div class="relative">
          mkofdwu
          <div class="absolute w-0 h-px bg-white transition-all group-hover:w-full"></div>
        </div>
      </a>
    </div>
  </div>
</template>
