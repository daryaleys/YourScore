<script setup lang="ts">
import { onClickOutside } from "@vueuse/core";
import { ref } from "vue";
import type { MenuItem } from "../../components/HeaderBottom.vue";
import HeaderMoreNav from "./HeaderMoreNav.vue";

defineProps<{
    menuItems: MenuItem[];
}>();

const emit = defineEmits(["closeDropDown"]);

const dropDownElement = ref(null);
onClickOutside(dropDownElement, (event) => {
    const target = event.target as HTMLElement | null,
        targetParent = target?.parentElement;
    const targetId = target?.getAttribute("id"),
        targetParentId = targetParent?.getAttribute("id");

    if ((target && targetId === "toggleMore") || (targetParent && targetParentId === "toggleMore")) return;
    emit("closeDropDown");
});

window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") emit("closeDropDown");
});
</script>

<template>
    <div class="drop-down" ref="dropDownElement">
        <HeaderMoreNav v-if="menuItems.length" :menuItems="menuItems" />
        <span v-else class="drop-down__text">Скоро появятся новые виды спорта</span>
    </div>
</template>

<style lang="scss" scoped>
.drop-down {
    min-width: 220px;
    max-width: 100%;
    background: var(--color-dop-back);
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 10px 30px var(--color-drop-shadow);
    position: absolute;
    top: 45px;
    right: 0;
    transition: 0.3s ease-in-out;
    transition-property: background, box-shadow;
    z-index: 10;
}

.drop-down__text {
    font-size: 16px;
    color: var(--color-main-text);
    transition: color 0.3s ease-in-out;
}
</style>
