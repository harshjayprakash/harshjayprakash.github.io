import type { DeveloperProjectCategory } from "./DeveloperProjectCategory";

interface DeveloperProject {
    name: string;
    description: string;
    reference: string;
    category: DeveloperProjectCategory;
    technology: string;
    timeframe: string;
    status: string;
    available: boolean;
    abbreviation: string;
    slug: string;
    gitUri: string;
}

export type { DeveloperProject };
