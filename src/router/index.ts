import { createRouter, createWebHistory } from 'vue-router';

import AboutPage from '@/pages/about/AboutPage.vue';
import HomePage from '@/pages/home/HomePage.vue';
import ProjectsPage from '@/pages/projects/ProjectsPage.vue';
import NotFoundPage from '@/pages/notfound/NotFoundPage.vue';

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
            icon: 'work'
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
        path: '/:pathMatch(.*)*',
        name: 'Not Found',
        component: NotFoundPage,
        meta: {
            title: 'Impossible Page' ,
            icon: undefined
        }
    }],
    scrollBehavior(_to, _from, _savedPosition) {
        if (_to.fullPath === _from.fullPath) {
            return { };
        }
        return { top: 0 };
    }
});

export default router;
