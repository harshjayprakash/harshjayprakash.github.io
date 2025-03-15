<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';
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
        :to="link.toString()" exact class="card-link-wrapper"
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
    background-color: var(--clr-card-bk);
    padding: 1rem;
    border-radius: var(--bdr-default);
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.card--linkable:hover {
    box-shadow:
        0 10px 15px -3px var(--clr-card-shadow),
        0 4px 6px -4px var(--clr-card-shadow);
    background-color: var(--clr-card-bk-hover);
}

.card-link-wrapper {
    text-decoration: none;
    color: inherit;
}
</style>
