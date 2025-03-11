<script lang="ts">
import { computed, defineComponent, type ComputedRef } from 'vue';

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
    border-radius: var(--bdr-default);
    background-color: var(--clr-tab-bk);
}

.tag:hover {
    background-color: var(--clr-tab-bk-hover);
    color: inherit;
}

.tag--active {
    background-color: var(--clr-tab-bk-active);
    color: var(--clr-tab-text-active);
}
</style>
