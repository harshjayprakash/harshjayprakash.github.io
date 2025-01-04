import router from "@/router";
import { developerProjects } from "@/store/data/developerProjects";
import type { DeveloperProject } from "@/store/interface/DeveloperProject";

export function getProjectFromRoute(): DeveloperProject | undefined {
    const projectSlug = router.currentRoute.value.fullPath.slice(
        10, router.currentRoute.value.fullPath.length
    );

    developerProjects.forEach((project: DeveloperProject) => {
        if (project.slug === projectSlug) {
            return project;
        }
    });

    return undefined;
}

