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
    <li class="card" v-bind:class="{
        'card--standard': props.variant === 'standard',
        'card--linkable':
            props.variant === 'internal-link' || props.variant === 'external-link'
    }">
        <RouterLink
            v-if="props.variant === 'internal-link'"
            v-bind:to="props.path ?? '#'" exact
            class="card-link"
        >
            <slot></slot>
        </RouterLink>
        <a
            v-if="props.variant === 'external-link'"
            v-bind:href="props.path ?? '#'"
            target="_blank" rel="noopener noreferrer"
            class="card-link"
        >
            <slot></slot>
        </a>
        <slot v-if="props.variant === 'standard'"></slot>
    </li>
</template>

<style lang="css" scoped>
.card {
    background-color: var(--clr-card-bk);
    border-radius: var(--bdr-default);
    list-style-type: none;
}

.card--standard {
    padding: 1rem;
}

.card-link {
    text-decoration: none;
    color: inherit;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    height: 100%;
    padding: 1rem;
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
