<template>
  <div
    class="h-screen w-full flex flex-col gap-4 justify-center items-center"
  >
    <h1
        class="text-5xl"
        v-show="false"
    >
      Number signe
    </h1>
    <div
      class="flex gap-2"
    >
      <p

      >
        The number {{ number }} is :
      </p>
      <p
          v-if="number > 0"
          class="font-semibold"
      >
        positive
      </p>
      <p
          v-else-if="number < 0"
          class="font-semibold"
      >
        negative
      </p>
      <p
          v-else
          class="font-semibold"
      >
        zero
      </p>
<!--      <p-->
<!--          v-show="number > 0"-->
<!--          class="font-semibold"-->
<!--      >-->
<!--        positive-->
<!--      </p>-->
<!--      <p-->
<!--          v-show="number < 0"-->
<!--          class="font-semibold"-->
<!--      >-->
<!--        negative-->
<!--      </p>-->
<!--      <p-->
<!--          v-eshow="number == 0"-->
<!--          class="font-semibold"-->
<!--      >-->
<!--        zero-->
<!--      </p>-->
    </div>
  </div>
</template>

<script setup>
import {onMounted, ref} from "vue";

let msg = ref('')
let number = ref(150)

// if (number.value > 0) msg.value = 'positive'
// else if(number.value < 0) msg.value = 'negative'
// else msg.value = 'zero'


</script>
