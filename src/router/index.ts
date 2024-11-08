import About from "@/views/About.vue";
import Home from "@/views/Home.vue";
import { createRouter, createWebHistory, type Router, type RouteRecordRaw } from "vue-router";
import Blog from "@/views/Blog/Blog.vue";
import DeveloperPortfolio from "@/views/Portfolio/Dev/DeveloperPortfolio.vue";
import DeveloperProjectPage from "@/views/Portfolio/Dev/DeveloperProjectPage.vue";
import { devProjectsList } from "@/store/data/devProjectsList";
import type { BlogPost } from "@/store/interfaces/BlogPost";
import { blogPostList } from "@/store/data/blogPostList";
import type { DevProject } from "@/store/interfaces/DevProject";

const createRoutesForDevProjects = () => {
    const projectRoutes: RouteRecordRaw[] = []
    devProjectsList.forEach((project: DevProject) => {
        projectRoutes.push({
            path: project.uri,
            name: project.name,
            component: project.content,
        });
    });
    return projectRoutes;
}

const createRoutesForBlogPosts = () => {
    const blogRoutes: RouteRecordRaw[] = [];
    blogPostList.forEach((post: BlogPost) => {
        blogRoutes.push({
            path: post.uri,
            name: post.name,
            component: post.content
        });
    });
    return blogRoutes;
}

const router: Router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: '/', redirect: '/home', },
        { path: '/home', name: 'Home', component: Home, },
        { path: '/about', name: 'About', component: About, },
        { path: '/blog', name: 'Blog', component: Blog, },
        { path: '/portfolio/dev', name: 'Developer Portfolio', component: DeveloperPortfolio, },
        {
            path: '/portfolio/dev/project',
            name: 'Developer Project',
            component: DeveloperProjectPage,
            children: createRoutesForDevProjects(),
        },
        {
            path: '/blog/post',
            name: 'Blog Post',
            children: createRoutesForBlogPosts(),
        },
    ],
});

export default router;