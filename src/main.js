import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import Profile from "@/components/Profile";
import Home from "@/components/Home";

const routes = [
    {path: "/", component: Home},
    {path: "/profile", component: Profile}
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

import App from "./App.vue";


createApp(App).use(router).mount("#app");
