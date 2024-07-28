<script setup lang="ts">
import HeaderTop from "./HeaderTop.vue";
</script>

<template>
    <header class="header">
        <div class="container header__container">
            <HeaderTop />
            <div class="header__list"></div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
.header {
    background: #171717;
}
</style>
