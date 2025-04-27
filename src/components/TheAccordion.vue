<script lang="ts" setup>
</script>

<template>
    <details class="accordion-content">
        <summary class="accordion-header">
            <slot name="heading"></slot>
        </summary>
        <div role="group" class="accordion-content-details">
            <slot name="content"></slot>
        </div>
    </details>
</template>

<style lang="css" scoped>
.accordion-content {
    --widget-accordion-outline: transparent;
    --widget-accordion-list-type: '\002B   ';

    padding-inline: 1rem;
    border-inline-start: 0.2rem solid var(--widget-accordion-outline);
}

.accordion-header {
    list-style-type: var(--widget-accordion-list-type);
    cursor: pointer;
}

.accordion-header > * {
    display: inline;
}

.accordion-content[open] {
    --widget-accordion-outline: var(--colour-outline-highlight);
    --widget-accordion-list-type: '\2212   ';
}

.accordion-content-details {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding-block: 0.5rem;
}
</style>
