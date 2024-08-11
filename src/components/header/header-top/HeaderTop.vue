<script setup lang="ts">
import { getImageUrl } from "@/helpers/helpers";
import Search from "../../search/Search.vue";
import HeaderBurger from "./header-burger/HeaderBurger.vue";

import logoUrl from "/src/assets/icons/logo.svg?url";
</script>

<template>
    <div class="header__top">
        <div class="container header__container">
            <a href="/" class="header__logo">
                <img width="216" height="35" :src="logoUrl" alt="Логотип" class="logo" />
            </a>   

            <div class="header__actions">
                <Search />
                <HeaderBurger />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.header__top {
    background: #171717;
}

.header__container {
    padding: 6px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.header__actions {
    display: flex;
    align-items: center;
    gap: 10px;
}

@media screen and (width <= 1080px) {
    .header__container {
        padding: 6px 10px;
    }

    .logo {
        width: 180px;
        height: auto;
    }
}
</style>
