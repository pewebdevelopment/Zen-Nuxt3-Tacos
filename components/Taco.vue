<template>
  <div></div>
</template>

<script setup>
import defineProps from "Vue";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  aka: {
    type: String,
    required: true,
  },

  meat: {
    type: String,
    required: true,
  },
  region: {
    type: String,
    required: false,
  },
  imageURL: {
    type: String,
    required: true,
  },
});
</script>

<style lang="scss" scoped></style>
