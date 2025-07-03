<script lang="ts" setup>
</script>

<template>
    <div role="tablist" class="tab-list">
        <slot></slot>
    </div>
</template>

<style lang="css">
.tab-list {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
}
</style>
