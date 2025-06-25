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
        meta: {
            title: 'Home',
            icon: 'home'
        }
    }, {
        path: '/projects',
        name: 'Projects',
        component: ProjectsPage,
        meta: {
            title: 'Projects',
            icon: 'workspaces'
        }
    }, {
        path: '/about',
        name: 'About',
        component: AboutPage,
        meta: {
            title: 'About Me',
            icon: 'account_circle'
        }
    }, {
        path: '/cv',
        name: 'CV',
        component: CVPage,
        meta: {
            title: 'Curriculum Vitae',
            icon: undefined
        }
    }, {
        path: '/alpha',
        name: 'Alpha',
        component: AlphaPage,
        meta: {
            title: 'Test Development',
            icon: undefined
        }
    }, {
        path: '/:pathMatch(.*)*',
        name: 'Not Found',
        component: NotFoundPage,
        meta: {
            title: 'Impossible Page' ,
            icon: undefined
        }
    }]
});

export default router;
