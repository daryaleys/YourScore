<script setup lang="ts">
import { RouterLink } from "vue-router";
import HeaderItem from "../../ui/HeaderItem.vue";
import { onMounted, ref, type ModelRef, type Ref } from "vue";
import { useResizeObserver, type MaybeComputedElementRef, type MaybeElement } from "@vueuse/core";
import type { MenuItem } from "../../components/HeaderBottom.vue";

defineProps<{
    menuItems: MenuItem[];
}>();

const itemRefs: Ref<MaybeComputedElementRef<MaybeElement>[]> = ref([]);

const itemWidths: ModelRef<number[]> = defineModel({required: true});

onMounted(() => {
    itemRefs.value.forEach((el, index) => {
        useResizeObserver(el, (entries) => {
            const entry = entries[0];
            itemWidths.value[index] = entry.contentRect.width + 10; // +10 - gaps
        });
    });
});
</script>

<template>
    <nav class="nav">
        <ul class="nav__list">
            <li class="nav__item" v-for="item in menuItems" ref="itemRefs">
                <RouterLink :to="item.route" class="nav__link" v-slot="{ isActive }">
                    <HeaderItem :icon="item.icon" :title="item.title" :isActive="isActive || ($route.fullPath === '/' && item.route === 'football')" />
                </RouterLink>
            </li>
        </ul>
    </nav>
</template>

<style lang="scss" scoped>
.nav__list {
    display: flex;
    align-items: center;
}

.nav__item {
    list-style: none;
    flex-shrink: 0;
}

.nav__link {
    text-decoration: none;
}

@media screen and (width <= 768px) {
    .nav__list {
        gap: 5px;
    }
}
</style>
