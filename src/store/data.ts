import ProjectAdventureGame from "@/views/Portfolio/Dev/ProjectAdventureGame.vue";
import type { DevProject, Social } from "./data.type";
import ProjectAlgorithmicArtPlayground from "@/views/Portfolio/Dev/ProjectAlgorithmicArtPlayground.vue";
import ProjectCraneContainerSimulation from "@/views/Portfolio/Dev/ProjectCraneContainerSimulation.vue";
import ProjectDogWalkersFinder from "@/views/Portfolio/Dev/ProjectDogWalkersFinder.vue";
import ProjectExperimentalBlok from "@/views/Portfolio/Dev/ProjectExperimentalBlok.vue";
import ProjectLibraryLoansSystem from "@/views/Portfolio/Dev/ProjectLibraryLoansSystem.vue";
import ProjectNoughtsAndCrosses from "@/views/Portfolio/Dev/ProjectNoughtsAndCrosses.vue";
import ProjectPersonalPortfolio from "@/views/Portfolio/Dev/ProjectPersonalPortfolio.vue";
import ProjectNavigator from "@/views/Portfolio/Dev/ProjectNavigator.vue";
import ProjectTableSoftwarePrototype from "@/views/Portfolio/Dev/ProjectTableSoftwarePrototype.vue";
import ProjectTrigonometricHelper from "@/views/Portfolio/Dev/ProjectTrigonometricHelper.vue";
import ProjectWrappingPaperQuotesCalculator from "@/views/Portfolio/Dev/ProjectWrappingPaperQuotesCalculator.vue";

export const devProjects: DevProject[] = [
    {
        name: 'Adventure Game',
        ref: 'BPC 1950',
        description: 'A text-based adventure game exploring the environment.',
        timeframe: 'H2 \'19 - ONGOING',
        technology: 'Pascal',
        graphic: '',
        url: 'adventure-game',
        gitLink: 'https://github.com/harshjayprakash/adventure-game',
        comp: ProjectAdventureGame,
    },
    {
        name: 'Algorithmic Art Playground',
        ref: 'UOW 2450',
        description: 'A simple tool to experiment generating art via programming locally',
        timeframe: 'H2 \'24 - ONGOING',
        technology: 'Java',
        graphic: '',
        url: 'algorithmic-art-playground',
        gitLink: 'https://github.com/harshjayprakash/algorithmic-art-playground',
        comp: ProjectAlgorithmicArtPlayground,
    },
    {
        name: 'Crane Container Simulation',
        ref: 'UOW 2300',
        description: 'A simulation to calculate the time taken to arrange crates at different loading bays.',
        timeframe: 'H1 \'23',
        technology: 'Pascal',
        graphic: '',
        url: 'crane-container-simulation',
        gitLink: 'https://github.com/harshjayprakash/crane-container-simulation',
        comp: ProjectCraneContainerSimulation,
    },
    {
        name: 'Dog Walkers Finder',
        ref: 'UOW 2401',
        description: 'A tool for dog owners to find dof walkers within their local area.',
        timeframe: 'H2 \'24',
        technology: 'Angular w/ AWS',
        graphic: '',
        url: 'dog-walkers-finder',
        gitLink: 'https://github.com/harshjayprakash/dog-walkers-finder',
        comp: ProjectDogWalkersFinder,
    },
    {
        name: 'Experimental Blok',
        ref: 'HX 2050',
        description: 'A square that moves, with arrow keys, around a user generated maze',
        timeframe: 'H2 \'20 - ONGOING',
        technology: 'C w/ Windows API',
        graphic: '',
        url: 'experimental-blok',
        gitLink: 'https://github.com/harshjayprakash/experimental-blok',
        comp: ProjectExperimentalBlok,
    },
    {
        name: 'Library Loans System',
        ref: 'UOW 2301',
        description: 'A system to keep track of library inventory and loaned Books and DVDs.',
        timeframe: 'H1 \'23',
        technology: 'Java w/ MySQL',
        graphic: '',
        url: 'library-loans-system',
        gitLink: 'https://github.com/harshjayprakash/library-loans-system',
        comp: ProjectLibraryLoansSystem,
    },
    {
        name: 'Noughts and Crosses',
        ref: 'HX 2201',
        description: 'A text-based game of Tic-Tac-Toe against the computer.',
        timeframe: 'H1 \'22 - ONGOING',
        technology: 'Pascal',
        graphic: '',
        url: 'noughts-and-crosses',
        gitLink: 'https://github.com/harshjayprakash/noughts-and-crosses',
        comp: ProjectNoughtsAndCrosses,
    },
    {
        name: 'Personal Portfolio',
        ref: 'HX 2150',
        description: 'A digital place to showcase skills and undertaken projects.',
        timeframe: 'H2 \'21 - ONGOING',
        technology: 'Vue.js w/ TypeScript',
        graphic: '',
        url: 'personal-portfolio',
        gitLink: 'https://github.com/harshjayprakash/harshjayprakash.github.io',
        comp: ProjectPersonalPortfolio,
    },
    {
        name: 'Project Navigator',
        ref: 'HX 2401',
        description: 'A tool to navigate and list projects available in the command line.',
        timeframe: 'H1 \'24 - ONGOING',
        technology: 'PowerShell',
        graphic: '',
        url: 'project-navigator',
        gitLink: 'https://github.com/harshjayprakash/project-navigator',
        comp: ProjectNavigator,
    },
    {
        name: 'Table Software Prototype',
        ref: 'UOW 2302',
        description: 'An interface that can on an interactive table idea.',
        timeframe: 'H1 \'23',
        technology: 'Vanilla JavaScript',
        graphic: '',
        url: 'table-software-prototype',
        gitLink: 'https://github.com/harshjayprakash/table-software-prototype',
        comp: ProjectTableSoftwarePrototype,
    },
    {
        name: 'Trigonometric Helper',
        ref: 'BPC 2100',
        description: 'A tool to aid in the learning of Trigonometry at the A-Level standard.',
        timeframe: 'H1 \'21 - ONGOING',
        technology: 'Visual Basic .NET',
        graphic: '',
        url: 'trigonometric-helper',
        gitLink: 'https://github.com/harshjayprakash/trigonometric-helper',
        comp: ProjectTrigonometricHelper,
    },
    {
        name: 'Wrapping Paper Quotes Calculator',
        ref: 'UOW 2200',
        description: 'A calculator for a department, who provide gift wrapping services based on present shape.',
        timeframe: 'H1 \'20',
        technology: 'Python',
        graphic: '',
        url: 'wrapping-paper-quotes-calculator',
        gitLink: 'https://github.com/harshjayprakash/wrapping-paper-quotes-calculator',
        comp: ProjectWrappingPaperQuotesCalculator,
    },
];

export const socialList: Social[] = [
    {
        name: 'GitHub',
        uri: 'https://github.com/harshjayprakash',
        value: 'harshjayprakash',
    },
    {
        name: 'X (Formerly Twitter)',
        uri: 'https://x.com/harshjay_',
        value: '@harshjay_',
    },
    {
        name: 'Email',
        uri: 'mailto:harshjayprakash@outlook.com',
        value: 'harshjayprakash@outlook.com',
    },
];