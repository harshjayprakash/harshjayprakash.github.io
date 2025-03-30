import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            redirect:  '/home',
        },
        {
            path: '/home',
            name: 'Home',
            component: () => import('@/pages/home/HomeView.vue'),
        },
        {
            path: '/about',
            name: 'About',
            component: () => import('@/pages/about/AboutView.vue'),
        },
        {
            path: '/alpha',
            name: 'Alpha',
            component: () => import('@/pages/alpha/AlphaView.vue'),
        }
    ]
});

export default router;
