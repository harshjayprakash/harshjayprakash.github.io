<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import { RouterLink } from 'vue-router';

const CardComponent = defineComponent({
    name: 'CardComponent',
    components: { RouterLink },
    props: {
        variant: {
            type: String as PropType<'standard' | 'clickable'>,
            default: 'standard',
        },
        path: {
            type: String as PropType<String>,
            default: '#',
        },
        pathType: {
            type: String as PropType<'internal' | 'external'>,
            default: 'internal'
        }
    },
    setup(props) {

        return {
            cardType: props.variant as String,
            link: props.path as String,
            linkType: props.pathType as String,
        };
    },
});

export default CardComponent;
</script>

<template>
    <RouterLink
        v-if="cardType === 'clickable' && path === 'internal'"
        :to="link.toStirng()" exact class="card-link-wrapper"
    >
        <article class="card">
            <slot></slot>
        </article>
    </RouterLink>
    <a
        v-if="cardType === 'clickable' && path === 'external'"
        :href="link.toString()" class="card-link-wrapper"
    >
        <article class="card">
            <slot></slot>
        </article>
    </a>
    <article
        v-if="cardType === 'standard'"
        class="card"
    >
        <slot></slot>
    </article>
</template>

<style lang="css" scoped>
.card {

}
</style>
