<script setup lang="ts">
import BadgeWidget from '@/components/BadgeWidget.vue';
import DividerWidget from '@/components/DividerWidget.vue';
import LinkWidget from '@/components/LinkWidget.vue';
import getSocials from '@/data/socials';

const { socials } = getSocials();
</script>

<template>
    <DividerWidget variant="horizontal" :margin="0" />
    <section class="contact" aria-label="Contact">
        <div
            role="group"
            class="cta-text"
            aria-label="Call to Action, What I'm Looking For"
        >
            <h2>
                Looking to collaborate?<br/>or say hello?
                Get in touch.
            </h2>
            <BadgeWidget
                variant="tint"
                colour="primary"
                aria-label="Available, Currently Looking for Work."
                class="status"
            >
                <span class="indicator" aria-hidden="true"></span>
                <span>Currently looking for work</span>
            </BadgeWidget>
        </div>
        <ul class="links" aria-label="Social Links, and CV PDF">
            <li v-for="social in socials" :key="social.name" class="social-link-wrapper">
                <LinkWidget variant="external" :path="social.uri">
                    {{ social.name }} &mdash; {{ social.tag }}
                </LinkWidget>
                <DividerWidget variant="horizontal" />
            </li>
            <li class="social-link-wrapper">
                <LinkWidget variant="internal" path="/documents/harsh_cv.pdf">
                    View CV (PDF)
                </LinkWidget>
                <DividerWidget variant="horizontal" />
            </li>
        </ul>
    </section>
</template>

<style lang="css" scoped>
.contact {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    margin-block-end: 5rem;
}

.links {
    list-style: none;
    padding: 0;
}

.cta-text {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.status {
    display: flex;
    place-items: center;
    gap: 0.5rem;
    margin-block-end: 3rem;
}

.indicator {
    height: 0.5rem;
    aspect-ratio: 1;
    background-color: oklch(72.3% 0.219 149.579);
    border-radius: 50%;
    filter: blur(2px);
}

@media screen and (min-width: 768px) {
    .contact {
        grid-template-columns: repeat(2, 1fr);
    }
}
</style>
