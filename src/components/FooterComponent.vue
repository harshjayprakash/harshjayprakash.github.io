<script lang="ts">
import { defineComponent } from 'vue';

import DividerComponent from '@/components/DividerComponent.vue';
import LinkComponent from '@/components/LinkComponent.vue';

interface IFooterLinks {
    variant: 'internal' | 'external';
    path: String;
    name: String;
};

const FooterComponent = defineComponent({
    name: 'FooterComponent',
    components: {
        DividerComponent,
        LinkComponent,
    },
    setup() {
        const copyrightYear = 2025;
        const versionNumber = '25H1.4';
        const buildDate = '15.03.2025';
        const footerLinks: IFooterLinks[] = [
            {
                variant: 'external', name: 'Source',
                path: 'https://github.com/harshjayprakash/harshjayprakash.github.io',
            },
            { variant: 'internal', path: '/uses', name: 'Uses' },
            { variant: 'internal', path: '/privacy', name: 'Privacy' },
        ];

        return { copyrightYear, versionNumber, buildDate, footerLinks };
    }
});

export default FooterComponent;
</script>

<template>
    <footer class="footer">
        <br />
        <small>Ver. {{ versionNumber }}, {{ buildDate }}. Under Construction.</small>
        <br />
        <small>Copyright &copy; {{ copyrightYear }} Harsh Jayprakash.</small>
        <small>Handcrafted with Vue.</small>
        <DividerComponent />
        <div class="links">
            <LinkComponent
                v-for="(link, idx) in footerLinks"
                v-bind:key="idx"
                v-bind:variant="link.variant"
                v-bind:path="link.path"
            >
                {{ link.name }}
            </LinkComponent>
        </div>
    </footer>
</template>

<style lang="css" scoped>
.footer {
    padding-block: 1rem;
}

.footer .links {
    display: flex;
    margin-block-start: 0.5rem;
    gap: 1rem;
}
</style>
