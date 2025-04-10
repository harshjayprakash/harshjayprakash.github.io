import type {OfferedServices} from "@/types/OfferedService";

const services: OfferedServices[] = [{
    title: 'Front-End Web Development',
    details: 'Crafting digital spaces that are simplistic yet functional.',
    technologies: ['HTML', 'CSS', 'TypeScript', 'Angular', 'Vue']
}, {
    title: 'Traditional Application Development',
    details: 'Building robust and dependable software based on requirements.',
    technologies: ['C', 'Python', 'Java', 'Visual Basic .NET', 'Pascal']
}, {
    title: 'UI/UX',
    details: 'Crafting human-first user experiences that make sense.',
    technologies: ['Figma', 'Pen+Paper']
}];

const getServices = () => {
    return { services };
}

export default getServices;
