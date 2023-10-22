<template>
  <div
    class="h-screen w-full flex flex-col gap-4 justify-center items-center"
  >
    <h1
        class="text-5xl"
    >
      Slots
    </h1>

<!--    <SlotChild-->
<!--        title="Child Title"-->
<!--    />-->

    <SlotChild
        title="Child Title"
    >
      <template v-slot:header>
        <div>
          header
        </div>
      </template>
      <template v-slot:body>
        <div>
          body
        </div>
      </template>
    </SlotChild>

  </div>
</template>

<script setup>

import SlotChild from "@/components/SlotChild.vue";
</script>
