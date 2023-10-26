<template>
  <div
    class="flex justify-between items-center w-full"
  >
    <div
      class="flex w-2/5"
    >
        <span
          class="text-primary-100 text-2xl font-black"
        >
          Raul
        </span>
      <span
        class="text-primary-200 text-2xl"
      >
          iqbal
        </span>
    </div>
    <svg
      class="md:hidden w-10 h-10"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
    >
      <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
    <div
      class="hidden_lg md:flex justify-between items-center text-secondary-900 w-3/5"
    >
        <a
          class="text-[25px] hover:cursor-pointer hover:scale-105"
        >
          About
        </a>
        <a
          class="text-[25px] hover:cursor-pointer hover:scale-105"
          @click="goTo('passions')"
        >
          Passions
        </a>
        <a
          class="text-[25px] hover:cursor-pointer hover:scale-105"
          @click="goTo('portfolio')"
        >
          Portfolio
        </a>
      <button
        class="bg-primary-300 text-white text-lg px-4 py-1.5 rounded-lg drop-shadow-lg hover:cursor-pointer hover:scale-105 animate-bounce"
        @click="goTo('contact')"
      >
        Contact Me
      </button>
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
  contact: {}
})

const emits = defineEmits([
  'goto',
])

const goTo = (section) => {
  if(section == 'contact')
    props.contact.scrollIntoView({ behavior: 'smooth' })
  //emits('goto', section)
}

</script>

<style scoped>

</style>
