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
  <SideBarList class="sidebar" />
  <RouterView></RouterView>
  <div class="empty"></div>
  <FooterLayout class="app-footer" />
</template>

<style lang="scss">
#app {
  position: relative;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr 728px 1fr;
  grid-template-rows: auto auto 1fr;
  justify-content: space-between;
  align-content: start;
  grid-row-gap: 12px;
}

.sidebar {
  padding-right: 10px;
}

.app-header,
.app-footer {
  grid-column: 1 / 4;
}

.app-footer {
  align-self: end;
}

.empty {
  width: 170px;
}

@media screen and (width <=1080px) {
  #app {
    grid-template-columns: 170px 1fr;
    justify-content: start;
  }

  .sidebar {
    padding: 0 10px;
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
