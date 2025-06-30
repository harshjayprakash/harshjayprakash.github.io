<script setup lang="ts">
import ThePersona from '@/components/common/ThePersona.vue';
import TheCard from '@/components/common/TheCard.vue';
import { avatarData } from '@/data/profile/avatar';

const avatar = avatarData.uri;
</script>

<template>
    <article aria-label="About" class="about">
        <h1>About</h1>
        <ThePersona
            :avatar
            name="Harsh Jayprakash"
            status="Looking for experience/work." />
        <div role="group" class="about-info-cards">
            <TheCard appearance="filled" linkable="none">
                I am a computer science graduate from the University of Winchester, actively searching for a role.
            </TheCard>
            <TheCard appearance="filled" linkable="none">
                I enjoy the craft of programming - focusing on making intentional
                digital experiences. The art of programming is a way I connect with the
                digital world, drawn to the challenge and creativity. I want to create an
                impact, inspire and connect with others.
            </TheCard>
            <TheCard appearance="filled" linkable="none">
                Moreover, designing diagrams has always been my favourite way to present
                ideas. From selecting the right shapes and colours to adjusting font sizes
                and spacing, I love ensuring every detail harmonises,  maintaining a
                cohesive and unified visual language.
            </TheCard>
            <TheCard appearance="filled" linkable="none">
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
