<template>
  <div
    class="w-full flex flex-col items-center px-36 py-8"
  >
    <div
      class="w-full h-screen flex flex-col items-center bg-white gap-8"
    >
      <Navbar />
      <Hero />
    </div>
    <div
      class="w-full flex flex-col items-center bg-white gap-8"
    >
      <div
        class="flex gap-2 text-[35px]"
      >
        <span
          class="text-primary-200"
        >
          Additional
        </span>
        <span
          class="text-primary-100 font-black"
        >
          Passions
        </span>
      </div>
      <div
        class="flex justify-between items-center w-full"
      >
        <Passion
          v-for="passion in passions"
          :passion="passion"
        />
      </div>
    </div>
  </div>
</template>

<script setup>

import Navbar from "components/Portfoliio/Navbar.vue";
import Hero from "components/Portfoliio/Hero.vue";
import {ref} from "vue";
import Passion from "components/Portfoliio/Passion.vue";


const passions = ref([
  {
    title_1: 'Front-End',
    title_2: 'Developer',
    content: '(Sass, Bootstrap, Tailwind)',
    image: 'portfolio/Front end dev.png',
  },
  {
    title_1: 'Back-End',
    title_2: 'Developer',
    content: '(NodeJS, Laravel, Codeigniter)',
    image: 'portfolio/Back end dev.png',
  },
  {
    title_1: 'UI/UX',
    title_2: 'Designer',
    content: '(Figma, Zeplin, Adobe XD)',
    image: 'portfolio/ui ux design.png',
  },
])

</script>

<style scoped>

</style>
