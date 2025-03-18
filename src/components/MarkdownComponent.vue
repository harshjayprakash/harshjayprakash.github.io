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
.markdown {
    display: grid;
    max-width: 60ch;
    margin-inline: auto;
}

.markdown > :slotted(h2),
.markdown > :slotted(h3) {
    margin-block: 2rem;
}

.markdown > :slotted(p) {
    margin-block-end: 1rem;
}
</style>
