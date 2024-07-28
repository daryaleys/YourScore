<script setup lang="ts">
import { ref, type Ref } from "vue";
import ToggleThemeDropDown from "./ToggleThemeDropDown.vue";
import { toggleTheme } from "@/script/helpers";

const dropDownActive: Ref<boolean> = ref(false),
    isDarkMode: Ref<boolean> = ref(false);

const matchMedia = window.matchMedia("(prefers-color-scheme: dark)");

// check on page load
if (matchMedia.matches) {
    isDarkMode.value = true;
    toggleTheme();
}

// listen to system change
matchMedia.addEventListener("change", (event) => {
    if (isDarkMode.value !== event.matches) {
        isDarkMode.value = event.matches;
        toggleTheme();
    }
})

</script>

<template>
    <div class="toggle-theme">
        <button class="toggle-theme__button" @click="dropDownActive = !dropDownActive" :class="{ active: dropDownActive }">
            <span class="toggle-theme__line"></span>
        </button>

        <Transition>
            <ToggleThemeDropDown v-if="dropDownActive" v-model="isDarkMode" />
        </Transition>
    </div>
</template>

<style lang="scss" scoped>
.toggle-theme__button {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    transition: 0.3s ease-in-out;
    transition-property: background;

    &.active {
        background: var(--color-dop-cta);

        .toggle-theme__line {
            background: transparent;

            &::before {
                transform: rotate(45deg);
            }

            &::after {
                transform: translateY(-2px) rotate(-45deg);
            }
        }
    }
}

.toggle-theme__line,
.toggle-theme__line::before,
.toggle-theme__line::after {
    content: "";
    display: block;
    width: 22px;
    height: 2px;
    border-radius: 1px;
    background: #fff;
    transition: 0.3s ease-in-out;
    transition-property: background, transform;
}

.toggle-theme__line {
    &::before {
        transform: translateY(-8px);
    }

    &::after {
        transform: translateY(6px);
    }
}

.v-enter-active,
.v-leave-active {
    transition: 0.5s ease;
    transition-property: opacity, transform;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
    transform: translateY(20px);
}
</style>
