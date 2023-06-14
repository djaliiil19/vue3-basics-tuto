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
          v-for="item in items"
          :key="item.id"
      >
        {{item.id}}-{{ item.value  }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import {reactive, ref} from "vue";

const items = reactive([
  {id: 1, value: 'Item 1'},
  {id: 2, value: 'Item 2'},
  {id: 3, value: 'Item 3'},
  {id: 4, value: 'Item 4'},
  {id: 5, value: 'Item 5'},
])
</script>
