<script lang="ts" setup>
</script>

<template>
    <details class="accordian-content">
        <summary class="accordian-header">
            <slot name="heading"></slot>
        </summary>
        <slot name="content"></slot>
    </details>
</template>
