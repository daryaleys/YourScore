<script setup lang="ts">
import InlineSvg from "vue-inline-svg";
import { getImageUrl } from "@/script/helpers";

defineProps<{
    icon: string;
    name: string;
}>();
</script>

<template>
    <inline-svg :src="getImageUrl(icon)" class="nav__icon" />
    <!-- <img :src="getImageUrl(icon)" :alt="name"  /> -->
    <span class="nav__text">{{ name }}</span>
</template>

<style lang="scss">
.header__item {
    flex-shrink: 0;
    list-style: none;
    clip-path: polygon(18px 0%, 100% 0%, calc(100% - 18px) 100%, 0% 100%);
    padding: 0 18px 0 12px;
    transition: background 0.3s ease-in-out;

    &:hover {
        background: var(--color-menu-hover);
    }

    &.active {
        background: var(--color-dop-cta);

        & .header__link {
            color: #171717;
        }

        & .nav__icon > * {
            stroke: #171717;
        }
    }
}

.header__link {
    display: flex;
    align-items: center;
    text-decoration: none;
    font-family: var(--second-font);
    font-weight: 500;
    font-size: 16px;
    line-height: 120%;
    color: var(--color-main-text);
    transition: color 0.3s ease-in-out;
}

.nav__icon,
.nav__text {
    pointer-events: none;
}

.nav__icon > * {
    stroke: var(--color-main-text);
    transition: stroke 0.3s ease-in-out;
}
</style>
