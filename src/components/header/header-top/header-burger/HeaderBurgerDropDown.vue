<script setup lang="ts">
import HeaderBurgerTheme from "./HeaderBurgerTheme.vue";
import SideBarList from "@/components/sidebar/SideBarList.vue";
import { ref } from "vue";
import { onClickOutside } from "@vueuse/core";

const emit = defineEmits(["closeDropDown"]);

const dropDownElement = ref(null);
onClickOutside(dropDownElement, (event) => {
    const target = event.target as HTMLElement;
    if (target && target.getAttribute('id') === 'burger') return
    emit("closeDropDown");
});

window.addEventListener("keydown", (event) => {
    if (event.key === 'Escape') emit("closeDropDown");
})
</script>

<template>
    <div class="drop-down" ref="dropDownElement">
        <HeaderBurgerTheme />
        <SideBarList class="drop-down__list" />
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
    position: absolute;
    top: 50px;
    right: 0;
    transition: 0.3s ease-in-out;
    transition-property: background, box-shadow;
    z-index: 10;
}

.drop-down__list {
    display: none;
}

@media screen and (width <= 768px) {
    .drop-down__list {
        display: block;
    }
}
</style>
