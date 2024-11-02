import About from "@/views/About.vue";
import Home from "@/views/Home.vue";
import { createRouter, createWebHistory, type Router, type RouteRecordRaw } from "vue-router";
import Blog from "@/views/Blog/Blog.vue";
import DeveloperPortfolio from "@/views/Portfolio/Dev/DeveloperPortfolio.vue";
import { devProjects } from "@/store/data";
import DeveloperProjectPage from "@/views/Portfolio/Dev/DeveloperProjectPage.vue";

const createRoutesForDevProjects = () => {
    const projectRoutes: RouteRecordRaw[] = []
    devProjects.forEach(project => {
        projectRoutes.push({
            path: project.url,
            name: project.name,
            component: project.comp,
        });
    });
    return projectRoutes;
}

const router: Router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: '/', redirect: '/home', },
        { path: '/home', name: 'Home', component: Home, },
        { path: '/about', name: 'About', component: About, },
        { path: '/blog', name: 'Blog', component: () => Blog, },
        { path: '/portfolio/dev', name: 'Developer Portfolio', component: DeveloperPortfolio, },
        {
            path: '/portfolio/dev/project',
            name: 'Developer Project',
            component: DeveloperProjectPage,
            children: createRoutesForDevProjects()
        }
    ]
});

export default router;