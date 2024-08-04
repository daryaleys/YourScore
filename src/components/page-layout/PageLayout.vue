<script setup lang="ts">
import SideBar from "../sidebar/SideBar.vue";
import MainContent from "../main-content/MainContent.vue";

const props = defineProps<{
    myLeagues: { id: number; name: string }[];
}>();

console.log()
</script>

<template>
    <div class="page-layout">
        <SideBar :myLeagues />
        <MainContent />
        <div></div>
    </div>
</template>

<style lang="scss" scoped>
.page-layout {
    max-width: var(--block-max-width);
    margin: 0 auto;
    display: grid;
    grid-template-columns: 170px 1fr 170px;
    grid-template-rows: 1fr;
    grid-column-gap: 12px;
}
</style>
