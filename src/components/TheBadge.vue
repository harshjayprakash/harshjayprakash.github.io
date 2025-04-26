<script lang="ts" setup>
import { computed } from 'vue';

defineOptions({ inheritAttrs: false });

const { variant } = defineProps<{
    variant: 'ghost' | 'outline' | 'tint' | 'filled'
}>();

const styleKlass = computed(() => {
    return {
        'badge--ghost': variant === 'ghost',
        'badge--outline': variant === 'outline',
        'badge--tint': variant === 'tint',
        'badge--filled': variant === 'filled'
    }
});
</script>

<template>
    <div
        role="status"
        class="badge"
        :class="styleKlass"
        v-bind="$attrs"
        v-on="$attrs"
    >
        <slot></slot>
    </div>
</template>

<style lang="css" scoped>

</style>
