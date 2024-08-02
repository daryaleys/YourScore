<script setup lang="ts">
import { useWindowSize } from "@vueuse/core";
import HeaderMainNav from "./nav/HeaderMainNav.vue";
import HeaderMore from "./header-more/HeaderMore.vue";
import type { HeaderNavRouteNames } from "@/main";
import { getImageUrl } from "@/script/helpers";
import { computed, ref, watch, type Ref } from "vue";

export type MenuItem = {
    route: HeaderNavRouteNames;
    title: string;
    icon: string;
};

const headerMenuElement = ref(null),
    headerBtnElement = ref(null);

const windowWidth = useWindowSize().width,
    menuItemsWidths = ref([]),
    btnWidth = ref(0);

const menuWidth = computed(() => menuItemsWidths.value.reduce((a, b) => a + b, 0)),
    maxMenuWidth = computed(() => windowWidth.value - btnWidth.value);

// весь список руотов в хэдере
const commonMenuItems: MenuItem[] = [
    {
        route: "football",
        title: "Футбол",
        icon: getImageUrl("/src/assets/icons/football.svg"),
    },
    {
        route: "hockey",
        title: "Хоккей",
        icon: getImageUrl("/src/assets/icons/hockey.svg"),
    },
    {
        route: "boxing",
        title: "Бокс",
        icon: getImageUrl("/src/assets/icons/boxing.svg"),
    },
    {
        route: "mma",
        title: "MMA",
        icon: getImageUrl("/src/assets/icons/mma.svg"),
    },
];

// помещаются в экран
const menuItems: Ref<MenuItem[]> = ref([]);

// уходят в дропдаун
const dropDownMenuItems: Ref<MenuItem[]> = ref([]);

function moveFromMenuToDropDown() {
    const lastItem = menuItems.value.pop();
    if (lastItem) dropDownMenuItems.value.unshift(lastItem);
}

function moveFromDropDownToMenu() {
    const firstItem = dropDownMenuItems.value.shift();
    if (firstItem) menuItems.value.push(firstItem);
}

function updateMenu() {
    if (menuWidth.value > maxMenuWidth.value) moveFromMenuToDropDown();
    else if (menuWidth.value < maxMenuWidth.value - 100) moveFromDropDownToMenu();
}

commonMenuItems.forEach((item) => {
    if (menuWidth.value < maxMenuWidth.value) {
        menuItems.value.push(item);
    }
});

watch(menuWidth, updateMenu);
watch(windowWidth, updateMenu);
</script>

<template>
    <div class="header__bottom">
        <div class="container header__container">
            <HeaderMainNav ref="headerMenuElement" :menuItems="menuItems" v-model="menuItemsWidths" />
            <HeaderMore ref="headerBtnElement" :menuItems="dropDownMenuItems" v-model="btnWidth" />
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
