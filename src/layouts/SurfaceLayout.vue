<script setup lang="ts">
</script>

<template>
    <div class="surface">
        <slot name="header"></slot>
        <slot></slot>
        <slot name="footer"></slot>
    </div>
</template>

<style lang="css" scoped>
.surface {
    max-width: 60rem;
    padding-inline: 2rem;
    margin-inline: auto;
}
</style>
