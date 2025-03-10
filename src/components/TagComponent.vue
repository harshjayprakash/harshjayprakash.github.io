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
    <span>Tag Component</span>
</template>

<style lang="css" scoped>
</style>
