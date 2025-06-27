<script setup lang="ts">
import type { IconProps } from '@/types/ui/IconProps';
import { defineProps } from 'vue';

const props = withDefaults(defineProps<IconProps>(), {
    filled: true
});

</script>

<template>
    <span class="material-icon" aria-hidden="true" :data-filled="props.filled">
        {{ props.name }}
    </span>
</template>

<style lang="css">
.material-icon {
    font-family: "Material Symbols Rounded Variable";
    font-weight: normal;
    font-style: normal;
    font-size: 22px;
    display: inline-block;
    line-height: 1;
    letter-spacing: normal;
    white-space: nowrap;
    direction: ltr;
}

.material-icon[data-filled='true'] {
    font-variation-settings:
        "FILL" 1,
        "wght" 400,
        "GRAD" 0,
        "opsz" 22;
}

.material-icon[data-filled='false'] {
    font-variation-settings:
        "FILL" 0,
        "wght" 400,
        "GRAD" 0,
        "opsz" 22;
}
</style>
