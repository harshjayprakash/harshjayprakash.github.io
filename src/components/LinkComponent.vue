<script lang="ts">
import { defineComponent, type PropType } from 'vue';

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
        return {
            within: props.variant as String,
            link: props.path as String,
        };
    }
});

export default LinkComponent;
</script>

<template>
    <a class="link" v-if="within === 'external'" :href="link.toString()">
        <slot></slot>
    </a>
    <RouterLink class="link" v-if="within === 'internal'" :to="link.toString()">
        <slot></slot>
    </RouterLink>
</template>

<style lang="css" scoped>
.link {
    text-decoration: none;
    color: inherit;
}

.link:hover {
    text-decoration: solid underline 0.1rem black;
}
</style>
