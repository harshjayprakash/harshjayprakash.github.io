import type { Service } from "@/types/Service";

const services: Service[] = [{
    name: 'Front-End Web Development',
    description: 'Building modern responsive websites with front-end technologies to deliver seamless and intuitive user experiences.',
    technologies: ['Angular', 'Vue', 'HTML', 'CSS', 'TypeScript']
}, {
    name: 'Desktop Application Development',
    description: 'Developing robust scalable desktop application tailored to meet requirements, ensuring reliability and user satisfaction.',
    technologies: ['C', 'Python', 'Java', 'Visual Basic .NET', 'Pascal']
}, {
    name: 'UI/UX',
    description: 'Designing user interfaces that prioritising functionality and aesthetics, with focus on user experience.',
    technologies: ['Analogue Pen+Paper']
}, {
    name: 'Workflow Tools',
    description: '',
    technologies: [
        'Windows', 'GNU+Linux', 'VSCode', 'Visual Studio', 'JetBrains IntelliJ', 'Git',
        'Affinity Designer'
    ]
}];

const getServices = () => {
    return { services };
}

export default getServices;
