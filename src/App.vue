<template>
  <div
    class="h-screen w-full flex gap-4 justify-center items-center"
  >
    <div>
      <label >Celsius :  </label>
      <input
          class="w-1/2"
          v-model="state.celsius"
      />
    </div>
    <div>
      <label >Fahrenheit :  </label>
      <input
          class="w-1/2"
          v-model="state.fahrenheit"
      />
    </div>
  </div>

</template>

<script setup>

import {computed, reactive, ref, watch} from "vue";

const state = reactive({
  celsius: 0,
  fahrenheit: 32,
  fromFahrenheitWatcher: false,
  fromCelsiusWatcher: false
});

watch(
    () => state.celsius,
    (newVal, oldVal) => {
      if(!state.fromFahrenheitWatcher) {
        console.log(111)
        state.fahrenheit = (newVal * 9) / 5 + 32
        state.fromFahrenheitWatcher = true
        state.fromCelsiusWatcher = true
      }
      else
        state.fromFahrenheitWatcher = false
    }
)
watch(
    () => state.fahrenheit,
    (newVal, oldVal) => {
      if(!state.fromCelsiusWatcher) {
        console.log(222)
        state.celsius = ((newVal - 32) * 5) / 9
        state.fromCelsiusWatcher = true
        state.fromFahrenheitWatcher = true
      }
      else
        state.fromCelsiusWatcher = false
    }
)

// const celsius = computed({
//   get: () => state.celsius,
//   set: (newValue) => {
//     state.celsius = newValue;
//     state.fahrenheit = (newValue * 9) / 5 + 32;
//   }
// });
//
// const fahrenheit = computed({
//   get: () => state.fahrenheit,
//   set: (newValue) => {
//     state.fahrenheit = newValue;
//     state.celsius = ((newValue - 32) * 5) / 9;
//   }
// });


</script>
