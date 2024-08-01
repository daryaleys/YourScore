import "./main.scss";

import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";
import Football from "./pages/Football.vue";
import Hockey from "./pages/Hockey.vue";
import Boxing from "./pages/Boxing.vue";
import MMA from "./pages/MMA.vue";

const HeaderNavRoutes = <const>[
	{
		path: "/football",
		name: "football",
		component: Football,
	},
	{
		path: "/hockey",
		name: "hockey",
		component: Hockey,
	},
	{
		path: "/boxing",
		name: "boxing",
		component: Boxing,
	},
	{
		path: "/mma",
		name: "mma",
		component: MMA,
	},
];

export type HeaderNavRouteNames = (typeof HeaderNavRoutes)[number]["name"];

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
		...HeaderNavRoutes,
	],
});

createApp(App).use(router).mount("#app");
