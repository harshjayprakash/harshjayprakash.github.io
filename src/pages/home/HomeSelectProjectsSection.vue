<script setup lang="ts">
import TheCard from '@/components/TheCard.vue';
import TheLink from '@/components/TheLink.vue';
import getAltText from '@/data/altText';
import getProjects from '@/data/projects';

const { findAltTextFromName } = getAltText();

const getProjectImageSource = (abbrev: string) =>
    `/images/${abbrev}-preview.png`;

const getProjectImageAlt = (abbrev: string) =>
    findAltTextFromName(`${abbrev}-preview.png`);


const { filterProjectsByAbbreviation } = getProjects();
const selectProjects = filterProjectsByAbbreviation([
    'xbk', 'dwf'
]);

const dissertationProject = filterProjectsByAbbreviation(['aap'])[0];
</script>

<template>
    <section class="select-projects" aria-label="Selected Projects">
        <div>
            <h2>Select Projects</h2>
            <p>Explore my selected projects, showcasing my skills.</p>
        </div>
        <div class="select-projects-group" role="group">
            <TheCard
                link="external"
                new-window exact
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
                    <h3>{{ project.name }}</h3>
                    <p>{{ project.description }}</p>
                </div>
            </TheCard>
        </div>
        <TheCard
                link="external"
                new-window exact
                :to="dissertationProject.git"

            >
            <div class="dissertation-project">
                <div>
                    <h2>Dissertation Project</h2>
                    <h3>{{ dissertationProject.name }}</h3>
                    <p>{{ dissertationProject.description }}</p>
                    <TheLink variant="external" :to="dissertationProject.git" new-window>
                        Learn More
                    </TheLink>
                </div>
                <img
                    class="project-image"
                    :src="getProjectImageSource(dissertationProject.abbreviation)"
                    :alt="getProjectImageAlt(dissertationProject.abbreviation)"
                />
            </div>
        </TheCard>
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
