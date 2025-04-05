<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
    variant: 'horizontal' | 'vertical',
    vheight?: number,
    thickness?: number,
    margin?: number,
}>();

const klass = computed(() => {
    return {
        'divider--horizontal': props.variant === 'horizontal',
        'divider--vertical': props.variant === 'vertical'
    }
});

const safeVHeight = computed(() => props.vheight ?? 'auto');
const safeThickness = computed(() => props.thickness ?? 0.1);
const safeMargin = computed(() => props.margin ?? 1);

const style = computed(() => {
    return {
        '--widget-divider-computed-vheight':
            (safeVHeight.value === 'auto') ? 'auto' : `${safeVHeight.value}rem`,
        '--widget-divider-computed-thickness': `${safeThickness.value}rem`,
        '--widget-divider-computed-margin-inline':
            (props.variant === 'vertical') ? `${safeMargin.value}rem` : '0',
        '--widget-divider-computed-margin-block':
            (props.variant === 'horizontal') ? `${safeMargin.value}rem` : '0',
    }
})
</script>

<template>
    <hr
        class="divider"
        :class="klass" :style
        aria-hidden="true"
        :aria-orientation="props.variant"
    />
</template>

<style lang="css" scoped>
.divider {
    --widget-divider-border: var(--colour-border-faded);

    border: 0;
}

.h-divider {
    border-block-end:
        var(--widget-divider-computed-thickness) solid var(--widget-divider-border);
    margin-block: var(--widget-divider-computed-spacing);
}

.v-divider {
    block-size: var(--widget-divider-computed-vheight);
    border-inline:
        var(--widget-divider-computed-thickness) solid var(--widget-divider-border);
    margin-inline: var(--widget-divider-computed-spacing);
}
</style>
