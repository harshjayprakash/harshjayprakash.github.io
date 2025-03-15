<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';
import { RouterLink } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

import router from '@/router';

const NavComponent = defineComponent({
    name: 'NavComponent',
    components: { RouterLink },
    props: {
        variant: {
            type: String as PropType<'desktop' | 'mobile'>,
            default: 'desktop',
        },
    },
    emits: ['onLinkClick'],
    setup(props, { emit }) {
        const linkFilter = ['/home'];
        const links = router.getRoutes()
            .filter(link => linkFilter.includes(link.path))
            .sort((linkA, linkB) =>
                linkFilter.indexOf(linkA.path) - linkFilter.indexOf(linkB.path)
            );

        const onLinkClickEvent = () => {
            emit('onLinkClick');
        };

        return {
            navLinks: links as RouteRecordRaw[],
            mode: props.variant as String,
            onLinkClick: onLinkClickEvent,
        };
    }
});

export default NavComponent;
</script>

<template>
    <nav class="nav" :class="{
        'nav--desktop': mode === 'desktop',
        'nav--mobile' : mode === 'mobile'
    }">
        <RouterLink
            class="nav__link" v-for="(link, idx) in navLinks"
            @click="onLinkClick"
            active-class="nav__link--active" exact
            :key="idx" :to="link.path"
        >
            {{ link.name }}
        </RouterLink>
    </nav>
</template>

<style lang="css" scoped>
.nav {
    display: flex;
    gap: 1rem;
}

.nav--mobile {
    background-color: var(--clr-nav-bk);
    padding: 1rem;
    flex-direction: column;
    box-shadow:
        0 0.25rem 0.375rem -0.0625rem var(--clr-nav-shadow),
        0 0.125rem 0.25rem -0.125rem var(--clr-nav-shadow);
    border-radius: var(--bdr-default);
    z-index: 10;
    margin-block-end: 1.5rem;
    position: sticky;
    top: 5.2rem;
}

.nav .nav__link {
    color: inherit;
}

.nav--desktop .nav__link {
    text-decoration: solid underline 0.2rem var(--clr-nav-border);
}

.nav--desktop .nav__link:hover {
    text-decoration-color: var(--clr-nav-border-hover);
}

.nav--desktop .nav__link--active {
    text-decoration-color: var(--clr-nav-border-active);
}


.nav--mobile .nav__link {
    text-decoration: none;
    border-inline-start: 0.2rem solid var(--clr-nav-border);
    padding-inline: 1rem;
}

.nav--mobile .nav__link:hover {
    border-inline-start-color: var(--clr-nav-border-hover);
}

.nav--mobile .nav__link--active {
    border-inline-start-color: var(--clr-nav-border-active);
}

</style>
