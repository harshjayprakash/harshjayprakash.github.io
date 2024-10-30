import { createRouter, createWebHistory, type Router } from "vue-router";

const router: Router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/', redirect: '/home',
        },
        {
            path: '/home', name: 'Home',
            component: () => import('./../views/Home.vue'),
        },
        {
            path: '/about', name: 'About',
            component: () => import('./../views/About.vue'),
        },
        {
            path: '/contact', name: 'Contact',
            component: () => import('./../views/Contact.vue'),
        },
        {
            path: '/brand', name: 'Branding',
            component: () => import('./../views/Brand.vue'),
        },
        {
            path: '/portfolio/art', name: 'Art Portfolio',
            component: () => import('./../views/Portfolio/Art/Index.vue'),
        },
        {
            path: '/portfolio/dev', name: 'Developer Portfolio',
            component: () => import('./../views/Portfolio/Dev/Index.vue'),
        },
        {
            path: '/portfolio/photography', name: 'Photography Portfolio',
            component: () => import('./../views/Portfolio/Photography/Index.vue'),
        },
    ]
});

export default router;