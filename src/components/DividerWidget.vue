<script lang="ts" setup>
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
        :aria-orientation="props.variant"
        :class="klass"
        :style
        aria-hidden="true"
        class="divider"
    />
</template>

<style lang="css" scoped>
.divider {
    --widget-divider-border: var(--colour-border-faded);

    border: 0;
    margin-block: var(--widget-divider-computed-margin-block);
    margin-inline: var(--widget-divider-computed-margin-inline);
}

.divider--horizontal {
    border-block-end:
        var(--widget-divider-computed-thickness) solid var(--widget-divider-border);
}

.divider--vertical {
    block-size: var(--widget-divider-computed-vheight);
    border-inline-end:
        var(--widget-divider-computed-thickness) solid var(--widget-divider-border);
    inline-size: auto;
}
</style>
