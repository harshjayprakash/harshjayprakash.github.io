<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import { RouterLink } from 'vue-router';

const CardComponent = defineComponent({
    name: 'CardComponent',
    components: { RouterLink },
    props: {
        variant: {
            type: String as PropType<'standard' | 'internal-link' | 'external-link'>,
            default: 'standard',
        },
        path: {
            type: String as PropType<String>,
            default: '#',
        }
    },
    setup(props) {

        return {
            cardType: props.variant as String,
            link: props.path as String,
        };
    },
});

export default CardComponent;
</script>

<template>
    <RouterLink
        v-if="cardType === 'internal-link'"
        :to="link.toStirng()" exact class="card-link-wrapper"
    >
        <article class="card card--linkable">
            <slot></slot>
        </article>
    </RouterLink>
    <a
        v-if="cardType === 'external-link'"
        :href="link.toString()" class="card-link-wrapper"
    >
        <article class="card card--linkable">
            <slot></slot>
        </article>
    </a>
    <article
        v-if="cardType === 'standard'"
        class="card card--standard"
    >
        <slot></slot>
    </article>
</template>

<style lang="css" scoped>
.card {
    background-color: var(--clr-surface-container-lowest);
    padding: 1rem;
    border-radius: 0.2rem;
}

.card--linkable:hover {
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
}

.card-link-wrapper {
    text-decoration: none;
    color: inherit;
}
</style>
