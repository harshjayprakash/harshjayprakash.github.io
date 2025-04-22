import { createRouter, createWebHistory } from 'vue-router';

import HomePage from '@/pages/home/HomePage.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [{
        path: '/',
        redirect: '/home'
    }, {
        path: '/home',
        name: 'Home',
        component: HomePage
    }]
});

export default router;
