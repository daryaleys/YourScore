<script setup lang="ts">
import type { MainLeagueGames } from "../../mainLeagueType";

defineProps<{
    games: MainLeagueGames[];
}>();
</script>

<template>
    <div class="games-list">
        <div class="game" v-for="game in games">
            <span class="game__time">{{ game.liveDatetime.split("T")[1].split("+")[0].slice(0, 5) }}</span>
            <div class="teams">
                <div class="team__wrap">
                    <span class="team__name">{{ game.team_home[0].name }}</span>
                    <span class="team__score">{{ game.score.team_home ?? "-" }}</span>
                </div>
                <div class="team__wrap">
                    <span class="team__name">{{ game.team_away[0].name }}</span>
                    <span class="team__score">{{ game.score.team_away ?? "-" }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.games-list {
    border-radius: 6px;
    background: var(--color-main-back);
    display: flex;
    flex-direction: column;
    transition: background 0.3s ease-in-out;
}

.game {
    position: relative;
    padding: 6px;
    display: flex;
    align-items: center;

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
    padding: 0 32px;
    font-family: var(--main-font);
    font-weight: 400;
    font-size: 14px;
    line-height: 100%;
    text-align: center;
    color: var(--color-main-text);
}

.teams {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;
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

@media screen and (width <= 768px) {
    .game {
        gap: 6px;
    }
    .game__time {
        padding: 0 4px;
    }
}
</style>
