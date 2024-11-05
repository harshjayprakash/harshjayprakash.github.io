import type { DevProject } from "../interfaces/DevProject";

import ProjectAdventureGame from "@/views/Portfolio/Dev/ProjectAdventureGame.vue";
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

export const devProjectsList: DevProject[] = [
    {
        name: 'Adventure Game',
        ref: 'BPC 1950',
        description: 'A text-based adventure game exploring the environment.',
        timeframe: 'H2 \'19 - ONGOING',
        technology: 'Pascal',
        graphic: '',
        uri: 'adventure-game',
        gituri: 'https://github.com/harshjayprakash/adventure-game',
        content: ProjectAdventureGame,
    },
    {
        name: 'Algorithmic Art Playground',
        ref: 'UOW 2450',
        description: 'A simple tool to experiment generating art via programming locally',
        timeframe: 'H2 \'24 - ONGOING',
        technology: 'Java',
        graphic: '',
        uri: 'algorithmic-art-playground',
        gituri: 'https://github.com/harshjayprakash/algorithmic-art-playground',
        content: ProjectAlgorithmicArtPlayground,
    },
    {
        name: 'Crane Container Simulation',
        ref: 'UOW 2300',
        description: 'A simulation to calculate the time taken to arrange crates at different loading bays.',
        timeframe: 'H1 \'23',
        technology: 'Pascal',
        graphic: '',
        uri: 'crane-container-simulation',
        gituri: 'https://github.com/harshjayprakash/crane-container-simulation',
        content: ProjectCraneContainerSimulation,
    },
    {
        name: 'Dog Walkers Finder',
        ref: 'UOW 2401',
        description: 'A tool for dog owners to find dof walkers within their local area.',
        timeframe: 'H2 \'24',
        technology: 'Angular w/ AWS',
        graphic: '',
        uri: 'dog-walkers-finder',
        gituri: 'https://github.com/harshjayprakash/dog-walkers-finder',
        content: ProjectDogWalkersFinder,
    },
    {
        name: 'Experimental Blok',
        ref: 'HX 2050',
        description: 'A square that moves, with arrow keys, around a user generated maze',
        timeframe: 'H2 \'20 - ONGOING',
        technology: 'C w/ Windows API',
        graphic: '',
        uri: 'experimental-blok',
        gituri: 'https://github.com/harshjayprakash/experimental-blok',
        content: ProjectExperimentalBlok,
    },
    {
        name: 'Library Loans System',
        ref: 'UOW 2301',
        description: 'A system to keep track of library inventory and loaned Books and DVDs.',
        timeframe: 'H1 \'23',
        technology: 'Java w/ MySQL',
        graphic: '',
        uri: 'library-loans-system',
        gituri: 'https://github.com/harshjayprakash/library-loans-system',
        content: ProjectLibraryLoansSystem,
    },
    {
        name: 'Noughts and Crosses',
        ref: 'HX 2201',
        description: 'A text-based game of Tic-Tac-Toe against the contentuter.',
        timeframe: 'H1 \'22 - ONGOING',
        technology: 'Pascal',
        graphic: '',
        uri: 'noughts-and-crosses',
        gituri: 'https://github.com/harshjayprakash/noughts-and-crosses',
        content: ProjectNoughtsAndCrosses,
    },
    {
        name: 'Personal Portfolio',
        ref: 'HX 2150',
        description: 'A digital place to showcase skills and undertaken projects.',
        timeframe: 'H2 \'21 - ONGOING',
        technology: 'Vue.js w/ TypeScript',
        graphic: '',
        uri: 'personal-portfolio',
        gituri: 'https://github.com/harshjayprakash/harshjayprakash.github.io',
        content: ProjectPersonalPortfolio,
    },
    {
        name: 'Project Navigator',
        ref: 'HX 2401',
        description: 'A tool to navigate and list projects available in the command line.',
        timeframe: 'H1 \'24 - ONGOING',
        technology: 'PowerShell',
        graphic: '',
        uri: 'project-navigator',
        gituri: 'https://github.com/harshjayprakash/project-navigator',
        content: ProjectNavigator,
    },
    {
        name: 'Table Software Prototype',
        ref: 'UOW 2302',
        description: 'An interface that can on an interactive table idea.',
        timeframe: 'H1 \'23',
        technology: 'Vanilla JavaScript',
        graphic: '',
        uri: 'table-software-prototype',
        gituri: 'https://github.com/harshjayprakash/table-software-prototype',
        content: ProjectTableSoftwarePrototype,
    },
    {
        name: 'Trigonometric Helper',
        ref: 'BPC 2100',
        description: 'A tool to aid in the learning of Trigonometry at the A-Level standard.',
        timeframe: 'H1 \'21 - ONGOING',
        technology: 'Visual Basic .NET',
        graphic: '',
        uri: 'trigonometric-helper',
        gituri: 'https://github.com/harshjayprakash/trigonometric-helper',
        content: ProjectTrigonometricHelper,
    },
    {
        name: 'Wrapping Paper Quotes Calculator',
        ref: 'UOW 2200',
        description: 'A calculator for a department, who provide gift wrapping services based on present shape.',
        timeframe: 'H1 \'20',
        technology: 'Python',
        graphic: '',
        uri: 'wrapping-paper-quotes-calculator',
        gituri: 'https://github.com/harshjayprakash/wrapping-paper-quotes-calculator',
        content: ProjectWrappingPaperQuotesCalculator,
    },
];
