<script setup lang="ts">
</script>

<template>
    <div class="surface">
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
