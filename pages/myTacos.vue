<template>
  <div>
    <Taco
      v-for="taco in tacosList"
      :key="taco.name"
      name="taco.name"
      aka="taco.aka"
      meat="taco.meat"
      region="taco.region"
      imageURL="taco.imageURL"
    ></Taco>
  </div>
</template>

<script setup>
import tacosList from "@configs/tacosData.js";
</script>

<style lang="scss" scoped></style>
