import CardComponent from "@/components/ui/CardComponent.vue";
import { blogPostList } from "@/store/data/blogPostList";
import AboutPage from "@/views/AboutPage.vue";
import BlogPage from "@/views/Blog/BlogPage.vue";
import HomePage from "@/views/HomePage.vue";
import NotFoundPage from "@/views/NotFoundPage.vue";
import DeveloperPortfolioPage from "@/views/Portfolio/DeveloperPortfolioPage.vue";
import { createRouter, createWebHistory, type Router, type RouteRecordRaw } from "vue-router";

function createBlogRoutes(): RouteRecordRaw[] {
    let routes: RouteRecordRaw[] = [];
    blogPostList.forEach(post => {
        routes.push({
            path: post.uri.toString(),
            name: post.name.toString(),
            component: post.content ?? CardComponent,
        });
    });
    return routes;
}

const router: Router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', name: 'Home', component: HomePage },
        { path: '/about', name: 'About', component: AboutPage },
        { path: '/blog', name: 'Blog', component: BlogPage },
        { path: '/portfolio/dev', name: 'Developer Portfolio', component: DeveloperPortfolioPage },
        {
            path: '/blog/post',
            name: '',
            component: null,
            children: createBlogRoutes(),
        },
        { path: '/:catchAll(.*)*', name: 'Not Found', component: NotFoundPage }
    ],
});

export default router;