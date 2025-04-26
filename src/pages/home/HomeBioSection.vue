<script lang="ts" setup>
import ThePersona from '@/components/ThePersona.vue';

interface IService {
    service: string,
    description: string,
    technologies: string[]
}

const services: IService[] = [{
    service: 'Front-End Web Development',
    description: 'Modern responsive website using front-end technology to seamless user experiences',
    technologies: ['Angular', 'Vue', 'HTML', 'CSS', 'TypeScript']
}, {
    service: 'Desktop Application Development',
    description: 'Building robust, scalable applications tailored to the given requirements.',
    technologies: ['C', 'Python', 'Java', 'Visual Basic .NET', 'Pascal']
}, {
    service: 'Tools',
    description: 'A worflow',
    technologies: [
        'Windows', 'GNU+Linux', 'VSCode', 'Visual Studio', 'JetBrains IntelliJ', 'Git'
    ]
}];

const avatar = 'https://avatars.githubusercontent.com/u/58461297?v=4';
</script>

<template>
    <section aria-label="Quick Biography" class="bio">
        <h2>A brief intro.</h2>
        <div aria-label="Short About Me" class="about" role="group">
            <ThePersona
                :avatar
                name="Harsh Jayprakash"
                status="Looking for work."
            />
            <p>
                I am a computer science graduate from the University of Winchester, who is
                currently looking for role.
            </p>
            <p>
                I enjoy the craft of programming, having a focus on crafting digital
                experiences that are human-centred, balancing aesthetics and
                functionality. I want to make an impact, inspire and connect with people
                in the industry.
            </p>
            <p>
                Outside of the craft.
            </p>
        </div>
        <div aria-label="Skills List" class="skills" role="group">
            <div v-for="svc in services" :key="svc.service" class="skill-card" role="group">
                <h3>{{ svc.service }}</h3>
                <ul class="technologies">
                    <li v-for="(tech, idx) in svc.technologies" :key="tech">
                        <span>
                            {{ tech }}
                        </span>
                        <span v-if="idx != svc.technologies.length-1">
                            &SmallCircle;
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<style lang="css" scoped>
.home .bio {
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto;
    gap: 2rem;
}

.home .bio .about {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.home .bio .about .image {
    height: 3rem;
    width: 3rem;
    border-radius: 50%;
}

.home .bio .skills {
    display: grid;
    gap: 1rem;
}

.home .bio .skills .skill-card  {
    display: flex;
    flex-direction: column;
    background-color: var(--colour-bk-secondary);
    padding: 1rem;
    border-radius: 0.2rem;
}

.home .bio .skills .skill-card .technologies {
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    column-gap: 0.3rem;
    color: var(--colour-text-faded);
}

@media (width > 40rem) {
    .home .bio {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, auto);
    }

    .home .bio :first-of-type {
        grid-column: 1 / 1;
    }
}
</style>
