import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
    {
        path: "*",
        redirect: "/Home",
    },
    {
        path: "/Home",
        name: "Home",
        component: Home,
    },
];

const router = new VueRouter({
    mode: "history",
    routes,
});

export default router;
