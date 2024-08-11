<script setup lang="ts">
import { onMounted, ref, type Ref } from "vue";
import HeaderItem from "../../ui/HeaderItem.vue";
import HeaderMoreDropDown from "./HeaderMoreDropDown.vue";
import type { MenuItem } from "../HeaderBottom.vue";
import moreIcon from '../../../../assets/icons/more.svg';

defineProps<{
    menuItems: MenuItem[];
}>();

const dropDownActive: Ref<boolean> = ref(false);

const btnElement: Ref<Element | null> = ref(null);
let btnWidth = defineModel();

const closeDropDown = () => {
    if (dropDownActive.value) dropDownActive.value = false;
};

const updateBtnWidth = () => {
        if (btnElement.value) btnWidth.value = btnElement.value.clientWidth;
    },
    resizeObserver = new ResizeObserver(updateBtnWidth);

onMounted(() => {
    if (btnElement.value) resizeObserver.observe(btnElement.value);
});
</script>

<template>
    <button class="header-more-btn" id="toggleMore" @click="dropDownActive = !dropDownActive" ref="btnElement">
        <HeaderItem :icon="moreIcon" title="Больше" :isActive="dropDownActive"> </HeaderItem>
    </button>

    <Transition>
        <HeaderMoreDropDown v-if="dropDownActive" :menuItems @closeDropDown="closeDropDown" />
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
