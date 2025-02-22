import { type Router, createRouter, createWebHistory } from "vue-router";

const router: Router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            redirect: '/home',
        },
        {
            path: '/home',
            name: 'Home',
            component: () => import ('./../views/HomeView.vue'),
        }
    ],
});

export default router;
