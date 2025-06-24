type ProjectStatus = 'Active' | 'Passive' | 'Halted' | 'Maintenance' | 'Archived';

type ProjectCategory = 'All' | 'CLI' | 'Desktop' | 'Web';

interface Project {
    name: string;
    description: string;
    reference: string;
    category: ProjectCategory;
    technology: string;
    timeframe: string;
    status: ProjectStatus;
    abbreviation: string;
    slug: string;
    git: string;
    available: boolean;
}

export type { ProjectStatus, ProjectCategory, Project };
