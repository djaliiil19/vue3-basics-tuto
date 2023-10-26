<template>
  <div
    class="relative flex flex-col items-center justify-center rounded-[13px] pb-1 pr-1 pt-4 pl-4 shadow-2xl"
  >
    <img class="absolute top-3 left-3" :src="item.background">
    <div
      class="flex gap-2 w-full z-50 -ml-2"
      :class="{'flex-col items-start': item.imageHeader == null, 'items-center': item.imageHeader}"
    >
      <img :src="item.imageHeader" class="z-50">
      <div>
        <p
          class="text-[25px] font-medium"
          :class="item.titleColor"
        >
          {{ item.title }}
        </p>
        <p
          class="text-[13px] text-right w-full -mt-3 font-light"
          :class="item.titleColor"
        >
          {{ item.content }}
        </p>
      </div>
    </div>
    <img class="pl-2 z-50" :src="item.image">
  </div>
</template>

<script setup>

const props = defineProps({
  item: {
    type: Object,
    default: {}
  }
})

</script>

<style scoped>

</style>
