<script lang="ts">
import { defineComponent, provide } from 'vue';

const TabGroupComponent = defineComponent({
    name: 'TabGroupComponent',
    props: {
        variant: {
            type: String,
            default: 'underline',
        }
    },
    setup(props) {
        provide('tabControlStyle', props.variant);
        return { props };
    }
});

export default TabGroupComponent;
</script>

<template>
    <div
        class="tag-group"
        v-bind:class="{
            'tab-group--underline': props.variant === 'underline',
            'tab-group--filled': props.variant === 'filled',
        }"
        role="tablist"
    >
        <slot></slot>
    </div>
</template>

<style lang="css" scoped>
.tag-group {
    display: flex;
    flex-direction: row;
    width: fit-content;
    flex-wrap: wrap;
    gap: 1rem;
    border-radius: var(--bdr-default);
}

@media screen and (min-width: 768px) {
    .tag-group {
        flex-direction: row;
        width: fit-content;
    }
}
</style>
