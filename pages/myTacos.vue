<template>
  <h1 class="text-2xl text-white text-center mx-auto p-4 bg-gray-900">
    My Tacos
  </h1>
  <div class="bg-gray-900 mx-auto text-white text-center p-10">
    <Taco
      v-for="taco in ourTacosList"
      :key="taco.name"
      :name="taco.name"
      :aka="taco.aka"
      :meat="taco.meat"
      :region="taco.region"
      :imageURL="taco.image"
      class="flex justify-center mb-5"
    ></Taco>
  </div>
</template>

<script setup>
// import { ref } from "vue";
import tacosList from "@/configs/tacosData.js";
import Taco from "@/components/Taco.vue";
console.log(tacosList);

const ourTacosList = tacosList;
</script>
