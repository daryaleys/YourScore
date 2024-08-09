<script setup lang="ts">
import InlineSvg from "vue-inline-svg";

defineProps<{
    isActive: boolean;
    icon: string;
    title: string;
}>();
</script>

<template>
    <div class="header-item" :class="{ active: isActive }">
        <inline-svg :src="icon" class="header-item__icon" />
        <span class="header-item__text">{{ title }}</span>
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

@media screen and (width <= 768px) {
    .header-item {
        flex-direction: column;
        clip-path: none;
        padding: 0;

        &:hover {
            background: none;

            & .header-item__text {
                background: var(--color-menu-hover);
            }
        }

        &.active {
            background: none;

            & .header-item__icon > * {
                stroke: var(--color-main-text);
            }

            & .header-item__text {
                background: var(--color-dop-cta);
            }
        }
    }

    .header-item__icon {
        width: 30px;
        height: 30px;
    }

    .header-item__text {
        font-size: 14px;
        padding: 0 7px;
        clip-path: polygon(7px 0%, 100% 0%, calc(100% - 7px) 100%, 0% 100%);
        transition: background 0.3s ease-in-out;
    }
}
</style>
