<script lang="ts" setup>
import TheAccordion from '@/components/TheAccordion.vue';
import ThePersona from '@/components/ThePersona.vue';

interface IService {
    service: string,
    description: string,
    technologies: string[]
}

const services: IService[] = [{
    service: 'Front-End Web Development',
    description: 'Building modern responsive website using front-end technologies to create seamless user experiences.',
    technologies: ['Angular', 'Vue', 'HTML', 'CSS', 'TypeScript']
}, {
    service: 'Desktop Application Development',
    description: 'Building robust, scalable applications tailored to the given requirements.',
    technologies: ['C', 'Python', 'Java', 'Visual Basic .NET', 'Pascal']
}, {
    service: 'Tools',
    description: 'The tools used within my workflow.',
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
                I am a <span class="emphasis">computer science graduate</span> from the
                University of Winchester, who is actively
                <span class="emphasis">searching for a role.</span>
            </p>
            <p class="faded-paragraph">
                I enjoy the craft of programming - focusing on making digital
                experiences that are human-centred, balancing both aesthetics and
                functionality. The art of programming is a way I connect with the digital
                world, also drawn to the challenge and creativity. I want to create an
                impact, inspire and connect with others.
            </p>
            <p class="faded-paragraph">
                I also have an appreciation for visual clarity and cohesion, espacially
                when it comes to making diagrams. Whether it's the shapes, colour,
                typography, I enjoy creating designs with a unified visual language.
            </p>
        </div>
        <div aria-label="Skills List" class="skills" role="group">
            <div v-for="svc in services" :key="svc.service" class="skill-card" role="group">
                <TheAccordion name="skills" open>
                    <template #heading>
                        <span>
                            {{ svc.service }}
                        </span>
                    </template>
                    <template #content>
                        <p>{{ svc.description }}</p>
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
                    </template>
                </TheAccordion>
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

.home .bio .about .faded-paragraph {
    color: var(--colour-text-faded);
}

.home .bio .about .emphasis {
    color: light-dark(var(--colour-800H), var(--colour-200H));
}

.home .bio .skills {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.home .bio .skills .skill-card  {
    background-color: var(--colour-bk-secondary);
    display: flex;
    flex-direction: column;
    padding: 1rem;
    height: fit-content;

}

.home .bio .skills .skill-card .technologies {
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    column-gap: 0.25rem;
    color: var(--colour-text-faded);
    font-size: smaller;
}

.service-accordian-header {
    cursor: pointer;
}

.service-accordian-header {
    list-style-type: '-> ';
}

details[open] > .service-accordian-header {
    list-style-type: '↓ ';
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
