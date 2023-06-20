<template>
  <div
    class="h-screen w-full flex gap-4 justify-center items-center"
  >
<!--    <label >username :  {{usernameLength}}</label>-->
<!--    <input-->
<!--      class="w-1/2"-->
<!--      v-model="username"-->
<!--    />-->
<!-- Solution 2 !: remplace v-model : pour gerer l'evenement mannuallemnet-->
<!--    <input-->
<!--      class="w-1/2"-->
<!--      :value="username"-->
<!--      @input="handleChange"-->
<!--    />-->
  <MyInput
    :username="username"
    @handle-change="handleChangeParent"
  />
  </div>

  <div
      class="h-screen w-full flex gap-4 justify-center items-center"
  >
    <div>
      <label >a : </label>
      <input
          class="w-1/2"
          v-model="num.a"
      />
    </div>
    <div>
      <label >b : </label>
      <input
          class="w-1/2"
          v-model="num.b"
      />
    </div>
    a + b = {{ sum }}
  </div>
</template>

<script setup>

import {computed, reactive, ref, watch} from "vue";
import MyInput from "@/components/MyInput.vue";

let username = ref('hani')

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

watch(
    num,
    (newVal, oldVal) => {
      console.log(`******** `, newVal, oldVal)
      sum.value = parseInt(newVal.a) + parseInt(newVal.b)
    },
    {
      deep: true
    }
)

// watch(
//     [a, b],
//     ([newA, newB], [oldA, oldB]) => {
//       console.log(` **********  ${newB} ** ${oldB}  ********`)
//       sum.value = parseInt(newA) + parseInt(newB)
//     },
// )
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
