import { defineStore } from "pinia";
import { ref, type Ref } from "vue";

export const leagueStore = defineStore("leagueStore", () => {
    const myLeagues = [
        { id: 1, name: "Бундеслига" },
        { id: 2, name: "Примера" },
        { id: 3, name: "Лига Европы" },
        { id: 4, name: "Лига чемпионов" },
        { id: 5, name: "Лига конференций" },
        { id: 6, name: "Лига наций" },
        { id: 7, name: "Премьер лига" },
    ];
    return { myLeagues };
});
