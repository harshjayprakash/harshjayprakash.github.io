<template>
    <RouterLink v-if="linkType === 'internal'" 
        :to="routeToPath.toString()"
        class="hx-link"
    >
        <slot></slot>
    </RouterLink>
    <a v-if="linkType === 'external'" 
        :href="routeToPath.toString()"
        class="hx-link"
    >
        <slot></slot>
    </a>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';

type LinkType = 'internal' | 'external';

export default defineComponent({
    name: 'LinkComponents',
    props: {
        linkType: {
            type: String as PropType<LinkType>,
            required: true,
        },
        to: {
            type: String as PropType<String>,
            required: true,
        },
    },
    setup(props) {
        const routeToPath = props.to;
        const linkType = props.linkType;
        return { routeToPath, linkType };
    }
});
</script>

<style lang="css" scoped>
.hx-link {
    text-decoration: underline solid 2px var(--clr-accent);
    color: inherit;
}

.hx-link:hover {
    text-decoration-color: var(--clr-accent-variant);
}
</style>