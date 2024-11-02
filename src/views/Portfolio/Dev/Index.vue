<template>
    <section class="dev-projects">
        <h1>Developer Portfolio</h1>
        <p>A list of undertaken projects.</p>
        <section class="dev-project-list">
            <article class="dev-project" v-for="project in projectList">
                <small class="project-ref">{{ project.ref }} &emsp; {{ project.technology }}</small>
                <br />
                <span class="project-title">{{ project.name }}</span>
                <p>{{ project.description }}</p>
                <a>View More&emsp;&RightArrow;</a>
            </article>
        </section>
    </section>
</template>

<script lang="ts">
import { devProjects } from '@/store/data';
import type { DevProject } from '@/store/data.type';
import { defineComponent } from 'vue';

export default defineComponent({
    data() {
        const projectList: DevProject[] = devProjects;
        return { projectList };
    },
    setup() { },
});
</script>

<style lang="css" scoped>
.dev-projects {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.dev-project-list {
    display: grid;
    gap: 1rem;
}

.dev-project {
    padding: 1rem;
    background-color: var(--clr-surface-container-low);
}

.project-ref {
    font-weight: 300;
}

.project-title {
    font-weight: 500;
}

@media (min-width: 800px) {
    .dev-project-list {
        grid-template-columns: 1fr 1fr;
    }
}
</style>