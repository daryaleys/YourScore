<script setup lang="ts">
import { ref, type Ref } from "vue";
import { RouterLink } from "vue-router";
import HeaderItem from "./HeaderItem.vue";

export type MenuItem = {
    id: number;
    name: string;
    icon: string;
    route: string;
};


const menuItems: Ref<MenuItem[]> = ref([
    {
        id: 0,
        name: "Футбол",
        icon: "/src/assets/icons/football.svg",
        route: "football",
    },
    {
        id: 1,
        name: "Хоккей",
        icon: "/src/assets/icons/hockey.svg",
        route: "hockey",
    },
    {
        id: 2,
        name: "Бокс",
        icon: "/src/assets/icons/boxing.svg",
        route: "boxing",
    },
    {
        id: 3,
        name: "MMA",
        icon: "/src/assets/icons/mma.svg",
        route: "mma",
    },
]);
</script>

<template>
    <nav class="nav header__nav">
        <ul class="nav__list">
            <li class="nav__item" v-for="item in menuItems" :key="item.id">
                <RouterLink :to="item.route" class="nav__link" v-slot="{ isActive }">
                    <HeaderItem :icon="item.icon" :name="item.name" :isActive="isActive || ($route.fullPath === '/' && item.route === 'football')" />
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
