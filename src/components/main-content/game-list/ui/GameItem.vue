<script setup lang="ts">
const props = defineProps<{
    time: string;
    teamHomeName: string;
    teamHomeScore: number | string;
    teamAwayName: string;
    teamAwayScore: number | string;
}>();
</script>

<template>
    <td class="game__time">{{ time }}</td>
    <td class="game__teams">
        <div class="team__wrap">
            <span class="team__name">{{ teamHomeName }}</span>
            <span class="team__score">{{ teamHomeScore }}</span>
        </div>
        <div class="team__wrap">
            <span class="team__name">{{ teamAwayName }}</span>
            <span class="team__score">{{ teamAwayScore }}</span>
        </div>
    </td>
</template>

<style lang="scss" scoped>
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

@media screen and (width <=768px) {
    .game__time {
        width: 60px;
    }
}
</style>
