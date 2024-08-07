<script setup lang="ts">
import type { MainLeagueGames } from "../mainLeagueType";

defineProps<{
    games: MainLeagueGames[];
    coefs: boolean;
}>();
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

        <tr class="game" v-for="game in games">
            <td class="game__time">{{ game.liveDatetime.split("T")[1].split("+")[0].slice(0, 5) }}</td>
            <td class="game__teams">
                <div class="team__wrap">
                    <span class="team__name">{{ game.team_home[0].name }}</span>
                    <span class="team__score">{{ game.score.team_home ?? "-" }}</span>
                </div>
                <div class="team__wrap">
                    <span class="team__name">{{ game.team_away[0].name }}</span>
                    <span class="team__score">{{ game.score.team_away ?? "-" }}</span>
                </div>
            </td>
        </tr>
    </table>

    <!-- <div class="games-list">
        <div class="coefs" v-if="coefs">
            <span>1</span>
            <span>X</span>
            <span>2</span>
        </div>
    </div> -->
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

.game__time {
    border: none;
    padding: 6px;
    width: 100px;
    font-family: var(--main-font);
    font-weight: 400;
    font-size: 14px;
    line-height: 100%;
    text-align: center;
    color: var(--color-main-text);
}

.game__teams {
    padding: 6px;
}

.team__wrap {
    display: flex;
    align-items: center;
}

.team__name {
    font-family: var(--main-font);
    font-weight: 400;
    font-size: 12px;
    line-height: 100%;
    color: var(--color-main-text);
    transition: color 0.3s ease-in-out;
}

.team__score {
    margin-left: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 16px;
    height: 16px;
    border-radius: 4px;
    background: var(--color-dop-back);
    font-family: var(--main-font);
    font-weight: 400;
    font-size: 12px;
    line-height: 100%;
    text-align: center;
    color: var(--color-main-text);
    transition: 0.3s ease-in-out;
    transition-property: color, background;
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
    .game__time {
        width: 60px;
    }
}
</style>
