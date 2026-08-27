<template>
  <div class="h-16 flex items-center justify-center z-10 px-10 max-sm:h-14 max-sm:px-0">
    <router-link to="/" class="flex-1 font-semibold text-lg max-lg:hidden">Jia Jie</router-link>
    <router-link
      to="/"
      class="transition-opacity mr-10 max-sm:mr-6"
      :class="$route.path === '/' ? 'opacity-100' : 'opacity-60 hover:opacity-100'"
    >
      about me
    </router-link>
    <a
      href="https://mkofdwu.github.io/ctf-writeups/"
      class="mr-10 max-sm:mr-6 transition-opacity opacity-60 hover:opacity-100"
    >
      ctf writeups
    </a>
    <router-link
      to="/links"
      class="transition-opacity"
      :class="$route.path === '/links' ? 'opacity-100' : 'opacity-60 hover:opacity-100'"
    >
      links
    </router-link>
    <div class="flex-1 max-lg:hidden"></div>
  </div>
  <div class="line top-16 w-[calc(100vw-5rem)] max-sm:top-14 max-sm:w-screen"></div>
</template>

<style scoped>
.line {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  height: 1.5px;
  z-index: 10;
  background-image: linear-gradient(to right, #525252 33%, rgba(82, 82, 82, 0) 0%);
  background-size: 12px;
}
</style>
