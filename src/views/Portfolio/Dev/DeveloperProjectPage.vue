<template>
    <section class="">
        <RouterLink class="link-label" to="/portfolio/dev" exact>
            &LeftArrow; Back to Project List
        </RouterLink>
        <br />
        <br />
        <h1>{{ currentProject?.ref }} &mdash; {{ currentProject?.name }}</h1>
        <small>{{ currentProject?.timeframe }}</small>
        <br />
        <br />
        <a class="link-label" :href="currentProject?.gituri">
            View Source Code on GitHub (&nearrow;)
        </a>
        <br />
        <br />
    </section>
    <RouterView />
</template>

<script lang="ts">
import router from '@/router';
import { devProjectsList } from '@/store/data/devProjectsList';
import type { DevProject } from '@/store/interfaces/DevProject';
import { defineComponent } from 'vue';

export default defineComponent({
    data() { 
        const currentProjectRoute: string = router.currentRoute.value.fullPath.toString()
            .slice(23, router.currentRoute.value.fullPath.length);
        let currentProject: DevProject | undefined;
        devProjectsList.forEach(project => {
            if (project.uri === currentProjectRoute) {
                currentProject = project;
            }
        });
        return { currentProject };
    },
    setup() { },
});
</script>

<style lang="css" scoped>
.link-label {
    text-decoration: none;
    color: inherit;
    border-bottom: 0.15rem solid var(--clr-accent-container);
}

.link-label:hover {
    border-bottom-color: var(--clr-accent-variant);
}
</style>