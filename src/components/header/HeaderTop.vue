<script setup lang="ts">
import Search from "../search/Search.vue";
import ToggleTheme from "../toggle-theme/ToggleTheme.vue";
</script>

<template>
    <div class="header__top">
        <div class="container header__container">
            <a href="/" class="header__logo">
                <img width="216" height="35" src="@/assets/icons/logo.svg" alt="Логотип" class="logo" />
            </a>

            <div class="header__actions">
                <Search />
                <ToggleTheme />
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
    .header__top {
        padding: 6px 10px;
    }

    .logo {
        width: 180px;
        height: auto;
    }
}
</style>
