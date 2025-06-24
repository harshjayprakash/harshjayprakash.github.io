<script lang="ts" setup>
defineOptions({ inheritAttrs: false });

const { active } = defineProps<{
    active: boolean
}>();
</script>

<template>
    <button
        role="tab"
        class="tab"
        :aria-selected="active"
        v-bind="$attrs"
        v-on="$attrs"
    >
        <slot></slot>
    </button>
</template>

<style lang="css" scoped>
.tab {
    --widget-tab-border-colour: transparent;

    position: relative;
    border: 0;
    background-color: inherit;
    padding: 0;
}

.tab::after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 0.25rem;
    background-color: var(--widget-tab-border-colour);
    border-radius: 5px;
    bottom: -0.25rem;
    left: 0;
    right: 0;
    margin: 0 auto;
}

.tab:hover {
    cursor: pointer;
}

.tab[aria-selected="false"]:hover {
    --widget-tab-border-colour: var(--colour-outline-hover);
}

.tab[aria-selected="true"] {
    --widget-tab-border-colour: var(--colour-outline-highlight-lighter);
}
</style>
