<script setup lang="ts">
import { Collapse } from "vue-collapsed";
import type { MainLeague } from "../mainLeagueType";
import LeagueItem from "./ui/LeagueItem.vue";
import GameList from "../game-list/GameList.vue";

defineProps<{
    leagues: MainLeague[];
}>();
</script>

<template>
    <div class="league-list" v-if="leagues && leagues.length">
        <div class="league-item" v-for="league in leagues" :key="league.id" :class="{ opened: league.is_open }">
            <LeagueItem :countryName="league.countryName" :leagueName="league.leagueName" :opened="league.is_open"
                :gamesLength="league.games.length" @toggleDropDown="league.is_open = !league.is_open" />

            <Collapse v-if="league.games && league.games.length" :when="league.is_open">
                <GameList :games="league.games" :coefs="true" />
            </Collapse>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.league-list {
    background: var(--color-dop-back);
    padding: 4px;
    border-radius: 10px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    transition: background 0.3s ease-in-out;
}

.league-item {
    width: 100%;
}

.separator {
    width: 100%;
    height: 1px;
    background: linear-gradient(90deg, rgba(127, 127, 127, 0) 0%, #afb1b6 51.04%, rgba(127, 127, 127, 0) 100%);
}
</style>
