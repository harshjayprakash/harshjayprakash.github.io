<script lang="ts">
import router from '@/router';
import { defineComponent, type PropType } from 'vue';
import { RouterLink, type RouteRecordRaw } from 'vue-router';

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
        const linkFilter = ['/home', '/about', '/alpha'];
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
    background-color: var(--clr-surface-object);
    padding: 1rem;
    flex-direction: column;
    box-shadow:  0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    border-radius: 0.25rem;
    z-index: 10;
    margin-block-end: 1.5rem;
}

.nav .nav__link {
    color: inherit;
}

.nav--desktop .nav__link {
    text-decoration: solid underline 0.2rem var(--clr-surface-object);
    text-underline-offset: 0.25rem;
}

.nav--mobile .nav__link {
    text-decoration: none;
    border-inline-start: 0.2rem solid var(--clr-surface-object);
    padding-inline: 1rem;
}

.nav--mobile .nav__link:hover {
    border-inline-start-color: var(--clr-on-surface-hover);
}

.nav--desktop .nav__link:hover {
    text-decoration-color: var(--clr-on-surface-hover);
}

.nav .nav__link--active {
    font-weight: 500;
}

.nav--desktop .nav__link--active {
    text-decoration-color: var(--clr-accent);
}

.nav--mobile .nav__link--active {
    border-inline-start-color: var(--clr-accent);
}

</style>
