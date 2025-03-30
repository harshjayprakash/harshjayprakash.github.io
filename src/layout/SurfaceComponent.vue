<script lang="ts">
import { defineComponent } from 'vue';

const SurfaceComponent = defineComponent({
    name: 'SurfaceComponent'
});

export default SurfaceComponent;
</script>

<template>
    <div
        class="surface"
        role="application"
        aria-live="polite"
        aria-label="Harsh's Personal Portfolio Website"
    >
        <slot name="header">No header provided.</slot>
        <slot>No content provided.</slot>
        <slot name="footer">No footer provided.</slot>
    </div>
</template>

<style lang="css" scoped>
.surface {
    max-width: 60rem;
    padding-inline: 2rem;
    margin-inline: auto;
}
</style>
