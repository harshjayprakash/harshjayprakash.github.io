import type { ProjectPlatform } from "./ProjectPlatform";
import type { ProjectStatus } from "./ProjectStatus";

interface Project {
    name: string;
    title: string;
    internalName: string,
    description: string;
    slug: string;

    abbreviation: string;
    platform: ProjectPlatform;
    status: ProjectStatus;
    start: string;
    available: boolean;

    technology: string;
    git?: string;
    image?: string;
    featured?: boolean;
}

export type { Project };
