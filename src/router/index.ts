import { createRouter, createWebHistory } from 'vue-router';

import HomePage from '@/pages/home/HomePage.vue';
import NotFoundPage from '@/pages/not-found/NotFoundPage.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [{
        path: '/',
        redirect: '/home'
    }, {
        path: '/home',
        name: 'Home',
        component: HomePage
    }, {
        path: '/:pathMatch(.*)*',
        name: 'Not Found',
        component: NotFoundPage
    }]
});

export default router;
