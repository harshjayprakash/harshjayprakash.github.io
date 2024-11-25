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
    font-weight: 500;
    color: var(--clr-accent);
    text-decoration: underline solid 2px;
}

.hx-link:hover {
    color: var(--clr-accent-variant);
}
</style>