import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";

import { developerProjects } from "@/store/data/developerProjects";
import type { DeveloperProject } from "@/store/interface/DeveloperProject";

function createDeveloperProjectRoutes(): RouteRecordRaw[] {
    const routes: RouteRecordRaw[] = [];
    developerProjects.forEach((project: DeveloperProject) => {
        routes.push(
            {
                path: `/work/dev/${project.slug}`,
                name: project.name.toString(),
                component: () => import(
                    `./../views/dev-work/DW${project.abbreviation.toUpperCase()}View.vue`),
            }
        )
    })
    return routes;
}

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        ...createDeveloperProjectRoutes(),
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            name: 'Home',
            component: () => import('./../views/HomeView.vue'),
        }
    ]
});

export default router;
