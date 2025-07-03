<script setup lang="ts">
import TheLink from '@/components/TheLink.vue';

const skills: string[] = [
    'Windows Workflow',
    'TypeScript, HTML, CSS',
    'C, Java, Python',
    'User Interface and Experience'
];

</script>

<template>
    <section class="home-bio" aria-label="Quick About">
        <h2>A Bit About Me.</h2>
        <div role="region" class="content">
            <p>
                I'm a computer science graduate (from last year) who's spent countless
                hours exploring the craft of programming, helping others and
                troubleshooting.
            </p>
            <p>
                I've worked across both web and desktop environments &ndash; but what
                matters to me is understanding how thing work. The curiosity helps me
                build better products that are not just functional, but intentional.
            </p>
            <h3 class="skill-title">Some Skills &mdash;</h3>
            <ul class="skill-list">
                <li v-for="skill in skills" :key="skill">
                    {{ skill }}
                </li>
            </ul>
        </div>
        <TheLink linkable="internal" to="/about">
            Read more ->
        </TheLink>
    </section>
</template>

<style lang="css">
.home-bio {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.home-bio .highlight {
    color: var(--colour-text-highlight);
}

.home-bio .content {
    max-width: 70ch;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.home-bio .skill-title {
    margin-block-start: 1rem;
}
</style>
