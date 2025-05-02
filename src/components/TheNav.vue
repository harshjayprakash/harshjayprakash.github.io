<script lang="ts" setup>
import { useRouter } from 'vue-router';

const { variant } = defineProps<{
    variant: 'desktop' | 'mobile'
}>();

const emits = defineEmits<{
    onLinkClick: []
}>();

const onLinkClick = () => emits('onLinkClick');

const { currentRoute, getRoutes } = useRouter();

const _routeFilter = ['/home'];
const routes = getRoutes()
    .filter(route => _routeFilter.includes(route.path))
    .sort((a, b) => _routeFilter.indexOf(a.path) - _routeFilter.indexOf(b.path));

const ariaCurrent = (path: string) => {
    return (currentRoute.value.fullPath === path) ? 'page' : 'false';
}
</script>

<template>
    <nav class="nav" :data-variant="variant">
        <RouterLink
            v-for="route in routes" :key="route.path"
            :to="route.path" exact
            :aria-current="ariaCurrent(route.path)"
            @click="onLinkClick"
            class="nav-link"
        >
            {{ route.name }}
        </RouterLink>
    </nav>
</template>

<style lang="css" scoped>
.nav {
    display: flex;
    gap: 1rem;
}

.nav[data-variant="mobile"] {
    background-color: var(--colour-bk-secondary);
    padding: 1rem;
    border: 0.1rem solid var(--colour-outline-faded);
    box-shadow: var(--shadow-md);
    z-index: 10;
    position: sticky;
    top: 5.2rem;
    flex-direction: column;
}

.nav-link {
    color: inherit;
    text-decoration: none;
}


.nav[data-variant="desktop"] .nav-link {
    border-block-end: 0.2rem solid transparent;
}

.nav[data-variant="mobile"] .nav-link {
    padding-inline: 1rem;
    border-inline-start: 0.2rem solid transparent;
}

.nav[data-variant="mobile"] .nav-link:hover {
    border-inline-start: 0.2rem solid var(--colour-outline-faded);
}

.nav[data-variant="mobile"] .nav-link[aria-current="page"]  {
    border-inline-start: 0.2rem solid var(--colour-outline-highlight-lighter);
}

.nav[data-variant="desktop"] .nav-link:hover {
    border-block-end: 0.2rem solid var(--colour-outline-faded);
}

.nav[data-variant="desktop"] .nav-link[aria-current="page"] {
    border-block-end: 0.2rem solid var(--colour-outline-highlight-lighter);
}

</style>
