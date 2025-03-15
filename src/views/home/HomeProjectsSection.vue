<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import type { ComputedRef, Ref } from 'vue';

import CardComponent from '@/components/CardComponent.vue';
import CardGroupComponent from '@/components/CardGroupComponent.vue';
import TagComponent from '@/components/TagComponent.vue';
import TagGroupComponent from '@/components/TagGroupComponent.vue';

import developerProjects from '@/store/data/developerProjects';
import type {
    IDeveloperProject,
    ProjectCategory
} from '@/store/interfaces/DeveloperProject';

const HomeProjectsSection = defineComponent({
    name: 'HomeProjectsSection',
    components: {
        CardGroupComponent,
        CardComponent,
        TagGroupComponent,
        TagComponent,
    },
    setup() {
        const _devFilter = ['aap', 'xbk', 'wpq', 'lls', 'dwf', 'ccs'];
        const _devProjects = developerProjects
            .filter(project => project.available && project.abbreviation !== 'ppw')
            .sort((projectA, projectB) =>
                _devFilter.indexOf(
                    projectA.abbreviation.toString()) - _devFilter.indexOf(
                        projectB.abbreviation.toString())
            );

        const _devProjectsRef = ref(_devProjects);
        const _devAdditionalFilterRef: Ref<ProjectCategory> = ref('All');

        const _devProjectFiltered = computed(() => {
            if (_devAdditionalFilterRef.value === 'All') {
                return _devProjectsRef.value;
            }
            return _devProjectsRef.value.filter(project =>
                project.category === _devAdditionalFilterRef.value
            );
        });

        return {
            devProjects: _devProjectFiltered as ComputedRef<IDeveloperProject[]>,
            devProjectFilter: _devAdditionalFilterRef as Ref<ProjectCategory>
        }
    },
    methods: {
        updateProjectsList(category: ProjectCategory) {
            this.devProjectFilter = category;
        },
        isActiveOption(category: ProjectCategory) {
            return (this.devProjectFilter === category);
        }
    }
});

export default HomeProjectsSection;
</script>

<template>
    <section class="home-projects">
        <h2>Projects.</h2>
        <p>
            Below shows a collection of some of my undertaken projects, ranging from web
            development to traditional application development. Currently, these cards
            link to their respective GitHub repositories. In future, each project will
            have their own pages.
        </p>
        <TagGroupComponent>
            <TagComponent
                @click="updateProjectsList('All')"
                v-bind:isActive="isActiveOption('All')"
            >
                All
            </TagComponent>
            <TagComponent
                @click="updateProjectsList('CLI Application')"
                v-bind:isActive="isActiveOption('CLI Application')"
            >
                CLI
            </TagComponent>
            <TagComponent
                @click="updateProjectsList('Desktop Application')"
                v-bind:isActive="isActiveOption('Desktop Application')"
            >
                Desktop
            </TagComponent>
            <TagComponent
                @click="updateProjectsList('Web Application')"
                v-bind:isActive="isActiveOption('Web Application')"
            >
                Web
            </TagComponent>
        </TagGroupComponent>
        <CardGroupComponent :desktopCols="2">
            <CardComponent
                v-for="(project, idx) in devProjects" v-bind:key="idx"
                variant="external-link" v-bind:path="project.gitUri.toString()"
            >
                <img class="card-preview"
                    v-bind:src="`/img/${project.abbreviation}-screenshot.PNG`"
                    v-bind:alt="`${project.name} screenshot`"
                >
                <div class="card-header">
                    <span>
                        {{ project.name }}
                    </span>
                    <br />
                    <small>
                        {{ project.technology }}
                    </small>
                </div>
                <p class="card-description">
                    {{ project.description }}
                </p>
                <div class="card-footer">

                </div>
            </CardComponent>
        </CardGroupComponent>
    </section>
</template>

<style lang="css" scoped>
.home-projects {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
</style>
