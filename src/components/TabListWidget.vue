<script lang="ts" setup>
import { computed, provide } from 'vue';

const props = defineProps<{
    variant: 'underline' | 'filled',
    orientation: 'horizontal' | 'vertical'
}>();

provide('tabVariant', props.variant);
provide('tabOrientation', props.orientation);

const klass = computed(() => {
    return {
        'tablist--vertical': props.orientation === 'vertical',
        'tablist--horizontal': props.orientation === 'horizontal',
        'tablist--underline': props.variant === 'underline',
        'tablist--filled': props.variant === 'filled',
    }
})
</script>

<template>
    <div
        :aria-orientation="props.orientation"
        :class="klass"
        class="tablist"
        role="tablist"
    >
        <slot></slot>
    </div>
</template>

<style lang="css" scoped>
.tablist {
    --widget-tablist-flex-direction: ;
    --widget-tablist-gap: ;

    display: flex;
    flex-direction: var(--widget-tablist-flex-direction);
    gap: var(--widget-tablist-gap);
}

.tablist--vertical {
    --widget-tablist-flex-direction: column;
}

.tablist--horizontal {
    --widget-tablist-flex-direction: row;
}

.tablist--vertical.tablist--underline {
    --widget-tablist-gap: 0.75rem;
}

.tablist--vertical.tablist--filled {
    --widget-tablist-gap: 0.5rem;
}

.tablist--horizontal.tablist--underline {
    --widget-tablist-gap: 1rem;
}

.tablist--horizontal.tablist--filled {
    --widget-tablist-gap: 0.5rem;
}
</style>
