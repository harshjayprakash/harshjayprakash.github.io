import { createRouter, createWebHistory } from 'vue-router';

import AlphaPage from '@/pages/alpha/AlphaPage.vue';
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
        path: '/alpha',
        name: 'Alpha',
        component: AlphaPage
    }, {
        path: '/:pathMatch(.*)*',
        name: 'Not Found',
        component: NotFoundPage
    }]
});

export default router;
