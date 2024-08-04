<script setup lang="ts">
import { RouterView } from "vue-router";
import HeaderLayout from "./components/header/HeaderLayout.vue";
import { getCurrentTheme, toggleTheme } from "./helpers/helpers";
import { themeStore } from "./store/themeStore";

const store = themeStore();
if (getCurrentTheme()) {
    store.isDarkMode = true;
    toggleTheme();
}
</script>

<template>
    <HeaderLayout />
    <RouterView></RouterView>
</template>

<style lang="scss" scoped></style>
