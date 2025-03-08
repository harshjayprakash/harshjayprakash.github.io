<script lang="ts">
import { defineComponent, type PropType } from 'vue';

const SpacerComponent = defineComponent({
    name: 'SpacerComponent',
    props: {
        space: {
            type: String as PropType<String>,
            default: '1rem',
        },
    },
    setup(props) {

        return {
            blockSpace: props.space as String,
        }
    }
});

export default SpacerComponent;
</script>

<template>
    <div class="spacer"></div>
</template>

<style lang="css" scoped>
.spacer {
    padding-block: 1rem;
    padding-block: v-bind(blockSpace);
}
</style>
