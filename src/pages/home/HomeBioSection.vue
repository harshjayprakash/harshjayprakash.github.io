<script lang="ts" setup>
import TheAccordion from '@/components/TheAccordion.vue';
import TheCard from '@/components/TheCard.vue';
import ThePersona from '@/components/ThePersona.vue';
import getAvatar from '@/data/avatar';
import getServices from '@/data/services';

const { avatar } = getAvatar();
const { services } = getServices();

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
                University of Winchester, actively
                <span class="emphasis">searching for a role.</span>
            </p>
            <p class="faded-paragraph">
                I enjoy the craft of programming - focusing on making human-centred
                digital experiences, balancing both aesthetics and functionality. The art
                of programming is a way I connect with the digital world, drawn to the
                challenge and creativity. I want to create an impact, inspire and connect
                with others.
            </p>
            <p class="faded-paragraph">
                Moreover, designing diagrams has always been my favourite way to present
                ideas. From selecting the right shapes and colours to adjusting font sizes
                and spacing, I love ensuring every detail harmonises,  maintaining a
                cohesive and unified visual language.
            </p>
            <p class="faded-paragraph">
                I have spent countless hours helping others, whether it is guiding them
                through programming, troubleshooting the operating system, or a bit of
                mathematics. Sharing knowledge and working collaboratively has always been
                a rewarding part of my journey.
            </p>
        </div>
        <div aria-label="Skills List" class="skills" role="group">
            <TheCard link="no-link" v-for="svc in services" :key="svc.name">
                <TheAccordion name="skills" open>
                    <template #heading>
                        <span>
                            {{ svc.name }}
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
            </TheCard>
        </div>
    </section>
</template>

<style lang="css" scoped>
.bio {
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto;
    gap: 2rem;
}

.about {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.about .faded-paragraph {
    color: var(--colour-text-faded);
}

.about .emphasis {
    color: var(--colour-text-highlight);
}

.skills {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.technologies {
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    column-gap: 0.25rem;
    color: var(--colour-text-faded);
    font-size: smaller;
}

@media (width > 40rem) {
    .bio {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, auto);
    }

    .bio :first-of-type {
        grid-column: 1 / 1;
    }
}
</style>
