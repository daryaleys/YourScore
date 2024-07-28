<script setup lang="ts">
import HeaderMenu from "./ui/HeaderMenu.vue";
import HeaderMoreBtn from "./ui/HeaderMoreBtn.vue";
</script>

<template>
    <div class="header__bottom">
        <div class="container header__container">
            <HeaderMenu />
            <HeaderMoreBtn />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.header__bottom {
    background: var(--color-dop-back);
    transition: background 0.3s ease-in-out;
}

.header__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>