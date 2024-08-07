<script setup lang="ts">
import type { MainLeague } from "./mainLeagueType";
import LeagueList from "./league-list/LeagueList.vue";
import TabList from "../tabs/TabList.vue";
import { ref, type Ref } from "vue";
import type { Tab } from "../tabs/tabType";

defineProps<{
    leagueList: MainLeague[];
}>();

const tabs: Ref<Tab[]> = ref([
    {
        name: "Все",
        type: "all",
        event: "showAll",
    },
    {
        name: "Кэфы",
        type: "coefs",
        event: "showCoefs",
    },
]);

const showCoefs: Ref<boolean> = ref(false);
</script>

<template>
    <div class="league-games">
        <TabList :tabs @showAll="showCoefs = false" @showCoefs="showCoefs = true" />
        <LeagueList :leagues="leagueList" :showCoefs />
    </div>
</template>

<style lang="scss" scoped>
.league-games {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

@media screen and (width <=768px) {
    .league-games {
        padding: 0 6px;
    }
}
</style>
