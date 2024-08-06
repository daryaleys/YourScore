<script setup lang="ts">
import { ref, type Ref } from "vue";
import type { MainLeague } from "@/components/main-content/mainLeagueType";
import MainContent from "@/components/main-content/MainContent.vue";

const leagueGamesList: Ref<MainLeague[]> = ref([]);

fetch("/src/data/football.json")
    .then((response) => response.json())
    .then((data) => data.data.forEach((item: MainLeague) => leagueGamesList.value.push(item)))
    .catch((error) => console.log(error));
</script>

<template>
    <MainContent :leagueList="leagueGamesList" />
</template>

<style lang="scss" scoped></style>
