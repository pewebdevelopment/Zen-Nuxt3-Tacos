<template>
  <div class="bg-slate-900 h-screen m-0">
    <h1
      class="text-2xl text-white text-center mx-auto m-2 p-4 bg-gray-900 rounded-lg"
    >
      My Tacos
    </h1>

    <Taco
      v-for="taco in ourTacosList"
      :key="taco.name"
      name="taco.name"
      aka="taco.aka"
      meat="taco.meat"
      region="taco.region"
      imageURL="taco.image"
    ></Taco>
  </div>
</template>

<script setup>
import { ref } from "vue";
import tacosList from "@/configs/tacosData.js";
import Taco from "@/components/Taco.vue";
console.log(tacosList);

const ourTacosList = tacosList;
const count = ref(0);
</script>
