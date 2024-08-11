<script setup lang="ts">
import InlineSvg from "vue-inline-svg";
import star from "../../../../assets/icons/star.svg?url";
import arrow from "../../../../assets/icons/arrow.svg?url";

defineEmits(["toggleDropDown"]);

defineProps<{
    countryName: string;
    leagueName: string;
    gamesLength: number;
    opened: boolean;
}>();
</script>

<template>
    <div class="league">
        <div class="league__about">
            <inline-svg :src="star" class="league__star" />
            <img src="@/assets/icons/league.svg" alt="Лига" class="league__flag" />
            <div class="league__text">
                <span class="league__country">{{ countryName }}</span>
                <span class="league__separator">&bull;</span>
                <a href="" class="league__name" :title="leagueName">{{ leagueName }}</a>
            </div>
        </div>

        <button class="league__btn" @click="$emit('toggleDropDown')">
            <span class="league__show-games" v-if="!opened">Показать игры</span>
            <span class="league__show-games" v-else>Скрыть игры</span>

            <div class="league__games-length">{{ gamesLength }}</div>
            <inline-svg :src="arrow" class="league__arrow" :class="{ opened }"/>
        </button>
    </div>
</template>

<style lang="scss" scoped>
.league {
    padding: 10px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.league__about {
    display: flex;
    align-items: center;
    gap: 12px;
}

.league__star {
    & * {
        fill: var(--color-grey);
    }
}

.league__text {
    display: flex;
    align-items: center;
    gap: 6px;
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 14px;
    line-height: 100%;
    color: var(--color-main-text);
    transition: color .3s ease-in-out;
}

.league__country {
    text-transform: uppercase;
}

.league__separator {
    color: var(--color-dop-cta);
}

.league__name {
    text-decoration: none;
    color: var(--color-main-text);
    transition: color 0.3s ease-in-out;

    &:hover {
        color: var(--color-dop-cta);
    }
}

.league__btn {
    display: flex;
    align-items: center;
    gap: 8px;
    flex-shrink: 0;
}

.league__show-games {
    font-family: var(--main-font);
    font-weight: 400;
    font-size: 14px;
    line-height: 100%;
    color: var(--color-dop-text);
    transition: color .3s ease-in-out;

    &:hover {
        color: var(--color-main-text);
    }
}

.league__games-length {
    width: 20px;
    height: 20px;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--color-main-back);
    font-family: var(--main-font);
    font-weight: 400;
    font-size: 12px;
    line-height: 100%;
    color: var(--color-main-text);
    transition: .3s ease-in-out;
    transition-property: color, background;
}

.league__arrow {
    transition: .3s ease-in-out;
    transition-property: transform;

    &.opened {
        transform: rotate(180deg);
    }
}

@media screen and (width <= 1080px) {    
    .league__text {
        max-width: 340px;

        & > span, & > a {
            max-width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
    }
}

@media screen and (width <= 768px) {    
    .league__text {
        flex-direction: column;
        align-items: flex-start;

        & > span, & > a {
            white-space: normal;
        }
    }

    .league__separator {
        display: none;
    }

    .league__show-games {
        display: none;
    }
}
</style>
