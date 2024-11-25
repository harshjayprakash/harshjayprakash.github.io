<template>
    <section class="contact">
        <h2 class="contact__title">Get in touch.</h2>
        <div class="contact-options">
            <article class="social-card" v-for="social in socials">
                <span class="social-card__service">{{ social.name }}</span>
                <span class="social-card__dash">&emsp;</span>
                <LinkComponent link-type="external" :to="social.uri.toString()">
                    {{ social.handle }} (&nearrow;)
                </LinkComponent>
            </article>
        </div>
    </section>
</template>

<script lang="ts">
import LinkComponent from '@/components/ui/LinkComponent.vue';
import { socialList } from '@/store/data/socialList';
import type { Social } from '@/store/interfaces/Social';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'HomeGetInTouchSection',
    components: { LinkComponent },
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
    display: flex;
    
}

.contact .social-card__dash {
    flex-grow: 1;
    text-align: center;
}
</style>