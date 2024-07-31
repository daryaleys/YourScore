import "./main.scss";

import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";
import Football from "./pages/Football.vue";
import Hockey from "./pages/Hockey.vue";
import Boxing from "./pages/Boxing.vue";
import MMA from "./pages/MMA.vue";

const test = <const>[
	{
		path: "/football",
		name: "football",
		component: Football,
		meta: {
			label: "Футбол",
		},
	},
	{
		path: "/hockey",
		name: "hockey",
		component: Hockey,
		meta: {
			label: "Хоккей",
		},
	},
	{
		path: "/boxing",
		name: "boxing",
		component: Boxing,
		meta: {
			label: "Бокс",
		},
	},
	{
		path: "/mma",
		name: "mma",
		component: MMA,
		meta: {
			label: "ММА",
		},
	},
];

export type Testq = (typeof test)[number]["name"];

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: "/",
			name: "main",
			component: Football,
			meta: {
				label: "Главная",
			},
		},
		...test,
	],
});

createApp(App).use(router).mount("#app");
