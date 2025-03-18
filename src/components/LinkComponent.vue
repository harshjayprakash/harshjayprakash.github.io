<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';

const LinkComponent = defineComponent({
    name: 'LinkComponent',
    props: {
        variant: {
            type: String as PropType<'internal' | 'external'>,
            default: 'internal',
        },
        path: {
            type: String as PropType<String>,
            default: '#',
        }
    },
    setup(props) {
        return { props };
    }
});

export default LinkComponent;
</script>

<template>
    <a
        v-if="props.variant === 'external'"
        v-bind:href="props.path.toString()"
        class="link"
    >
        <slot></slot>
    </a>
    <RouterLink
        v-if="props.variant === 'internal'"
        v-bind:to="props.path.toString()"
        class="link"
    >
        <slot></slot>
    </RouterLink>
</template>

<style lang="css" scoped>
.link {
    text-decoration: none;
    color: inherit;
}

.link:hover {
    text-decoration: solid underline 0.1rem var(--clr-anchor-underline-hover);
}
</style>
