// import { defineNuxtConfig } from "nuxt3";
// import { defineNuxtConfig } from "nuxt";

export default defineNuxtConfig({
  css: ["@/assets/css/styles.css"],
  alias: {
    "class-validator": "class-validator/cjs/index.js",
  },

  modules: ["@nuxtjs/tailwindcss"],
});
