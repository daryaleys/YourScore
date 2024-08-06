<script setup lang="ts">
import { leagueStore } from '@/store/leagueStore';
import { useRoute } from 'vue-router';
const store = leagueStore();

// const route = useRoute();
// console.log(route.fullPath)
</script>

<template>
    <div class="sidebar">
        <div class="sidebar-block" v-if="store.myLeagues.length">
            <h3 class="sidebar-block__title">Мои лиги</h3>

            <ul class="league-list">
                <li class="league-item" v-for="league in store.myLeagues" :key="league.id">
                    <a href="#" class="league-item__link">
                        <div class="league-item__name">
                            <img class="league-item__flag" src="@/assets/icons/league.svg" alt="Флаг">
                            <span class="league-item__title">{{ league.name }}</span>
                        </div>

                        <img src="@/assets/icons/star.svg" alt="Звёздочка" class="league-item__star">
                    </a>

                    <!-- <RouterLink :to="`/league/${league.id}`" class="league-item__link">{{ league.name }}</RouterLink> -->
                </li>
            </ul>
        </div>
    </div>

</template>

<style lang="scss" scoped>
.sidebar {
    width: 170px;
    justify-self: end;
}

.sidebar-block {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.sidebar-block__title {
    font-family: var(--second-font);
    font-weight: 500;
    font-size: 18px;
    line-height: 120%;
    color: var(--color-main-text);
    transition: color .3s ease-in-out;
}

.league-list {
    padding-left: 2px;
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.league-item__link {
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-decoration: none;

    &:hover {
        .league-item__title {
            color: var(--color-dop-cta);
        }

        .league-item__star {
            opacity: 1;
        }
    }
}

.league-item__name {
    display: flex;
    align-items: center;
    gap: 6px;
}


.league-item__title {
    font-family: var(--main-font);
    font-weight: 400;
    font-size: 12px;
    line-height: 100%;
    color: var(--color-main-text);
    transition: color .3s ease-in-out;
}

.league-item__star {
    opacity: 0;
    transition: opacity .3s ease-in-out;
}
</style>
