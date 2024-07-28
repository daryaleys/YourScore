<script setup lang="ts">
import { toggleTheme } from '@/script/helpers';

const isDarkMode = defineModel({ required: true });

const toggleMode = () => {
    isDarkMode.value = !isDarkMode.value;
    toggleTheme();
};
</script>

<template>
    <div class="drop-down">
        <div class="drop-down__desc">
            <template v-if="isDarkMode">
                <img width="24" height="24" src="@/assets/icons/moon.svg" alt="Луна" class="drop-down__icon" />
                <span class="drop-down__text">Темная тема</span>
            </template>
            <template v-else>
                <img width="24" height="24" src="@/assets/icons/sun.svg" alt="Солнышко" class="drop-down__icon" />
                <span class="drop-down__text">Светлая тема</span>
            </template>
        </div>

        <div class="drop-down__button" :class="{ dark: isDarkMode }">
            <input type="checkbox" class="drop-down__checkbox" @change="toggleMode" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.drop-down {
    width: 300px;
    max-width: 100%;
    background: var(--color-dop-back);
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 10px 30px var(--color-drop-shadow);
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    top: 50px;
    right: 0;
    transition: 0.3s ease-in-out;
    transition-property: background, box-shadow;
}

.drop-down__desc {
    display: flex;
    align-items: center;
    gap: 6px;
}

.drop-down__text {
    font-size: 16px;
    color: var(--color-main-text);
    transition: color 0.3s ease-in-out;
}

.drop-down__button {
    position: relative;
    width: 33px;
    height: 18px;
    border-radius: 30px;
    background: var(--color-deep-grey);
    transition: .3s ease-in-out;
    transition-property: background;

    &::before {
        content: "";
        display: block;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background: var(--color-dop-back);
        position: absolute;
        top: 3px;
        left: 3px;
        transition: inherit;
        transition-property: background, left;
    }

    &.dark {
        background: var(--color-dop-cta);

        &::before {
            left: 18px;
        }
    }
}

.drop-down__checkbox {
    width: 100%;
    height: 100%;
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    cursor: pointer;
}

@media screen and (width <= 1080px) {
    .drop-down {
        right: 10px;
    }
}
</style>
