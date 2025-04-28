<script lang="ts" setup>
const { variant, colour } = defineProps<{
    variant: 'ghost' | 'outline' | 'tint' | 'filled',
    colour: 'primary' | 'highlight'
}>();
</script>

<template>
    <div
        role="status"
        class="badge"
        :data-variant="variant"
        :data-colour="colour"
    >
        <slot></slot>
    </div>
</template>

<style lang="css" scoped>
.badge {
    --widget-badge-text: ;
    --widget-badge-bk: ;
    --widget-badge-outline: ;

    display: inline;
    width: fit-content;
    font-size: smaller;
    background-color: var(--widget-badge-bk);
    color: var(--widget-badge-text);
    border: 0.1rem solid var(--widget-badge-outline);
    padding-inline: 0.25rem;
    padding-block: 0.1rem;
}

.badge[data-variant="ghost"][data-colour="highlight"] {
    --widget-badge-text: var(--colour-text-highlight);
    --widget-badge-bk: inherit;
    --widget-badge-outline: transparent;
}

.badge[data-variant="outline"][data-colour="highlight"] {
    --widget-badge-text: var(--colour-text-highlight);
    --widget-badge-bk: inherit;
    --widget-badge-outline: var(--colour-outline-highlight);
}

.badge[data-variant="tint"][data-colour="highlight"] {
    --widget-badge-text: var(--colour-text-highlight);
    --widget-badge-bk: var(--colour-bk-highlight-subtle);
    --widget-badge-outline: var(--colour-outline-highlight-subtle);
}

.badge[data-variant="filled"][data-colour="highlight"] {
    --widget-badge-text: var(--colour-text-inverted);
    --widget-badge-bk: var(--colour-bk-highlight);
    --widget-badge-outline: var(--colour-outline-highlight);
}

.badge[data-variant="ghost"][data-colour="primary"] {
    --widget-badge-text: var(--colour-text-primary);
    --widget-badge-bk: inherit;
    --widget-badge-outline: transparent;
}

.badge[data-variant="outline"][data-colour="primary"] {
    --widget-badge-text: var(--colour-text-primary);
    --widget-badge-bk: inherit;
    --widget-badge-outline: var(--colour-outline-primary);
}

.badge[data-variant="tint"][data-colour="primary"] {
    --widget-badge-text: var(--colour-text-primary);
    --widget-badge-bk: var(--colour-bk-secondary);
    --widget-badge-outline: var(--colour-outline-faded);
}

.badge[data-variant="filled"][data-colour="primary"] {
    --widget-badge-text: var(--colour-text-inverted);
    --widget-badge-bk: var(--colour-bk-inverted);
    --widget-badge-outline: var(--colour-outline-inverted);
}

</style>
