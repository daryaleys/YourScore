<script setup lang="ts">
import { RouterView } from "vue-router";
import { getCurrentTheme, toggleTheme } from "./helpers/helpers";
import { themeStore } from "./store/themeStore";
import HeaderLayout from "./components/header/HeaderLayout.vue";
import SideBarList from "./components/sidebar/SideBarList.vue";
import FooterLayout from "./components/footer/FooterLayout.vue";

const store = themeStore();
if (getCurrentTheme()) {
  store.isDarkMode = true;
  toggleTheme();
}
</script>

<template>
  <HeaderLayout class="app-header" />
  <SideBarList />
  <RouterView></RouterView>
  <div class="empty"></div>
  <FooterLayout class="app-footer" />
</template>

<style lang="scss">
#app {
  display: grid;
  grid-template-columns: 1fr 728px 1fr;
  grid-template-rows: repeat(3, auto);
  justify-content: space-between;
  grid-row-gap: 12px;
}

.app-header,
.app-footer {
  grid-column: 1 / 4;
}

.empty {
  width: 170px;
}

@media screen and (width <=1080px) {
  #app {
    grid-template-columns: 170px 1fr;
    justify-content: start;
  }

  .empty {
    display: none;
  }
}

@media screen and (width <=768px) {
  #app {
    grid-template-columns: 1fr;
  }

  .sidebar {
    display: none;
  }
}
</style>
