<template>
  <div
    class="h-screen w-full flex gap-4 justify-center items-center"
  >
    <label >username :  {{username}}</label>
    <input
      class="w-1/2"
      v-model="username"
    />
<!-- Solution 2 !: remplace v-model : pour gerer l'evenement mannuallemnet-->
<!--    <input-->
<!--      class="w-1/2"-->
<!--      :value="username"-->
<!--      @input="handleChange"-->
<!--    />-->

  </div>
</template>

<script setup>

import {computed, reactive, ref} from "vue";

let username = ref('hani')

// SOlution 2: remplace v-model : pour gerer l'evenement mannuallemnet
// function handleChange(e) {
//   console.log(123, e.target.value)
//   username.value = e.target.value
// }


</script>
