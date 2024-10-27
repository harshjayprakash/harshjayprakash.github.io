import { createRouter, createWebHistory, type Router } from "vue-router";


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
            component: () => import('./../views/Home.vue'),
        },
        {
            path: '/about',
            name: 'About',
            component: () => import('./../views/About.vue'),
        },
        {
            path: '/portfolio/dev',
            name: 'Developer Portfolio',
            component: () => import('./../views/Portfolio/Dev/Index.vue'),
        }
    ]
});

export default router;