<script lang="ts" setup>
import { computed } from 'vue';

const props = defineProps<{
    columns: number,
    spacing: number
}>();

const style = computed(() => {
    return {
        '--widget-grid-columns': `${props.columns}`,
        '--widget-grid-spacing': `${props.spacing}rem`
    }
});
</script>

<template>
    <div :style class="grid-container" role="group">
        <slot></slot>
    </div>
</template>

<style lang="css" scoped>
.grid-container {
    display: grid;
    gap: var(--widget-grid-spacing);
}

@media screen and (min-width: 768px) {
    .grid-container {
        grid-template-columns: repeat(var(--widget-grid-columns), 1fr);
    }
}
</style>
