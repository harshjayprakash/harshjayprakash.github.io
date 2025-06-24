import { createRouter, createWebHistory } from 'vue-router';

import AboutPage from '@/pages/about/AboutPage.vue';
import CVPage from '@/pages/cv/CVPage.vue';
import HomePage from '@/pages/home/HomePage.vue';
import ProjectsPage from '@/pages/projects/ProjectsPage.vue';
import NotFoundPage from '@/pages/notfound/NotFoundPage.vue';
import AlphaPage from '@/pages/alpha/AlphaPage.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [{
        path: '/',
        redirect: '/home'
    }, {
        path: '/home',
        name: 'Home',
        component: HomePage,
        meta: { title: 'Home' }
    }, {
        path: '/projects',
        name: 'Projects',
        component: ProjectsPage,
        meta: { title: 'Projects' }
    }, {
        path: '/about',
        name: 'About',
        component: AboutPage,
        meta: { title: 'About Me' }
    }, {
        path: '/cv',
        name: 'CV',
        component: CVPage,
        meta: { title: 'Curriculum Vitae' }
    }, {
        path: '/alpha',
        name: 'Alpha',
        component: AlphaPage,
        meta: { title: 'Test Development' }
    }, {
        path: '/:pathMatch(.*)*',
        name: 'Not Found',
        component: NotFoundPage,
        meta: { title: 'Impossible Page' }
    }]
});

export default router;
