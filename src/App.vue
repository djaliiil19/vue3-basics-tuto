<template>
  <div
      class="h-screen w-full flex flex-col gap-4 justify-center items-center"
  >
    <h1
        class="text-5xl"
    >
      List of items
    </h1>
    <ul>
      <li
          v-for="(item, index) in items"
          :key="index"
      >
        {{index}}-{{ item.value  }}
      </li>
    </ul>
    <input v-model="itemVal" />
    <button @click="addItem">Add Item</button>
  </div>
</template>

<script setup>
import {reactive, ref} from "vue";


const number = ref(1)
const itemVal = ref('')

const items = reactive([
  {id: 1, value: 'Item 1'},
  {id: 2, value: 'Item 2'},
  {id: 3, value: 'Item 3'},
  {id: 4, value: 'Item 4'},
  {id: 5, value: 'Item 5'},
])

const addItem = () => {
  items.push({
    value: itemVal.value
  })
}
</script>
