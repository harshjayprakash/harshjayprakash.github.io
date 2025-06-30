<script setup lang="ts">
import TheLink from '@/components/common/TheLink.vue';

</script>

<template>
    <section class="home-bio" aria-label="Quick About">
        <h2>What I bring to the table.</h2>
        <div class="content">
            <p>
                I'm a recent graduate who's spent countless hours refining systems, helping
                others troubleshoot, and exploring the craft of programming &ndash; not just
                as a tool, but as a medium for clarity and expression.
            </p>
            <p>
                I care deeply about cohesive design language, thoughtful architecture, and
                building things that feel intention from the inside out.
            </p>
            <small>
                I enjoy the quiet details &mdash; the ones that make things feel intentional.
            </small>
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

.home-bio .content {
    max-width: 70ch;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}
</style>
