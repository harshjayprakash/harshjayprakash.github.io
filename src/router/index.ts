import { createRouter, createWebHistory, type Router } from "vue-router";


const router: Router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            redirect: '/home',
        },
    ]
});

export default router;