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
