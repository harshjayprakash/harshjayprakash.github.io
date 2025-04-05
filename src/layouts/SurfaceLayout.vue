<script setup lang="ts">
import SpacerWidget from '@/components/SpacerWidget.vue';
</script>

<template>
    <div class="surface">
        <slot name="header"></slot>
        <SpacerWidget :spacing="1.5" orientation="vertical" />
        <slot></slot>
        <SpacerWidget :spacing="1.5" orientation="vertical" />
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
