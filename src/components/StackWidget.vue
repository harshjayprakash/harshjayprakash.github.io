<script lang="ts" setup>
import { computed } from 'vue';

const props = defineProps<{
    spacing: number,
    direction: 'row' | 'row-reverse' | 'column' | 'column-reverse'
}>();

const style = computed(() => {
    return {
        '--widget-stack-direction': `${props.direction}`,
        '--widget-stack-spacing': `${props.spacing}rem`
    }
});
</script>

<template>
    <div :style class="stack" role="group">
        <slot></slot>
    </div>
</template>

<style lang="css" scoped>
.stack {
    display: flex;
    flex-direction: var(--widget-stack-direction);
    gap: var(--widget-stack-spacing);
}
</style>
