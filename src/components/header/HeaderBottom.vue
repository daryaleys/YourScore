<script setup lang="ts">
import { useWindowSize } from "@vueuse/core";
import HeaderMenu from "./ui/HeaderMenu.vue";
import HeaderMoreBtn from "./ui/HeaderMoreBtn.vue";
import type { HeaderNavRouteNames } from "@/main";
import { getImageUrl } from "@/script/helpers";
import { nextTick, onMounted, ref, watch } from "vue";

type MenuItem = {
    title: string;
    icon: string;
};

export type MenuItems = Record<HeaderNavRouteNames, MenuItem>;

const menuItems: MenuItems = {
    football: {
        title: "Футбол",
        icon: getImageUrl("/src/assets/icons/football.svg"),
    },
    hockey: {
        title: "Хоккей",
        icon: getImageUrl("/src/assets/icons/hockey.svg"),
    },
    boxing: {
        title: "Бокс",
        icon: getImageUrl("/src/assets/icons/boxing.svg"),
    },
    mma: {
        title: "MMA",
        icon: getImageUrl("/src/assets/icons/mma.svg"),
    },
};

const dropDownMenuItems: Partial<MenuItems> = {};

const headerMenuElement = ref(null),
    headerBtnElement = ref(null);
const windowWidth = useWindowSize().width;

const menuWidth = ref(0),
    btnWidth = ref(0);

watch(windowWidth, (value) => {
    console.log(value, menuWidth.value, btnWidth.value);
});
</script>

<template>
    <div class="header__bottom">
        <div class="container header__container">
            <HeaderMenu ref="headerMenuElement" :menuItems v-model="menuWidth" />
            <HeaderMoreBtn ref="headerBtnElement" v-model="btnWidth" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.header__bottom {
    background: var(--color-dop-back);
    transition: background 0.3s ease-in-out;
}

.header__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>
