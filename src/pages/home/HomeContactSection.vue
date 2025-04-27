<script lang="ts" setup>
import TheLink from '@/components/TheLink.vue';

const links: { name: string, tag: string, to: string }[] = [{
    name: 'Email Me',
    tag: 'harshjayprakash[at]outlook.com',
    to: 'mailto:harshjayprakash@outlook.com'
}, {
    name: 'Connect on LinkedIn',
    tag: 'harshjayprakash7',
    to: 'https://www.linkedin.com/in/harshjayprakash7/'
}, {
    name: 'See my code on GitHub',
    tag: 'harshjayprakash',
    to: 'https://github.com/harshjayprakash'
}, {
    name: 'CV',
    tag: '(PDF)',
    to: '/documents/harsh_cv.pdf'
}];
</script>

<template>
    <section aria-label="Contact" class="contact">
        <h2>Looking to collaborate<br/> or say hello?</h2>
        <div class="links" role="group">
            <TheLink
                v-for="link in links"
                :key="link.tag"
                variant="external" exact new-window
                :to="link.to"
            >
                <span class="content-wrapper">
                    <span>{{ link.name }}</span>
                    <span class="spacer"></span>
                    <!-- <span>{{ link.tag }}</span> -->
                </span>
            </TheLink>
        </div>
    </section>
</template>

<style lang="css" scoped>
.contact {
    display: grid;
    gap: 1rem;
    grid-template-columns: auto;
    padding-block: 5rem;
}

.links {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.links .content-wrapper {
    display: flex;
}

.spacer {
    flex-grow: 1;
}

@media (width > 40rem) {
    .contact {
        grid-template-columns: repeat(2, 1fr);
    }
}

</style>
