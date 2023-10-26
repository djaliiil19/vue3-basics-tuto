<template>
  <div
    class="w-full flex flex-col items-center pt-8 gap-24"
  >
    <div
      class="flex flex-col items-center px-8 md:px-36 gap-24"
    >
      <div
        class="w-full flex flex-col items-center bg-white gap-8"
      >
        <Navbar
          :contact="contact"
          @goto="goTo"
        />
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
          class="flex justify-between flex-col md:flex-row items-center w-full"
        >
          <Passion
            class="hover:scale-105 hover:rotate-2 delay-150 duration-300 ease-in-out"
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
          class="flex justify-between flex-col md:flex-row gap-4 items-center w-full"
        >
          <PortfolioCard
            class="hover:scale-105 hover:rotate-2 delay-150 duration-300 ease-in-out"
            v-for="item in portfolio"
            :item="item"
          />
        </div>
      </div>
    </div>
    <div
      ref="contact"
      class="relative w-full md:h-screen flex flex-row md:flex-col items-center gap-8"
    >
      <div
        class="flex gap-2 text-[35px] w-full justify-center"
      >
        <span
          class="text-primary-200"
        >
          Contact
        </span>
        <span
          class="text-primary-100 font-black"
        >
          Me
        </span>
      </div>
      <div
        class="flex justify-between flex-col md:flex-row items-center w-full px-8 md:px-36 pb-16 md:pb-0 gap-6 md:gap-2"
      >
        <ContactLink
          v-for="link in contactLinks"
          :link="link"
        />
      </div>
      <img
        class="w-full absolute bottom-0 left-0"
        src="portfolio/Vector.png"
        alt="portfolio/Vector.png"
      />
      <p
        class="w-full text-center absolute bottom-0 text-white text-[25px] md:text-[35px]"
      >
        Designed By Rauliqbal
      </p>
    </div>
  </div>
</template>

<script setup>

import Navbar from "components/Portfoliio/Navbar.vue";
import Hero from "components/Portfoliio/Hero.vue";
import {ref} from "vue";
import Passion from "components/Portfoliio/Passion.vue";
import PortfolioCard from "components/Portfoliio/PortfolioCard.vue";
import ContactLink from "components/Portfoliio/ContactLink.vue";


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

const contactLinks = ref([
  {
    text: 'Github',
    image: 'portfolio/github.png',
    link: 'https://www.github.com'
  },
  {
    text: 'Instagram',
    image: 'portfolio/instagram.png',
    link: 'https://www.instagram.com'
  },
  {
    text: 'Email',
    image: 'portfolio/email.png',
    link: 'bouzidi.abdeldjalil@gmail.com',
    isEmail: true
  },
  {
    text: 'Phone',
    image: 'portfolio/phone.png',
    link: '213566913283',
    isPhone: true
  },
])

const contact = ref(null)

const goTo = (section) => {
  console.log(1111, contact.value)
  if(section == 'contact')
    contact.value.scrollIntoView({ behavior: 'smooth' })
}


</script>

<style scoped>

</style>
