<script setup lang="ts">
import { ref, type Ref } from "vue";
import type { MainLeague } from "@/components/main-content/mainLeagueType";
import MainContent from "@/components/main-content/MainContent.vue";

import basketball from "../data/basketball.json?url";

const leagueList: Ref<MainLeague[]> = ref([]);

fetch(basketball)
    .then((response) => response.json())
    .then((data) => data.data.forEach((item: MainLeague) => leagueList.value.push(item)))
    .catch((error) => console.log(error));
</script>

<template>
    <MainContent :leagueList />
</template>

<style lang="scss" scoped></style>
