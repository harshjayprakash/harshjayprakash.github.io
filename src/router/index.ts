import { type Router, createRouter, createWebHistory } from "vue-router";

const router: Router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [],
});

export default router;
