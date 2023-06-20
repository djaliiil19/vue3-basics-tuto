

<template>
  <div
    class="flex flex-col bg-gray-400 w-full items-center"
  >
    <h2 class="text-red-400 text-2xl">{{ title }}</h2>

    <slot name="header" />
    <slot name="body" />
  </div>
</template>


<script setup>

const props = defineProps({
  title: {
    type: String,
    default: 'Title'
  }
})

</script>

<style scoped>

</style>