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
    padding-inline: 1rem;
    border-inline-start: 0.2rem solid transparent;
}

.accordion-header {
    list-style-type: '\002B   ';
    cursor: pointer;
}

.accordion-header > * {
    display: inline;
}

.accordion-content[open] > .accordion-header {
    list-style-type: '\2212   ';
}

.accordion-header::marker {
    font-weight: 500;
    color: var(--colour-600H);
}

.accordion-content[open] {
    border-inline-start: 0.2rem solid var(--colour-600H);
}

.accordion-content-details {
    padding-block: 0.5rem;
}
</style>
