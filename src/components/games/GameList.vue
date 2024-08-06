<script setup lang="ts">
import type { LeagueGames } from './gameType';

defineProps<{
    list: LeagueGames[]
}>()
</script>

<template>
    <h2>main list</h2>
</template>

<style lang="scss" scoped></style>
