import "./main.scss";
import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import { createRouter, createWebHashHistory  } from "vue-router";
import Football from "./views/Football.vue";
import Hockey from "./views/Hockey.vue";
import Boxing from "./views/Boxing.vue";
import Basketball from "./views/Basketball.vue";

const headerNavRoutes = <const>[
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
		path: "/basketball",
		name: "basketball",
		component: Basketball,
	},
];

export type HeaderNavRouteNames = (typeof headerNavRoutes)[number]["name"];

const router = createRouter({
	history: createWebHashHistory(),
	routes: [
		{
			path: "/",
			name: "main",
			component: Football,
			meta: {
				label: "Главная",
			},
		},
		...headerNavRoutes,
	],
});

const pinia = createPinia();

createApp(App).use(router).use(pinia).mount("#app");
