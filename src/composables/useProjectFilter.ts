import { computed, ref } from 'vue'

import getDeveloperProjectsData from '@/store/data/developerProjects';
import type { ProjectCategory } from '@/store/interfaces/DeveloperProject';

const useProjectFilter = () => {
    const { developerProjects } = getDeveloperProjectsData();
    const projects = ref(developerProjects);
    const typeFilter = ref('All');

    const filterByAbbreviation = (abbrevs: String[]) => {
        projects.value = developerProjects
            .filter(project => abbrevs.includes(project.abbreviation))
            .sort((projectA, projectB) =>
                abbrevs.indexOf(
                    projectA.abbreviation) - abbrevs.indexOf(projectB.abbreviation));
    };

    const filteredProjects = computed(() => {
        if (typeFilter.value === 'All') {
            return projects.value;
        }
        return projects.value.filter(project => project.category === typeFilter.value);
    });

    const updateFilter = (category: ProjectCategory) => {
        typeFilter.value = category;
    }

    return { filteredProjects, typeFilter, updateFilter, filterByAbbreviation };
}

export default useProjectFilter;
