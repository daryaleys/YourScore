<script setup lang="ts">
import { ref, type Ref } from "vue";
import { getImageUrl } from "@/script/helpers";
import HeaderItem from "./HeaderItem.vue";
import HeaderMoreDropDown from "./HeaderMoreDropDown.vue";

const dropDownActive: Ref<boolean> = ref(false);

const closeDropDown = () => {
    if (dropDownActive.value) dropDownActive.value = false;
};
</script>

<template>
    <div class="header__item" :class="{ active: dropDownActive }">
        <button class="header__link header__more-btn" id="toggleMoreBtn" @click.stop="dropDownActive = !dropDownActive">
            <HeaderItem :icon="getImageUrl('/src/assets/icons/more.svg')" name="Больше"></HeaderItem>
        </button>
    </div>

    <Transition>
        <HeaderMoreDropDown v-if="dropDownActive" @closeDropDown="closeDropDown" />
    </Transition>
</template>

<style lang="scss" scoped>
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
