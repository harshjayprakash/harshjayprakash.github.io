<script lang="ts" setup>
import TheLink from '@/components/TheLink.vue';

const links: { name: string, description: string, to: string }[] = [{
    name: 'E-mail (mailto link)',
    description: 'Get in touch with me',
    to: 'mailto:harshjayprakash@outlook.com'
}, {
    name: 'LinkedIn',
    description: 'Connect with me',
    to: 'https://www.linkedin.com/in/harshjayprakash7/'
}, {
    name: 'GitHub',
    description: 'See my code',
    to: 'https://github.com/harshjayprakash'
}, {
    name: 'CV',
    description: 'View or download my cv',
    to: '/documents/harsh_cv.pdf'
}];
</script>

<template>
    <section aria-label="Contact" class="contact">
        <div role="group" class="message">
            <h2>Looking to collaborate<br />or say hello?</h2>
            <p>
                Whether you're interested in collaborating, need help with programming or
                a bit of design, or just want to connect, feel free to reach out!
            </p>
        </div>
        <div role="group" class="links">
            <div class="link-wrapper" v-for="link in links" :key="link.name">
                <TheLink variant="external" :to="link.to" exact new-window>
                    <div class="content-wrapper" role="group">
                        <span>{{ link.name }}</span>
                    </div>
                </TheLink>
                <small class="faded-text">{{ link.description }}</small>
            </div>
        </div>
    </section>
</template>

<style lang="css" scoped>
.contact {
    position: relative;
    display: grid;
    gap: 2rem;
    grid-template-columns: auto;
    padding: 1rem;
    background-color: var(--colour-bk-secondary);
    box-shadow: var(--shadow-md);
    border: 0.15rem solid var(--colour-outline-highlight-lighter);
}

.message {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    color: var(--colour-text-faded-less);
}

.links {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.links .content-wrapper {
    display: flex;
    flex-direction: column;
}

.link-wrapper {
    display: flex;
    flex-direction: column;
    gap: 0.15rem;
}

.faded-text {
    color: var(--colour-text-faded-less);
}

@media (width > 40rem) {
    .contact {
        grid-template-columns: 1fr 1fr;
    }
}
</style>
