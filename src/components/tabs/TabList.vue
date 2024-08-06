<script setup lang="ts">
import { ref, type Ref } from "vue";
import type { Tab } from "./tabType";

const props = defineProps<{
    tabs: Tab[];
}>();

const activeTab: Ref<string> = ref(props.tabs[0].type);
</script>

<template>
    <div class="tabs" v-if="tabs && tabs.length">
        <button
            v-for="tab in tabs"
            class="tab"
            :class="{ active: activeTab === tab.type }"
            @click="
                () => {
                    activeTab = tab.type;
                    $emit(tab.event);
                }
            "
        >
            {{ tab.name }}
        </button>
    </div>
</template>

<style lang="scss" scoped>
.tabs {
    display: flex;
    align-items: center;
    gap: 10px;
}

.tab {
    background: var(--color-dop-back);
    padding: 9px 12px;
    border-radius: 6px;
    font-family: var(--main-font);
    font-weight: 400;
    font-size: 15px;
    line-height: 120%;
    text-align: center;
    color: var(--color-dop-text);
    transition: 0.3s ease-in-out;
    transition-property: color, background;

    &:hover {
        color: var(--color-main-text);
    }

    &.active {
        color: #222325;
        background: var(--color-dop-cta);
    }
}
</style>
