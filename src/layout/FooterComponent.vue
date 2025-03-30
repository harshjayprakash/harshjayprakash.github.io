<script lang="ts">
import { defineComponent } from 'vue';

import DividerComponent from '@/components/data/DividerComponent.vue';
import LinkComponent from '@/components/navigation/LinkComponent.vue';

import getMetaData from '@/store/metaData';
import getFooterLinks from '@/store/footerLinks';

const FooterComponent = defineComponent({
    name: 'FooterComponent',
    components: {
        DividerComponent,
        LinkComponent,
    },
    setup() {
        const { copyrightYear, versionSemver, versionCalver, buildDate } = getMetaData();
        const { footerLinks } = getFooterLinks();
        return { copyrightYear, versionSemver, versionCalver, buildDate, footerLinks };
    }
});

export default FooterComponent;
</script>

<template>
    <footer class="footer">
        <section class="version-copyright" aria-label="Version and Copyright">
            <small>
                Version {{ versionSemver }} --{{ versionCalver }}, {{ buildDate }}. Under
                Construction. This website is subject to change and may contains errors,
                failures and/or defects.
            </small>
            <small>
                Copyright &copy; {{ copyrightYear }} Harsh Jayprakash. Handcrafted with
                Vue.
            </small>
        </section>
        <DividerComponent />
        <ul class="links" aria-label="Additional Links">
            <li class="link-item-wrapper">
                <LinkComponent
                    v-for="(link, idx) in footerLinks"
                    v-bind:key="idx"
                    v-bind:variant="link.variant"
                    v-bind:path="link.path"
                >
                    {{ link.name }}
                </LinkComponent>
            </li>
        </ul>
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
    padding: 0;
    font-size: small;
}

.footer .link-item-wrapper {
    list-style: none;
}

.footer .version-copyright {
    display: flex;
    flex-direction: column;
}
</style>
