<script setup lang="ts">
import SideBarList from "../sidebar/SideBarList.vue";
import MainContent from "../main-content/MainContent.vue";

</script>

<template>
    <div class="page-layout">
        <SideBarList class="sidebar" />
        <MainContent />
        <div class="ad"></div>
    </div>
</template>

<style lang="scss" scoped>
.page-layout {
    max-width: var(--block-max-width);
    margin: 0 auto;
    padding: 10px 10px 0 10px;
    display: grid;
    grid-template-columns: 170px 1fr 170px;
    grid-template-rows: 1fr;
    grid-column-gap: 12px;
}

.ad {
    border: 1px solid red;
}

@media screen and (width <=1080px) {
    .page-layout {
        grid-template-columns: 170px 1fr;
    }

    .ad {
        display: none;
    }
}

@media screen and (width <=768px) {
    .page-layout {
        grid-template-columns: 1fr;
    }

    .sidebar {
        display: none;
    }
}
</style>
