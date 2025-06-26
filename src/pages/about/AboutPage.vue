<script setup lang="ts">
import getAvatar from '@/data/avatar';
import AboutBioSection from './AboutBioSection.vue';
import ThePersona from '@/components/ThePersona.vue';
import TheCard from '@/components/TheCard.vue';

const { avatar } = getAvatar();
</script>

<template>
    <article aria-label="About" class="about">
        <h1>About</h1>
        <ThePersona
            :avatar
            name="Harsh Jayprakash"
            status="Looking for experience/work." />
        <div role="group" class="about-info-cards">
            <TheCard link="no-link">
                I am a computer science graduate from the University of Winchester, actively searching for a role.
            </TheCard>
            <TheCard link="no-link">
                I enjoy the craft of programming - focusing on making intentional
                digital experiences. The art of programming is a way I connect with the
                digital world, drawn to the challenge and creativity. I want to create an
                impact, inspire and connect with others.
            </TheCard>
            <TheCard link="no-link">
                Moreover, designing diagrams has always been my favourite way to present
                ideas. From selecting the right shapes and colours to adjusting font sizes
                and spacing, I love ensuring every detail harmonises,  maintaining a
                cohesive and unified visual language.
            </TheCard>
            <TheCard link="no-link">
                I have spent countless hours helping others, whether it is guiding them
                through programming, troubleshooting the operating system, or a bit of
                mathematics. Sharing knowledge and working collaboratively has always been
                a rewarding part of my journey.
            </TheCard>
        </div>
    </article>
</template>

<style lang="css">
.about {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.about .about-info-cards {
    display: grid;
    gap: 1rem;
}

@media (min-width: 768px) {
    .about .about-info-cards {
        grid-template-columns: repeat(3, 1fr);
    }
}
</style>
