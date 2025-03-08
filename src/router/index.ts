import { createRouter, createWebHistory } from "vue-router";

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
            component: import('@/views/Home/HomeView.vue'),
        },
        {
            path: '/about',
            name: 'About',
            component: import('@/views/About/AboutView.vue'),
        },
        {
            path: '/alpha',
            name: 'Alpha',
            component: import('@/views/alpha/AlphaView.vue'),
        }
    ]
});

export default router;
