<script lang="ts" setup>
import TheAccordion from '@/components/TheAccordion.vue';
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
                Additionally, designing diagrams has always been my favourite way to
                present ideas. From selecting the right shapes and colours to adjusting
                font sizes and spacing, I love ensuring every detail harmonises,
                consistently maintaining a cohesive and unified visual language.
            </p>
        </div>
        <div aria-label="Skills List" class="skills" role="group">
            <div v-for="svc in services" :key="svc.name" class="skill-card" role="group">
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
            </div>
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
    color: light-dark(var(--colour-800H), var(--colour-200H));
}

.skills {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.skill-card  {
    background-color: var(--colour-bk-secondary);
    display: flex;
    flex-direction: column;
    padding: 1rem;
    height: fit-content;

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
    .bio {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, auto);
    }

    .bio :first-of-type {
        grid-column: 1 / 1;
    }
}
</style>
