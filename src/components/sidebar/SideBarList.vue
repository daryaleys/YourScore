<script setup lang="ts">
import { leagueStore } from '@/store/leagueStore';
const store = leagueStore();
</script>

<template>
    <div class="sidebar-block" v-if="store.myLeagues.length">
        <h3 clsas="sidebar-block__title">Мои лиги</h3>

        <ul class="league-list">
            <li class="league-item" v-for="league in store.myLeagues" :key="league.id">
                {{ league.name }}
                <!-- <RouterLink :to="`/league/${league.id}`" class="league-item__link">{{ league.name }}</RouterLink> -->
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped></style>
