<script setup lang="ts">
import InlineSvg from "vue-inline-svg";
import { getImageUrl } from "@/script/helpers";

defineProps<{
    isActive: boolean;
    icon: string;
    name: string;
}>();
</script>

<template>
    <div class="header-item" :class="{ active: isActive }">
        <inline-svg :src="getImageUrl(icon)" class="header-item__icon" />
        <span class="header-item__text">{{ name }}</span>
    </div>
</template>

<style lang="scss" scoped>
.header-item {
    display: flex;
    align-items: center;
    clip-path: polygon(18px 0%, 100% 0%, calc(100% - 18px) 100%, 0% 100%);
    padding: 0 18px 0 12px;

    transition: 0.3s ease-in-out;
    transition-property: background;

    &:hover {
        background: var(--color-menu-hover);
    }

    &.active {
        background: var(--color-dop-cta);

        & .header-item__icon > * {
            stroke: #171717;
        }

        & .header-item__text {
            color: #171717;
        }
    }
}

.header-item__icon {
    pointer-events: none;

    & * {
        stroke: var(--color-main-text);
        transition: stroke 0.3s ease-in-out;
    }
}

.header-item__text {
    pointer-events: none;
    font-family: var(--second-font);
    font-weight: 500;
    font-size: 16px;
    line-height: 120%;
    color: var(--color-main-text);
    transition: color 0.3s ease-in-out;
}
</style>
