import { computed, readonly, ref } from 'vue';

import type { Project } from '@/types/Project';
import type { ProjectCategory } from '@/types/ProjectCategory';

const useProjectCategoryFilter = (projects_: Project[]) => {
    const projects = ref(projects_);
    const projectsFilter = ref<ProjectCategory>('All');

    const filteredProjects = computed(() => {
        return (projectsFilter.value === 'All') ? projects.value
            : projects.value.filter(project => project.category === projectsFilter.value);
    });

    const updateFilter = (category: ProjectCategory) => {
        projectsFilter.value = category;
    }

    const isActiveFilter = (category: ProjectCategory) => {
        return (projectsFilter.value === category);
    }

    const totalCount = ref(projects.value.length);
    const currentCount = computed(() => filteredProjects.value.length);

    const useProjectCounter = () => {
        return { totalCount: readonly(totalCount), currentCount };
    }

    return {
        filteredProjects: readonly(filteredProjects),
        updateFilter, isActiveFilter,
        useProjectCounter
    };
}

export default useProjectCategoryFilter;
