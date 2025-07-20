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
        <div class="content" role="region">
            <p class="education-job-text">
                I graduated with
                <span class="highlight">First Class Honours in Computer Science</span>
                from the
                University of Winchester in 2024, and am
                <span class="highlight">currently seeking a role</span>
                to gain industry experience.
            </p>
            <p class="muted-text">
                I have spent countless hours exploring the craft of programming, helping
                others, and troubleshooting. I've worked in both desktop and web
                development, but what matters to me is understanding how things work. This
                curiosity helps build better products that are not only functional but
                also intentional
            </p>
            <ul class="skill-list muted-text">
                <li v-for="skill in skills" :key="skill">
                    {{ skill }}
                </li>
            </ul>
        </div>
        <TheLink class="muted-text" linkable="internal" to="/about">
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

.home-bio .muted-text {
    color: var(--colour-text-faded);
}

.home-bio .highlight {
    color: var(--colour-text-highlight);
}

.home-bio .content {
    max-width: 70ch;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.home-bio .skill-title {
    margin-block-start: 1rem;
}
</style>
