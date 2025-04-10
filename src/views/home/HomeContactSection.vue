<script lang="ts" setup>
import BadgeWidget from '@/components/BadgeWidget.vue';
import DividerWidget from '@/components/DividerWidget.vue';
import LinkWidget from '@/components/LinkWidget.vue';
import getSocials from '@/data/socials';

const { socials } = getSocials();
</script>

<template>
    <DividerWidget :margin="0" variant="horizontal" />
    <section aria-label="Contact" class="contact">
        <div
            aria-label="Call to Action, What I'm Looking For"
            class="cta-text"
            role="group"
        >
            <h2>
                Looking to collaborate?<br />or say hello?
                Get in touch.
            </h2>
            <BadgeWidget
                aria-label="Available, Currently Looking for Work."
                class="status"
                colour="primary"
                variant="tint"
            >
                <span aria-hidden="true" class="indicator"></span>
                <span>Currently looking for work</span>
            </BadgeWidget>
        </div>
        <ul aria-label="Social Links, and CV PDF" class="links">
            <li v-for="social in socials" :key="social.name" class="social-link-wrapper">
                <LinkWidget :path="social.uri" variant="external">
                    {{ social.name }} &mdash; {{ social.tag }}
                </LinkWidget>
                <DividerWidget variant="horizontal" />
            </li>
            <li class="social-link-wrapper">
                <LinkWidget path="/documents/harsh_cv.pdf" variant="external">
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
