<script setup lang="ts">
import { ref, type Ref } from "vue";
import HeaderBurgerDropDown from "./HeaderBurgerDropDown.vue";

const dropDownActive: Ref<boolean> = ref(false)

const closeDropDown = () => {
    if (dropDownActive.value) dropDownActive.value = false;
};

</script>

<template>
    <div class="burger">
        <button class="burger__button" @click="dropDownActive = !dropDownActive"
            :class="{ active: dropDownActive }" id="burger">
            <span class="burger__line"></span>
        </button>

        <Transition>
            <HeaderBurgerDropDown v-if="dropDownActive" @closeDropDown="closeDropDown" />
        </Transition>
    </div>
</template>

<style lang="scss" scoped>
.burger__button {
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

        .burger__line {
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

.burger__line,
.burger__line::before,
.burger__line::after {
    content: "";
    display: block;
    width: 22px;
    height: 2px;
    border-radius: 1px;
    background: #fff;
    transition: 0.3s ease-in-out;
    transition-property: background, transform;
    pointer-events: none;
}

.burger__line {
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
