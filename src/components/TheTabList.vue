<script lang="ts" setup>
defineOptions({ inheritAttrs: false });
</script>

<template>
    <div role="tablist" class="tab-list" v-bind="$attrs" v-on="$attrs">
        <slot></slot>
    </div>
</template>

<style lang="css" scoped>
.tab-list {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
}
</style>
