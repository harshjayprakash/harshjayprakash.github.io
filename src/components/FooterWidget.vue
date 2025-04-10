<script lang="ts" setup>
import DividerWidget from '@/components/DividerWidget.vue';
import LinkWidget from '@/components/LinkWidget.vue';
import getMetaData from '@/data/metadata';
import getFooterLinks from '@/data/footerLinks';

const {
    copyrightYear,
    semanticVersion,
    calendarVersion,
    buildDate
} = getMetaData();

const {footerLinks} = getFooterLinks();
</script>

<template>
    <footer class="footer">
        <section aria-label="Version and Copyright" class="version-copyright">
            <small>
                Version {{ semanticVersion }} &mdash; {{ calendarVersion }}, {{
                    buildDate
                }}
            </small>
            <small>
                Under Construction. This website is subject to change and may contain
                errors, failures and/or defects.
            </small>
            <small>
                Copyright &copy; {{ copyrightYear }} Harsh Jayprakash. Handcrafted with
                Vue.
            </small>
        </section>
        <DividerWidget variant="horizontal"/>
        <ul aria-label="Additional Links" class="links">
            <li
                v-for="link in footerLinks"
                :key="link.name"
                class="link-item-wrapper"
            >
                <LinkWidget :path="link.path" :variant="link.variant">
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
