<script lang="ts">
import { defineComponent } from 'vue';

const TagGroupComponent = defineComponent({
    name: 'TagGroupComponent',
});

export default TagGroupComponent;
</script>

<template>
    <div class="tag-group">
        <slot></slot>
    </div>
</template>

<style lang="css" scoped>
.tag-group {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background-color: var(--clr-tab-group-bk);
    border-radius: 0.2rem;
    padding: 0.5rem;
}

@media screen and (min-width: 768px) {
    .tag-group {
        flex-direction: row;
        width: fit-content;
    }
}
</style>
