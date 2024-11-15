<template>
    <section class="contact">
        <h2 class="contact__title">Get in touch.</h2>
        <div class="contact-options">
            <article class="social-card" v-for="social in socials">
                <span class="social-card__service">{{ social.name }}</span>
                &emsp; &mdash; &emsp;
                <a :href="social.uri.toString()" class="social-card__handle link-label">
                    {{ social.handle }} (&nearrow;)
                </a>
            </article>
        </div>
    </section>
</template>

<script lang="ts">
import { socialList } from '@/store/data/socialList';
import type { Social } from '@/store/interfaces/Social';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'HomeGetInTouchSection',
    data() {
        const socials: Social[] = socialList;
        return { socials };
    }
});
</script>

<style lang="css" scoped>
.contact {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.contact .contact__title {
    text-transform: uppercase;
    text-align: center;
}

.contact .contact-options {
    display: grid;
    gap: 1rem;
}

.contact .social-card {
    background-color: var(--clr-surface-container);
    padding: 1rem;
}
</style>