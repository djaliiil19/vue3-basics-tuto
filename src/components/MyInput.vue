
<template>
  <label >username :  {{username}}</label>
  <input
      class="w-1/2"
      :value="username"
      @input="handleChangeComponent"
  />
</template>

<script setup>
import {ref} from "vue";


const emits = defineEmits([
    'handle-change'
])

const props = defineProps({
  username: {
    type: String,
    default : ''
  }
})

function handleChangeComponent(e) {
  console.log(123, e.target.value)
  emits('handle-change', e.target.value)
}

</script>

<style scoped>

</style>