<template>
  <div
    class="h-screen w-full flex gap-4 justify-center items-center"
  >
    <div>
      <label >Celsius :  </label>
      <input
          class="w-1/2"
          v-model="celsius"
      />
    </div>
    <div>
      <label >Fahrenheit :  </label>
      <input
          class="w-1/2"
          v-model="fahrenheit"
      />
    </div>

<!-- Solution 2 !: remplace v-model : pour gerer l'evenement mannuallemnet-->
<!--    <input-->
<!--      class="w-1/2"-->
<!--      :value="username"-->
<!--      @input="handleChange"-->
<!--    />-->
<!--  <MyInput-->
<!--    :username="username"-->
<!--    @handle-change="handleChangeParent"-->
<!--  />-->
  </div>

  <div
      class="h-screen w-full flex gap-4 justify-center items-center"
  >
    <div>
      <label >a : </label>
      <input
          class="w-1/2"
          v-model="a"
      />
    </div>
    <div>
      <label >b : </label>
      <input
          class="w-1/2"
          v-model="b"
      />
    </div>
    a + b = {{ sumComputed }}
  </div>
  {{testtest}}
</template>

<script setup>

import {computed, reactive, ref, watch} from "vue";
import MyInput from "@/components/MyInput.vue";

// let celsius = ref(0)
// let fahrenheit = ref(32)

const state = reactive({
  celsius: 0,
  fahrenheit: 32
});

const sumComputed = computed(() => ((parseInt(a.value) ?? 0) + (parseInt(b.value) ?? 0)))

const celsius = computed({
  get: () => state.celsius,
  set: (newValue) => {
    console.log('Celsus Computed')
    state.celsius = newValue;
    state.fahrenheit = (newValue * 9) / 5 + 32;
  }
});

const fahrenheit = computed({
  get: () => state.fahrenheit,
  set: (newValue) => {
    state.fahrenheit = newValue;
    state.celsius = ((newValue - 32) * 5) / 9;
  }
});

let username = ref('hani')
let firstName = ref('')
let lastName = ref('')
let test = ref()
//let fullName = ref(firstName.value + ' ' + lastName.value)

// SOlution 2: remplace v-model : pour gerer l'evenement mannuallemnet
// function handleChange(e) {
//   console.log(123, e.target.value)
//   username.value = e.target.value
// }


let usernameLength = ref(username.value.length)
let a = ref(0)
let b = ref(0)
let sum = ref(0)
let num = ref({
  a: 0,
  b: 0,
})


const fullName = computed(
    () => firstName.value + ' ' + lastName.value,
    // (val) => {
    //   test.value = val
    // }
)
// watch(
//     [firstName, lastName],
//     ([newA, newB], [oldA, oldB]) => {
//       console.log(newA, newB)
//       fullName.value = newA + ' ' + newB
//     }
// )

// watch(
//     [a, b],
//     ([newA, newB], [oldA, oldB]) => {
//       sum.value = parseInt(newA) + parseInt(newB)
//     }
// )

// ([newA, newB], [oldA, oldB]) => {
//   console.log(` **********  ${newB} ** ${oldB}  ********`)
//   sum.value = parseInt(newA) + parseInt(newB)
// },
//
// watch(
//     username,
//     (newVal, oldVal) => {
//       console.log('username was changed: ', newVal, oldVal)
//       usernameLength.value = newVal.length
//     }
// )



function handleChangeParent (val){
  username.value = val
}

</script>
