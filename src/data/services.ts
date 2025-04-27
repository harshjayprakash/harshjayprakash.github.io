import type { Service } from "@/types/Service";

const services: Service[] = [{
    name: 'Front-End Web Development',
    description: 'Building modern responsive website using front-end technologies to create seamless user experiences.',
    technologies: ['Angular', 'Vue', 'HTML', 'CSS', 'TypeScript']
}, {
    name: 'Desktop Application Development',
    description: 'Building robust, scalable applications tailored to the given requirements.',
    technologies: ['C', 'Python', 'Java', 'Visual Basic .NET', 'Pascal']
}, {
    name: 'UI/UX',
    description: 'Designing user interfaces and diagrams, focusing on the user experience.',
    technologies: ['Analogue Pen+Paper']
}, {
    name: 'Tools',
    description: 'The tools used within my workflow.',
    technologies: [
        'Windows', 'GNU+Linux', 'VSCode', 'Visual Studio', 'JetBrains IntelliJ', 'Git'
    ]
}];

const getServices = () => {
    return { services };
}

export default getServices;
