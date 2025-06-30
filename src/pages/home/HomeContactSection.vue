<script setup lang="ts">
import TheCard from '@/components/TheCard.vue';

</script>

<template>
    <section class="home-contact" aria-label="Home Contact Section">
        <TheCard linkable="none" appearance="filled" elevate class="contact-card">
            <h2>Looking to collaborate or say hello?</h2>
            <p>I'm currently open to new opportunities.</p>
        </TheCard>
    </section>
</template>

<style lang="css">
.home-contact .contact-card {
    border: 0.1rem solid var(--colour-bk-highlight);
}
</style>
