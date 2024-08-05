import { defineStore } from "pinia";
import { ref, type Ref } from "vue";

type League = {
	id: string;
	name: string;
};

export const leagueStore = defineStore("leagueStore", () => {
	let myLeagues: Ref<League[]> = ref([]);

	fetch("https://66b0bc3f6a693a95b539fe2f.mockapi.io/api/leagues")
		.then((response) => response.json())
		.then((data) => {
			myLeagues.value = data;
		});

	return { myLeagues };
});
