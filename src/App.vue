<template>
  <Child
    v-if="render"
  />
</template>

<script setup>
import Child from "@/Child.vue";
import {ref} from "vue";

const render = ref(true)
</script>
