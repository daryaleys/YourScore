<script setup lang="ts">
import SideBarList from "../sidebar/SideBarList.vue";
import MainContent from "../main-content/MainContent.vue";

</script>

<template>
    <div class="page-layout">
        <SideBarList />
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
