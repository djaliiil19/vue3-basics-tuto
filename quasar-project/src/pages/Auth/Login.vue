<template>
  <div
    class="h-screen w-full flex flex-center bg-primary-900 text-white"
  >
    <div
      class="flex flex-col items-start gap-8"
    >
      <h1
        class="text-2xl"
      >
        Login
      </h1>
      <div
        class="flex items-start justify-center gap-2"
      >
        <q-input
          class="w-full"
          color="white"
          label-color="white"
          input-style="color: white;"
          v-model="credentials.email"
          label="Email"
        />
        <q-input
          class="w-full"
          color="white"
          label-color="white"
          input-style="color: white;"
          v-model="credentials.password"
          label="Password"
          type="password"
        />
        <q-btn
          square class="w-full"
          color="primary"
          label="Login"
          type="button"
          @click="login"
        />
      </div>
    </div>
    <img src="/login/middleLeft.png" class="h-96 fixed -left-2">
    <img src="/login/topRight.png" class="h-56 w-56 fixed top-0 right-0">
    <img src="/login/bottomRight.png" class="h-56 w-56 fixed bottom-0 right-0">
  </div>
</template>

<script setup>

import {reactive} from "vue";
import {useAuthStore} from "stores/auth";
import {useRouter} from "vue-router";

const authStore = useAuthStore()
const router = useRouter()

const credentials = reactive({
  email: '',
  password: '',
})

const login = async () => {
  // login using email and password
  let result = await authStore.login(credentials)
  if (result)
    router.push('/')
}

</script>

<style scoped>

</style>
