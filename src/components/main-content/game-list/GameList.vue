<script setup lang="ts">
import GameItem from "./ui/GameItem.vue";
import GameCoefs from "./ui/GameCoefs.vue";
import type { MainLeagueGames } from "../mainLeagueType";
import { ref, type Ref } from "vue";

type OriginalCoef = {
    old: number | null;
    new: number | null;
}

const props = defineProps<{
    games: MainLeagueGames[];
    coefs: boolean;
}>();

function getCoef(coef: OriginalCoef) {
    const newCoef = coef.new, oldCoef = coef.old;

    return {
        value: newCoef ?? oldCoef ?? null,
        type: newCoef && oldCoef ? (newCoef >= oldCoef ? "up" : "down") : null,
    }
}

let coefValues: Ref<any[]> = ref([]);
if (props.games && props.games.length) {
    coefValues.value = props.games.map((item) => ({
        coef1: getCoef(item.coefficient[1]),
        coefX: getCoef(item.coefficient.x),
        coef2: getCoef(item.coefficient[2])
    }))
}
</script>

<template>
    <table class="games-table" cellpadding="0">
        <tr class="game__coefs" v-if="coefs">
            <th class="game__time"></th>
            <th class="game__teams"></th>
            <th class="game__coef">1</th>
            <th class="game__coef">X</th>
            <th class="game__coef">2</th>
        </tr>

        <tr class="game" v-for="(game, i) in games" :key="game.id">
            <GameItem :time="game.liveDatetime.split('T')[1].split('+')[0].slice(0, 5)"
                :teamHomeName="game.team_home[0].name" :teamHomeScore="game.score.team_home ?? '-'"
                :teamAwayName="game.team_away[0].name" :teamAwayScore="game.score.team_away ?? '-'" />

            <GameCoefs v-if="coefs && coefValues.length" v-bind="coefValues[i]" />
        </tr>
    </table>
</template>

<style lang="scss" scoped>
.games-table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    border-radius: 6px;
    background: var(--color-main-back);
    transition: background 0.3s ease-in-out;
}

.game {
    position: relative;
    border-radius: inherit;

    &:hover {
        background: var(--color-dop-back);
        transition: background 0.3s ease-in-out;

        & .team__score {
            background: var(--color-main-back);
        }
    }

    &:not(:last-child)::after {
        display: block;
        content: "";
        width: 100%;
        height: 1px;
        background: linear-gradient(90deg, rgba(127, 127, 127, 0) 0%, #afb1b6 51.04%, rgba(127, 127, 127, 0) 100%);
        position: absolute;
        left: 0;
        bottom: 0;
    }
}

.game__coef {
    width: 65px;
    padding-top: 4px;
    font-family: var(--main-font);
    font-weight: 400;
    font-size: 12px;
    line-height: 100%;
    text-align: center;
    color: var(--color-main-text);
}

@media screen and (width <=768px) {
    .game__coefs {
        display: none;
    }

    .game__coef {
        // width: 30px;
    }
}
</style>
