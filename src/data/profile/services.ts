import type { ProvideService } from "@/types/profile/ProvideService"

const services: ProvideService[] = [{
    name: 'Front End Web Development',
    description: 'Designing modular, accessible and simplistic web applications.',
    icon: 'code',
    skills: ['Angular', 'Vue', 'HTML', 'CSS', 'TypeScript']
}, {
    name: 'Desktop Application Development',
    description: 'Building functional and reliable desktop applications.',
    icon: 'desktop_windows',
    skills: ['C', 'Python', 'Java', 'Visual Basic .NET', 'Pascal']
}, {
    name: 'User Interface and User Experience',
    description: 'Crafting simplistic user interfaces prioritising functionality and UX.',
    icon: 'dashboard',
    skills: ['Analogue Pen+Paper']
}, {
    name: 'Workflow Tools',
    description: '',
    icon: 'square_foot',
    skills: ['Windows', 'Linux', 'VSCode', 'Visual Studio', 'Git', 'Affinity Designer']
}]

export const serviceData = {
    all: services,
}
