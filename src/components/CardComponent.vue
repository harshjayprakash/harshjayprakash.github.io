<script lang="ts">
import { defineComponent } from 'vue';
import { RouterLink } from 'vue-router';

const CardComponent = defineComponent({
    name: 'CardComponent',
    components: { RouterLink },
    props: {
        variant: {
            type: String,
            default: 'standard',
            validator: (value: String) => {
                return ['standard', 'internal-link', 'external-link'].includes(
                    value.toString())
            },
        },
        path: {
            type: String,
            default: '#',
        }
    },
    setup(props) {
        return { props };
    }
});

export default CardComponent;
</script>

<template>
    <RouterLink
        v-if="props.variant === 'internal-link'"
        v-bind:to="props.path ?? '#'" exact
        class="card-link-wrapper"
    >
        <article class="card card--linkable">
            <slot></slot>
        </article>
    </RouterLink>
    <a
        v-if="props.variant === 'external-link'"
        v-bind:href="props.path ?? '#'"
        class="card-link-wrapper"
    >
        <article class="card card--linkable">
            <slot></slot>
        </article>
    </a>
    <article
        v-if="props.variant === 'standard'"
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
    scale: 101%;
}

.card-link-wrapper {
    text-decoration: none;
    color: inherit;
}
</style>
