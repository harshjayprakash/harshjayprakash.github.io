<script lang="ts">
import { defineComponent } from 'vue';

const ButtonComponent = defineComponent({
    name: 'ButtonComponent',
});

export default ButtonComponent;
</script>

<template>
    <button>
        <slot></slot>
    </button>
</template>

<style lang="css" scoped>
</style>
