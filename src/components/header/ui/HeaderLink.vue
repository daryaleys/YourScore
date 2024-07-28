<script setup lang="ts">
import { getImageUrl } from "@/script/helpers";
import { ref, type Ref } from "vue";
import { RouterLink } from "vue-router";
import HeaderItem from "./HeaderItem.vue";

const active = defineModel({ required: true });

defineProps<{
    id: number;
    name: string;
    icon: string;
    route: string;
}>();
</script>

<template>
    <li class="nav__item header__item" :class="{ active: active === id }">
        <RouterLink :to="route" class="nav__link header__link" @click="active = id">
            <HeaderItem :icon="icon" :name="name" />
        </RouterLink>
    </li>
</template>

<style lang="scss" scoped>
.nav__item {
    margin: 0 -5px;
}
</style>