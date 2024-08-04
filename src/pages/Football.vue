<script setup lang="ts">
import PageLayout from "@/components/page-layout/PageLayout.vue";

const myLeagues = [
    { id: 1, name: "Бундеслига" },
    { id: 2, name: "Примера" },
    { id: 3, name: "Лига Европы" },
    { id: 4, name: "Лига чемпионов" },
    { id: 5, name: "Лига конференций" },
    { id: 6, name: "Лига наций" },
    { id: 7, name: "Премьер лига" },
];

</script>

<template>
    <PageLayout :myLeagues />
</template>

<style lang="scss" scoped></style>
