<script setup lang="ts">
import { computed } from 'vue';

import router from '@/router';

const props = defineProps<{
    variant?: 'desktop' | 'mobile'
}>();

const safeVariant = computed(() => props.variant ?? 'desktop');

const emits = defineEmits<{
    onLinkClick: []
}>();

const navLinkFilter = ['/home'];
const navLinks = router.getRoutes()
    .filter(link => navLinkFilter.includes(link.path))
    .sort((linkA, linkB) =>
        navLinkFilter.indexOf(linkA.path) - navLinkFilter.indexOf(linkB.path)
    );

const isActivePage = (path: string) => {
    return (router.currentRoute.value.fullPath === path.toString()) ?
        'page' : '';
}
</script>

<template>
    <nav
        class="nav" :class="{
            'nav--desktop': safeVariant === 'desktop',
            'nav--mobile' : safeVariant === 'mobile'
        }"
        aria-label="Site Navigation"
    >
        <RouterLink
            v-for="link in navLinks"
            class="nav-link"
            active-class="nav-link--active" exact
            @click="emits('onLinkClick')"
            :key="link.path"
            :to="link.path"
            :aria-current="isActivePage(link.path)"
        >
            {{ link.name }}
        </RouterLink>
    </nav>
</template>

<style lang="css" scoped>
.nav {
    --layout-nav-border-hidden: var(--colour-border-hidden-secondary);
    --layout-nav-border-hover: var(--colour-border-hover);
    --layout-nav-border-active: var(--colour-border-highlight);
    --layout-nav-border: var(--colour-border-hidden-secondary);
    --layout-nav-bk: var(--colour-surface-secondary);
    --layout-nav-shadow: var(--colour-shadow-primary);

    display: flex;
    background-color: var(--layout-nav-bk);
    gap: 1rem;
}

.nav .nav-link {
    color: inherit;
    text-decoration: none;
}

.nav .nav-link {
    --layout-nav-border: var(--layout-nav-border-hidden);
}

.nav .nav-link:hover {
    --layout-nav-border: var(--layout-nav-border-hover);
}

.nav .nav-link--active {
    --layout-nav-border: var(--layout-nav-border-active);
}

.nav--desktop .nav-link {
    border-block-end: var(--border-thickness-state) solid var(--layout-nav-border);
}

.nav--mobile {
    padding: 1rem;
    flex-direction: column;
    box-shadow:
        0 0.25rem 0.375rem -0.0625rem var(--layout-nav-shadow),
        0 0.125rem 0.25rem -0.125rem var(--layout-nav-shadow);
    border-radius: var(--border-radius-default);
    z-index: 10;
    margin-block-end: 1.5rem;
    position: sticky;
    top: 5.2rem;
}

.nav--mobile .nav-link {
    padding-inline: 1rem;
    border-inline-start: var(--border-thickness-state) solid var(--layout-nav-border);
}

</style>
