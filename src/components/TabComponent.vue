<script lang="ts">
import { defineComponent, inject } from 'vue';

const TabComponent = defineComponent({
    name: 'TabComponent',
    inheritAttrs: false,
    props: {
        isActive: {
            type: Boolean,
            default: false,
        }
    },
    setup(props) {
        const tabControlStyle = inject('tabControlStyle');
        return { props, tabControlStyle };
    }
});

export default TabComponent;
</script>

<template>
    <button
        class="tab"
        v-on="$attrs"
        v-bind="$attrs"
        v-bind:class="{
            'tab--filled': tabControlStyle === 'filled',
            'tab--filled--active': tabControlStyle === 'filled' && props.isActive,
            'tab--underline': tabControlStyle === 'underline',
            'tab--underline--active': tabControlStyle === 'underline' && props.isActive
        }"
        role="tab"
        v-bind:aria-selected="props.isActive"
    >
        <slot></slot>
    </button>
</template>

<style lang="css" scoped>
.tab {
    border: 0;
}

.tab--filled {
    border-radius: var(--bdr-default);
    background-color: var(--clr-tab-bk);
    padding-inline: 0.5rem;
}

.tab--filled:hover {
    background-color: var(--clr-tab-bk-hover);
    color: inherit;
}

.tab--filled--active {
    background-color: var(--clr-tab-bk-active);
    color: var(--clr-tab-text-active);
}

.tab--underline {
    background-color: inherit;
    border-block-end: 0.2rem solid var(--clr-tab-bk);
    margin-inline: 0.25rem;
}

.tab--underline:hover {
    border-block-end-color: var(--clr-tab-bk-hover);
}

.tab--underline--active {
    border-block-end-color: var(--clr-tab-bk-active);
}

.tab--filled--active,
.tab--underline--active {
    font-weight: 500;
}
</style>
