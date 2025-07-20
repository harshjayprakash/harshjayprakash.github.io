import { computed, readonly, ref, shallowRef } from "vue";

import type { Project } from "@/types/project/Project";
import type { ProjectPlatformFilter } from "@/types/project/ProjectPlatform";


const useProjectPlatformFilter = (projects: Project[]) => {
    const all = shallowRef(projects);
    const filter = ref<ProjectPlatformFilter>('All');
    const filtered = computed(() => {
        return (filter.value === 'All')
            ? all.value
            : all.value.filter(project => project.platform === filter.value);
    });

    const updateFilter = (platform: ProjectPlatformFilter) => {
        filter.value = platform;
    }

    const isActiveFilter = (platform: ProjectPlatformFilter) => {
        return (filter.value === platform);
    }

    const totalCount = shallowRef(all.value.length);
    const currentCount = computed(() => filtered.value.length);

    return {
        all: readonly(all),
        filtered: readonly(filtered),
        totalCount: readonly(totalCount),
        currentCount: readonly(currentCount),
        updateFilter,
        isActiveFilter
    };
}

export default useProjectPlatformFilter;
