<script setup lang="ts">
import { ref, type Ref } from "vue";
import HeaderLink from "./HeaderLink.vue";

type MenuItem = {
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
        route: "/football",
    },
    {
        id: 1,
        name: "Хоккей",
        icon: "/src/assets/icons/hockey.svg",
        route: "/hockey",
    },
    {
        id: 2,
        name: "Бокс",
        icon: "/src/assets/icons/boxing.svg",
        route: "/boxing",
    },
    {
        id: 3,
        name: "MMA",
        icon: "/src/assets/icons/mma.svg",
        route: "/mma",
    },
]);

const active: Ref<number> = ref(0);
</script>

<template>
    <nav class="nav header__nav">
        <ul class="nav__list">
            <HeaderLink v-for="item in menuItems" :key="item.id" v-bind="item" v-model="active" />
        </ul>
    </nav>
</template>

<style lang="scss" scoped>
.nav__list {
    display: flex;
    align-items: center;
}
</style>
