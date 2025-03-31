<script setup lang="ts">
import { computed, provide } from 'vue';

const props = defineProps<{
    variant?: 'underline' | 'filled'
}>();

const safeVariant = computed(() => props.variant ?? 'underline');
provide('tabControlStyle', safeVariant.value);
</script>

<template>
    <div
        class="tag-group" :class="{
            'tab-group--underline': safeVariant === 'underline',
            'tab-group--filled': safeVariant === 'filled',
        }"
        role="tablist"
    >
        <slot></slot>
    </div>
</template>

<style lang="css" scoped>
.tag-group {
    display: flex;
    flex-direction: row;
    width: fit-content;
    flex-wrap: wrap;
    gap: 1rem;
    border-radius: var(--bdr-default);
}

@media screen and (min-width: 768px) {
    .tag-group {
        flex-direction: row;
        width: fit-content;
    }
}
</style>
