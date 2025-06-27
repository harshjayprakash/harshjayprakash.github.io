<script setup lang="ts">
import TheBadge from '@/components/TheBadge.vue';
import TheButton from '@/components/TheButton.vue';
import TheCard from '@/components/TheCard.vue';
import { projectData } from '@/data/projects/projects';
import { imageData } from '@/data/ui/image';

const getProjectImageSource = (abbrev: string) => `/images/${abbrev}-preview.png`;
const getProjectImageAlt = (abbrev: string) => imageData.getByObjectName(`${abbrev}-preview`);

const selectProjects = projectData.filterByAbbreviation(['xbk', 'dwf']);
</script>

<template>
    <section class="select-projects" aria-label="Selected Projects">
        <div>
            <h2>Select Projects</h2>
            <p>Explore my selected projects, showcasing my skills.</p>
        </div>
        <div class="select-projects-group" role="group">
            <TheCard
                linkable="external"
                new-window
                appearance="filled"
                v-for="project in selectProjects"
                :key="project.abbreviation"
                :to="project.git"
                class="project-card"
            >
            <img
                class="project-image"
                :src="getProjectImageSource(project.abbreviation)"
                :alt="getProjectImageAlt(project.abbreviation)"
            />
            <div class="info" role="group">
                <TheBadge appearance="outline" colour="primary">
                    {{ project.platform }}
                </TheBadge>
                <h3>
                    {{ project.name }}
                </h3>
                <p>
                    {{ project.description }}
                </p>
            </div>
            </TheCard>
        </div>
        <TheButton linkable="internal" to="/projects">
            Explore More Projects
        </TheButton>
    </section>
</template>

<style lang="css" scoped>
.select-projects {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.select-projects-group {
    display: grid;
    gap: 1rem;
}

.project-card {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.project-image {
    border-radius: 5px;
}

.dissertation-project {
    display: grid;
    grid-template-columns: 1fr 1fr;
    border-radius: 5px;
}

@media (min-width: 768px) {
    .select-projects-group {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem;
    }

}
</style>
