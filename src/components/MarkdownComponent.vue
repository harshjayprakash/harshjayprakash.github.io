<script lang="ts">
import { defineComponent } from 'vue';

const MarkdownComponent = defineComponent({
    name: 'MarkdownComponent',
});

export default MarkdownComponent;
</script>

<template>
    <div class="markdown">
        <slot>
            This is some sample text.
        </slot>
    </div>
</template>

<style lang="css" scoped>
</style>
