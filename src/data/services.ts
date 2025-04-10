import type {OfferedServices} from "@/types/OfferedService";

const services: OfferedServices[] = [{
    title: 'Front-End Web Development',
    details: 'Crafting responsive websites using modern front-end technologies to create seamless user experiences.',
    technologies: ['HTML', 'CSS', 'TypeScript', 'Angular', 'Vue']
}, {
    title: 'Traditional Application Development',
    details: 'Building robust, scalable applications tailored to the given requirements.',
    technologies: ['C', 'Python', 'Java', 'Visual Basic .NET', 'Pascal']
}, {
    title: 'UI/UX',
    details: 'Designing interfaces that balance aesthetics with functionality',
    technologies: ['Figma', 'Pen+Paper']
}];

const getServices = () => {
    return { services };
}

export default getServices;
