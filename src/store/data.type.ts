export interface DevProject {
    name: string;
    ref: string;
    description: string;
    timeframe: string;
    technology: string;
    graphic: string;
    url: string;
    gitLink: string;
};

export interface ArtProject {
    name: string;
    description: string;
    url: string;
};

export interface Social {
    name: string;
    uri: string;
    value: string;
}

export type SkillType = 'technical' | 'traditional'