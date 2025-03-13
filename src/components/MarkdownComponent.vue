<script lang="ts">
import { defineComponent, type PropType } from 'vue';

const MarkdownComponent = defineComponent({
    name: 'MarkdownComponent',
    props: {
        tags: {
            type: Array<String>,
            default: [],
        },
        title: {
            type: String as PropType<String>,
            default: 'Untitled Article',
        },
        description: {
            type: String as PropType<String>,
            default: 'description'
        },
        author: {
            type: String as PropType<String>,
            default: 'author',
        },
        date: {
            type: String as PropType<String>,
            default: '01-01-1600',
        },
        estReadingTimeMinutes: {
            type: Number,
            default: 0,
        },
        image: {
            type: String as PropType<String>,
            default: 'none',
        },
        header: {
            type: Boolean as PropType<Boolean>,
            default: false,
        }
    },
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

@media screen and (min-width: 768px) {
/*
    .markdown {
        grid-template-columns: repeat(12, 1fr);
    }

    .markdown > :slotted(*) {
        grid-column: 4 / 10
    } */
}

.markdown > :slotted(h2),
.markdown > :slotted(h3) {
    margin-block: 2rem;
}

.markdown > :slotted(p) {
    margin-block-end: 1rem;
}
</style>
