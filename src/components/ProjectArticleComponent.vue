<template>
    <section class="project-article">
        <div class="breadcrumb-bar">
            <RouterLink class="link" to="/home">
                Home
            </RouterLink>
            <span>></span>
            <span>{{ project?.name }}</span>
        </div>
        <div class="header">
            <h1>{{ project?.name }}</h1>
            <img class="image"
                :src="`/img/dev/${project?.abbreviation}-icon.png`"
                :alt="`${project?.name} icon`"
            />
        </div>
    </section>
</template>

<script lang="ts">
import { getProjectFromRoute } from '@/service/projectRetriever';
import type { DeveloperProject } from '@/store/interface/DeveloperProject';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'ProjectArticleComponent',
    data() {
        const project: DeveloperProject | undefined = getProjectFromRoute();
        return { project };
    }
});
</script>

<style lang="css" scoped>
.breadcrumb-bar {
    padding: 0.5rem 0;
    display: flex;
    gap: 0.5rem;
}

.breadcrumb-bar .link {
    text-decoration: none;
    color: inherit;
}

.breadcrumb-bar .link:hover {
    background-color: var(--clr-card-container-hover);
}

.image {
    height: 3rem;
    width: 3rem;
}

.header {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem 0;
}
</style>
