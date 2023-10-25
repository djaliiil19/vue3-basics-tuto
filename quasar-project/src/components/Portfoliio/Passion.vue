<template>
  <div
    class="flex flex-col items-center justify-center rounded-[13px] px-10 py-4 shadow-2xl"
  >
    <img :src="passion.image">
    <div
      class="flex gap-2 text-[25px] text-black"
    >
            <span
              class="font-black"
            >
              {{ passion.title_1 }}
            </span>
      <span
        class=""
      >
              {{ passion.title_2 }}
            </span>
    </div>
    <span
      class="text-[18px]"
    >
            {{ passion.content }}
          </span>
  </div>
</template>

<script setup>

const props = defineProps({
  passion: {
    type: Object,
    default: {}
  }
})

</script>

<style scoped>

</style>
