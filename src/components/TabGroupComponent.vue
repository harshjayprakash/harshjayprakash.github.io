<script lang="ts">
import { defineComponent } from 'vue';

const TabGroupComponent = defineComponent({
    name: 'TabGroupComponent',
});

export default TabGroupComponent;
</script>

<template>
    <div class="tag-group">
        <slot></slot>
    </div>
</template>

<style lang="css" scoped>
.tag-group {
    display: flex;
    flex-direction: row;
    width: fit-content;
    flex-wrap: wrap;
    gap: 1rem;
    border-radius: var(--bdr-default);
}

@media screen and (min-width: 768px) {
    .tag-group {
        flex-direction: row;
        width: fit-content;
    }
}
</style>
