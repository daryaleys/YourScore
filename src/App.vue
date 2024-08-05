<script setup lang="ts">
import { RouterView } from "vue-router";
import { getCurrentTheme, toggleTheme } from "./helpers/helpers";
import { themeStore } from "./store/themeStore";
import HeaderLayout from "./components/header/HeaderLayout.vue";
import FooterLayout from "./components/footer/FooterLayout.vue";

const store = themeStore();
if (getCurrentTheme()) {
  store.isDarkMode = true;
  toggleTheme();
}
</script>

<template>
  <HeaderLayout />
  <RouterView></RouterView>
  <FooterLayout />
</template>

<style lang="scss" scoped></style>
