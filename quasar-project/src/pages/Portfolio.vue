<template>
  <div
    class="w-full flex flex-col items-center px-36 py-8 gap-24"
  >
    <div
      class="w-full flex flex-col items-center bg-white gap-8"
    >
      <Navbar />
      <Hero />
    </div>
    <div
      class="w-full flex flex-col items-center gap-8"
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
    <div
      class="w-full flex flex-col items-center gap-8"
    >
      <div
        class="flex gap-2 text-[35px]"
      >
        <span
          class="text-primary-200"
        >
          My
        </span>
        <span
          class="text-primary-100 font-black"
        >
          Portfolio
        </span>
      </div>
      <div
        class="flex justify-between items-center w-full"
      >
        <PortfolioCard
          v-for="item in portfolio"
          :item="item"
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
import PortfolioCard from "components/Portfoliio/PortfolioCard.vue";


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

const portfolio = ref([
  {
    title: 'Sendpay',
    titleColor: 'text-primary-500',
    content: null,
    image: 'portfolio/SendPay 1.png',
    background: 'portfolio/Ellipse 6.png',
    imageHeader: 'portfolio/emojione_e-mail.png',
  },
  {
    title: 'E-Commerce',
    titleColor: 'text-primary-600',
    content: 'Website',
    image: 'portfolio/e-commerce 1 1.png',
    background: 'portfolio/Ellipse 6-1.png',
    imageHeader: null,
  },
  {
    title: null,
    content: null,
    image: 'portfolio/Edtech 1.png',
    background: 'portfolio/Ellipse 6-2.png',
    imageHeader: 'portfolio/BeatsLearning.png',
  },
])

</script>

<style scoped>

</style>
