import type { Project } from '@/types/Project';

const projects: Project[] = [{
    name: 'Adventure Game',
    description: 'A text-based adventure game exploring the environment.',
    reference: 'BPC1950',
    category: 'CLI',
    technology: 'Visual Basic .NET',
    timeframe: 'H2 2019',
    status: 'Halted',
    abbreviation: 'avg',
    slug: 'adventure-game',
    gitUri: 'https://github.com/harshjayprakash/adventure-game',
    available: false
}, {
    name: 'Algorithmic Art Playground',
    description: 'A simple application allowing the experimentation of generating art via programming locally on the computer.',
    reference: 'UOW2450',
    category: 'Desktop',
    technology: 'Java',
    timeframe: 'H2 2024',
    status: 'Halted',
    abbreviation: 'aap',
    slug: 'algorithmic-art-playground',
    gitUri: 'https://github.com/harshjayprakash/algorithmic-art-playground',
    available: true
}, {
    name: 'Crane Container Simulation',
    description: ' A simulation to calculate the time taken to arrange crates at different loading bays.',
    reference: 'UOW2300',
    category: 'CLI',
    technology: 'Pascal',
    timeframe: 'H1 2023',
    status: 'Maintenance',
    abbreviation: 'ccs',
    slug: 'crane-container-simulation',
    gitUri: 'https://github.com/harshjayprakash/crane-container-simulation',
    available: true
}, {
    name: 'Dog Walkers Finder',
    description: 'A tool for dog owners to find dog walkers within their local area.',
    reference: 'UOW2400',
    category: 'Web',
    technology: 'Angular w/ AWS',
    timeframe: 'H1 2024',
    status: 'Maintenance',
    abbreviation: 'dwf',
    slug: 'dog-walkers-finder',
    gitUri: 'https://github.com/harshjayprakash/dog-walkers-finder',
    available: true
}, {
    name: 'Experimental Blok',
    description: 'A traditional win32 application simulating a square moving around a user generated maze.',
    reference: 'HX2101',
    category: 'Desktop',
    technology: 'C w/ Win32 API',
    timeframe: 'H1 2021',
    status: 'Active',
    abbreviation: 'xbk',
    slug: 'experimental-blok',
    gitUri: 'https://github.com/harshjayprakash/experimental-blok',
    available: true
}, {
    name: 'Library Loans System',
    description: 'A system to keep track of library inventory and loaned Books and DVDs.',
    reference: 'UOW2301',
    category: 'Desktop',
    technology: 'Java w/ JavaFX + MySQL',
    timeframe: 'H1 2023',
    status: 'Maintenance',
    abbreviation: 'lls',
    slug: 'library-loans-system',
    gitUri: 'https://github.com/harshjayprakash/library-loans-system',
    available: true
}, {
    name: 'Noughts and Crosses',
    description: 'A text-based game of Tic-Tac-Toe against the computer.',
    reference: 'HX2201',
    category: 'CLI',
    technology: 'Pascal',
    timeframe: 'H1 2022',
    status: 'Halted',
    abbreviation: 'nac',
    slug: 'noughts-and-crosses',
    gitUri: 'https://github.com/harshjayprakash/noughts-and-crosses',
    available: false
}, {
    name: 'Personal Portfolio Website',
    description: 'A digital platform to showcase skills and projects in a central place.',
    reference: 'HX2150',
    category: 'Web',
    technology: 'Vue w/ TypeScript',
    timeframe: 'H2 2021',
    status: 'Active',
    abbreviation: 'ppw',
    slug: 'personal-portfolio-website',
    gitUri: 'https://github.com/harshjayprakash/harshjayprakash.github.io',
    available: true
}, {
    name: 'Trigonometric Helper',
    description: 'A tool to aid in the learning of Trigonometry at the A-Level standard.',
    reference: 'BPC2050',
    category: 'Desktop',
    technology: 'Visual Basic .NET w/ WinForms',
    timeframe: 'H2 2020',
    status: 'Halted',
    abbreviation: 'tmh',
    slug: 'trigonometric-helper',
    gitUri: 'https://github.com/harshjayprakash/trigonometric-helper',
    available: false
}, {
    name: 'Wrapping Paper Quotes Calculator',
    description: 'A proof of concept calculator application for a department who provide gift wrapping services based on present shapes.',
    reference: 'UOW2200',
    category: 'Desktop',
    technology: 'Python w/ Tkinter',
    timeframe: 'H1 2022',
    status: 'Maintenance',
    abbreviation: 'wpq',
    slug: 'wrapping-paper-quotes-calculator',
    gitUri: 'https://github.com/harshjayprakash/wrapping-paper-quotes-calculator',
    available: true
}];

const filterProjectsByAbbreviation = (abbrevs: string[]) => {
    return projects.filter(project => abbrevs.includes(project.abbreviation))
        .sort((
            a, b
        ) => abbrevs.indexOf(a.abbreviation) - abbrevs.indexOf(b.abbreviation));
}

const getProjects = () => {
    return { projects, filterProjectsByAbbreviation };
}

export default getProjects;
