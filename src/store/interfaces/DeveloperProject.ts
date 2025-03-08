type Category = 'CLI Application' | 'Desktop Application' | 'Web Application';

interface IDeveloperProject {
    name: String;
    description: String;
    reference: String;
    category: Category;
    timeframe: String;
    status: String;
    available: Boolean;
    technology: String;
    abbreviation: String;
    slug: String;
    gitUri: String;
};

export type { IDeveloperProject, Category };
