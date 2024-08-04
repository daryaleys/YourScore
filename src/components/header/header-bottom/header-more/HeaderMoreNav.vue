<script setup lang="ts">
import InlineSvg from "vue-inline-svg";
import type { MenuItem } from "../HeaderBottom.vue";
import { getImageUrl } from "@/helpers/helpers";

defineProps<{
    menuItems: MenuItem[];
}>();
</script>

<template>
    <nav class="more-nav">
        <ul class="more-nav__list">
            <li class="more-nav__item" v-for="item in menuItems">
                <RouterLink :to="item.route" class="more-nav__link" v-slot="{ isActive }">
                    <div class="more-nav__wrap" :class="{ active: isActive }">
                        <inline-svg :src="getImageUrl(item.icon)" class="more-nav__icon" />
                        <span class="more-nav__text">{{ item.title }}</span>
                    </div>
                </RouterLink>
            </li>
        </ul>
    </nav>
</template>

<style lang="scss" scoped>
.more-nav__list {
    list-style: none;
    display: flex;
    flex-direction: column;
}

.more-nav__link {
    text-decoration: none;
}

.more-nav__wrap {
    display: flex;
    align-items: center;
    gap: 5px;
    border-radius: 6px;
    transition: background 0.3s ease-in-out;

    &:hover {
        background: var(--color-menu-hover);
    }

    &.active {
        background: var(--color-dop-cta);

        & .more-nav__icon > * {
            stroke: #171717;
        }

        & .more-nav__text {
            color: #171717;
        }
    }
}

.more-nav__icon {
    & * {
        stroke: var(--color-main-text);
        transition: stroke 0.3s ease-in-out;
    }
}

.more-nav__text {
    font-family: var(--second-font);
    font-weight: 500;
    font-size: 16px;
    line-height: 120%;
    color: var(--color-main-text);
    transition: color .3s ease-in-out;
}

@media screen and (width <= 768px) {
    .more-nav__icon {
        width: 30px;
        height: 30px;
    }

    .more-nav__text {
        font-size: 14px;
    }
}
</style>