<script setup lang="ts">
</script>

<template>
    <blockquote class="blockquote">
        <slot></slot>
    </blockquote>
</template>

<style lang="css">
.blockquote {
    position: relative;
    padding-inline: 1.5rem;
}

.blockquote::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 0.2rem;
    height: 100%;
    background-color: var(--colour-outline-faded);
    border-radius: var(--rounded-default);
}
</style>
