<script setup lang="ts">
import { toggleTheme } from "@/helpers/helpers";
import { themeStore } from "@/store/themeStore";

const store = themeStore();

const toggleMode = () => {
    store.isDarkMode = !store.isDarkMode;
    localStorage.setItem("theme", store.isDarkMode ? "dark" : "light");
    toggleTheme();
};
</script>

<template>
    <div class="theme">
        <div class="theme__desc">
            <template v-if="store.isDarkMode">
                <img width="24" height="24" src="@/assets/icons/moon.svg" alt="Луна" class="theme__icon" />
                <span class="theme__text">Темная тема</span>
            </template>
            <template v-else>
                <img width="24" height="24" src="@/assets/icons/sun.svg" alt="Солнышко" class="theme__icon" />
                <span class="theme__text">Светлая тема</span>
            </template>
        </div>

        <div class="theme__button" :class="{ dark: store.isDarkMode }">
            <input type="checkbox" class="theme__checkbox" @change="toggleMode" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.theme {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.theme__desc {
    display: flex;
    align-items: center;
    gap: 6px;
}

.theme__text {
    font-size: 16px;
    color: var(--color-main-text);
    transition: color 0.3s ease-in-out;
}

.theme__button {
    position: relative;
    width: 33px;
    height: 18px;
    border-radius: 30px;
    background: var(--color-deep-grey);
    transition: 0.3s ease-in-out;
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

.theme__checkbox {
    width: 100%;
    height: 100%;
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    cursor: pointer;
}
</style>
