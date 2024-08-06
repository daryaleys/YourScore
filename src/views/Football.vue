<script setup lang="ts">
import GameList from "@/components/games/GameList.vue";
import type { LeagueGames } from "@/components/games/gameType";
import { ref, type Ref } from "vue";

const gamesList: Ref<LeagueGames[]> = ref([])

fetch('/src/data/football.json')
    .then((response) => response.json())
    .then((data) => (gamesList.value = data))
    .catch((error) => console.log(error))
</script>

<template>
    <GameList :list="gamesList" />
</template>

<style lang="scss" scoped></style>
