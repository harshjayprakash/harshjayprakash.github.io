import { computed, ref } from "vue";

import getDeveloperProjects from "@/data/developerProjects"
import type { ProjectCategory } from "@/types/ProjectCategory";

const useDeveloperProjectFilter = () => {
    const {developerProjects} = getDeveloperProjects();
    const projects = ref(developerProjects);
    const projectTypeFilter = ref<ProjectCategory>('All');

    const filteredProjects = computed(() => {
        if (projectTypeFilter.value === 'All') {
            return projects.value;
        }
        return projects.value.filter(
            project => project.category === projectTypeFilter.value
        );
    });

    const updateCategoryFilter = (category: ProjectCategory) => {
        projectTypeFilter.value = category;
    }

    const updateAbbreivationsFilter = (abbrevs: string[]) => {
        projects.value = developerProjects
            .filter(project => abbrevs.includes(project.abbreviation))
            .sort((projectA, projectB) => abbrevs.indexOf(projectA.abbreviation) -
                abbrevs.indexOf(projectB.abbreviation));
    }

    const isActiveCategoryFilter = (category: ProjectCategory) => {
        return projectTypeFilter.value === category;
    }

    return {
        filteredProjects,
        isActiveCategoryFilter,
        updateAbbreivationsFilter,
        updateCategoryFilter
    };
}

export default useDeveloperProjectFilter;
