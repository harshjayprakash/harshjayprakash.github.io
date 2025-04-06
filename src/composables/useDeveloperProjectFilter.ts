import { computed, ref } from "vue";

import getDeveloperProjects from "@/data/developerProjects"
import type { DeveloperProjectCategory } from "@/types/DeveloperProjectCategory";

const useDeveloperProjectFilter = () => {
    const { developerProjects } = getDeveloperProjects();
    const projects = ref(developerProjects);
    const projectTypeFilter = ref<DeveloperProjectCategory>('All');

    const filteredProjects = computed(() => {
        if (projectTypeFilter.value === 'All') {
            return projects.value;
        }
        return projects.value.filter(
            project => project.category === projectTypeFilter.value);
    });

    const updateCategoryFilter = (category: DeveloperProjectCategory) => {
        projectTypeFilter.value = category;
    }

    const updateAbbreivationsFilter = (abbrevs: string[]) => {
        projects.value = developerProjects
            .filter(project => abbrevs.includes(project.abbreviation))
            .sort((projectA, projectB) =>
                abbrevs.indexOf(
                    projectA.abbreviation) - abbrevs.indexOf(projectB.abbreviation));
    }

    const isActiveCategoryFilter = (category: DeveloperProjectCategory) => {
        return projectTypeFilter.value === category;
    }

    return { filteredProjects, isActiveCategoryFilter, updateAbbreivationsFilter, updateCategoryFilter };
}

export default useDeveloperProjectFilter;
