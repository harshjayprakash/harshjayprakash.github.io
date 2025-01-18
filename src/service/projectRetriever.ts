import router from "@/router";
import { developerProjects } from "@/store/data/developerProjects";
import type { DeveloperProject } from "@/store/interface/DeveloperProject";

export function getProjectFromRoute(): DeveloperProject | undefined {
    const projectSlug = router.currentRoute.value.fullPath.slice(
        6, router.currentRoute.value.fullPath.length
    );

    return developerProjects.find((project: DeveloperProject) =>
        project.slug === projectSlug
    );
}

