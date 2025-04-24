import type { ProjectCategory } from "@/types/ProjectCategory";
import type { ProjectStatus } from "@/types/ProjectStatus";

interface Project {
    name: string,
    description: string,
    reference: string,
    category: ProjectCategory,
    technology: string,
    timeframe: string,
    status: ProjectStatus,
    abbreviation: string,
    slug: string,
    gitUri: string,
    available: boolean,
}

export type { Project };
