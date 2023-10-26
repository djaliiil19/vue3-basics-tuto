<template>
  <a
    class="flex flex-col gap-4 hover:scale-110 cursor-pointer"
    :href="`${link.isEmail ? 'mailto:' : (link.isPhone ? 'https://wa.me/' : '')}${link.link}`"
    target="_blank"
  >
    <img :src="link.image" :alt="link.image">
    <h1
      class="w-full text-center text-primary-700 text-[35px]"
    >
      {{ link.text }}
    </h1>
  </a>
</template>

<script setup>

const props = defineProps({
  link: {
    type: Object,
    default: {}
  }
})

</script>

<style scoped>

</style>
