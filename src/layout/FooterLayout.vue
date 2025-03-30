<script setup lang="ts">
import DividerWidget from '@/components/utils/DividerWidget.vue';
import LinkWidget from '@/components/navigation/LinkWidget.vue';
import getFooterLinks from '@/store/footerLinks';
import getMetaData from '@/store/metaData';

const { copyrightYear, versionSemver, versionCalver, buildDate } = getMetaData();
const { footerLinks } = getFooterLinks();
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
        <DividerWidget />
        <ul class="links" aria-label="Additional Links">
            <li
                class="link-item-wrapper"
                v-for="link in footerLinks"
                :key="link.name.toString()"
            >
                <LinkWidget
                    :variant="link.variant"
                    :path="link.path.toString()"
                >
                    {{ link.name }}
                </LinkWidget>
            </li>
        </ul>
    </footer>
</template>

<style lang="css" scoped>
.footer {
    padding-block: 1rem;
}

.footer .version-copyright {
    display: flex;
    flex-direction: column;
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
</style>
