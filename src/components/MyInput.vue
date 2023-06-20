
<template>
  <label >username :  {{usernameLength}}</label>
  <input
      class="w-1/2"
      :value="username"
      @input="handleChangeComponent"
  />
</template>

<script setup>
import {ref, watch} from "vue";


const emits = defineEmits([
    'handle-change'
])

const props = defineProps({
  username: {
    type: String,
    default : ''
  }
})

let usernameLength = ref(props.username.length)
//let _username = ref(props.username)

watch(
    () => props.username,
    (newVal, oldValue) => {
      console.log('username was changed ', newVal, oldValue)
      usernameLength.value = newVal.toString().length
    },
    // {
    //   immediate: true
    // }
)

function handleChangeComponent(e) {
  emits('handle-change', e.target.value)
}

</script>

<style scoped>

</style>