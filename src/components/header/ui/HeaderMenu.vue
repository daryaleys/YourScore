<script setup lang="ts">
import { RouterLink } from "vue-router";
import HeaderItem from "./HeaderItem.vue";
import type { MenuItems } from "../HeaderBottom.vue";
import { onMounted, ref, type Ref } from "vue";

defineProps<{
    menuItems: MenuItems;
}>();

const menuElement: Ref<Element | null> = ref(null);
let menuWidth = defineModel();

const updateMenuWidth = () => {
        if (menuElement.value) menuWidth.value = menuElement.value.clientWidth;
    },
    resizeObserver = new ResizeObserver(updateMenuWidth);

onMounted(() => {
    if (menuElement.value) resizeObserver.observe(menuElement.value);
});
</script>

<template>
    <nav class="nav header__nav" ref="menuElement">
        <ul class="nav__list">
            <li class="nav__item" v-for="(item, route) in menuItems">
                <RouterLink :to="route" class="nav__link" v-slot="{ isActive }">
                    <HeaderItem :icon="item.icon" :title="item.title" :isActive="isActive || ($route.fullPath === '/' && route === 'football')" />
                </RouterLink>
            </li>
        </ul>
    </nav>
</template>

<style lang="scss" scoped>
.nav__list {
    display: flex;
    align-items: center;
}

.nav__item {
    list-style: none;
    flex-shrink: 0;
}

.nav__link {
    text-decoration: none;
}
</style>
