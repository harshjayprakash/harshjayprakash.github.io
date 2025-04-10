<script lang="ts" setup>
</script>

<template>
    <article class="markdown-style">
        <slot></slot>
    </article>
</template>

<style lang="css" scoped>
.markdown-style {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 50ch;
    margin-inline: auto;
}
</style>
