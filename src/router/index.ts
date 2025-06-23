import { createRouter, createWebHistory } from 'vue-router';

import AboutPage from '@/pages/about/AboutPage.vue';
import CVPage from '@/pages/cv/CVPage.vue';
import HomePage from '@/pages/home/HomePage.vue';
import ProjectsPage from '@/pages/projects/ProjectsPage.vue';

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
        path: '/projects',
        name: 'Projects',
        component: ProjectsPage
    }, {
        path: '/about',
        name: 'About',
        component: AboutPage
    }, {
        path: '/cv',
        name: 'CV',
        component: CVPage
    }]
});

export default router;
