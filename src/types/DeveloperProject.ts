import type { ProjectCategory } from "@/types/ProjectCategory";

interface DeveloperProject {
    name: string;
    description: string;
    reference: string;
    category: ProjectCategory;
    technology: string;
    timeframe: string;
    status: string;
    available: boolean;
    abbreviation: string;
    slug: string;
    gitUri: string;
}

export type { DeveloperProject };
