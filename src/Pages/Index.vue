<template>
  <div
    class="w-full h-screen flex flex-col bg-amber-200 justify-center items-center gap-12"
  >
    <div
      class="flex justify-between items-center gap-8"
    >
      <h1
          class="text-[17px] md:text-[32px] lg:text-abdou"
      >
        List of items
      </h1>
      <svg
          v-if="editing"
          @click="editing = !editing"
          xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="w-10 h-10 cursor-pointer hover:bg-gray-300 p-2 rounded-full"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
      <svg
          v-else
          @click="editing = !editing"
          xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="w-10 h-10 cursor-pointer hover:bg-gray-300 p-2 rounded-full"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    </div>
    <ItemsList
      :items="items"
      :editing="editing"
      @update-item="updateItem"
      @delete-item="deleteItem"
    />
    <div
      class="flex"
    >
      <input v-model="name" />
      <button
        class="border-black"
        @click="addItem"
      >
        Add
      </button>
    </div>
  </div>
</template>

<script setup>

import {onBeforeMount, ref} from "vue";
import axios from "axios";
import ItemsList from "@/Components/ItemsList.vue";

const editing = ref(false)
const items = ref([])
const name = ref('')

onBeforeMount(async () => {
  await getItems()
})

const getItems = async () => {
  await axios.get('http://localhost:3000/items')
      .then((res) => {
        // Success
        items.value = res.data
      })
      .catch((err) => {
        console.error(err)
      })
}

const addItem = async () => {
  await axios.post('http://localhost:3000/items',
      {
        name: name.value
      }
  )
    .then(async (res) => {
      // item added
      await getItems()
    })
    .catch((err) => {
      console.error(err)
    })
}

const updateItem = async (index) => {
  await axios.put(`http://localhost:3000/items/${items.value[index].id}`,
      {
        name: items.value[index].name
      }
  )
    .then(async (res) => {
      // item updated
      await getItems()
    })
    .catch((err) => {
      console.error(err)
    })
}
const deleteItem = async (index) => {
  await axios.delete(`http://localhost:3000/items/${items.value[index].id}`)
    .then(async (res) => {
      // item updated
      await getItems()
    })
    .catch((err) => {
      console.error(err)
    })
}


</script>

<style scoped>

</style>