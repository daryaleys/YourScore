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
    <button class="header-more-btn" id="toggleMore" @click="dropDownActive = !dropDownActive">
        <HeaderItem :icon="getImageUrl('/src/assets/icons/more.svg')" title="Больше" :isActive="dropDownActive">
        </HeaderItem>
    </button>

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
