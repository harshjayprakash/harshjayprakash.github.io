<script lang="ts">
import { computed, defineComponent, ref, type ComputedRef } from 'vue';

const TagComponent = defineComponent({
    name: 'TagComponent',
    inheritAttrs: false,
    props: {
        isActive: {
            type: Boolean,
            default: false,
        }
    },
    setup(props) {
        return {
            highlighted: computed(() => props.isActive) as ComputedRef<Boolean>,
        }
    }
});

export default TagComponent;
</script>

<template>
    <button v-on="$attrs" v-bind="$attrs" class="tag"
        :class="{ 'tag--active': highlighted }"
    >
        <slot></slot>
    </button>
</template>

<style lang="css" scoped>
.tag {
    border: 0;
    padding-inline: 0.5rem;
    border-radius: 0.2rem;
}

.tag:hover {
    background-color: var(--clr-surface-container-highest);
}

.tag--active {
    background-color: var(--clr-accent-container);
}
</style>
