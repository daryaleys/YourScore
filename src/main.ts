import "./main.scss";

import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import Football from "./views/Football.vue";
import Hockey from "./views/Hockey.vue";
import Boxing from "./views/Boxing.vue";
import MMA from "./views/MMA.vue";

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
        path: "/mma",
        name: "mma",
        component: MMA,
    },
];

export type HeaderNavRouteNames = (typeof headerNavRoutes)[number]["name"];

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
        ...headerNavRoutes,
    ],
});

const pinia = createPinia();

createApp(App).use(router).use(pinia).mount("#app");
