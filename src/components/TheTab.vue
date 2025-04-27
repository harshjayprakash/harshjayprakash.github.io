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

    border: 0;
    background-color: inherit;
    border-bottom: 0.2rem solid var(--widget-tab-border-colour);
    padding: 0;
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
