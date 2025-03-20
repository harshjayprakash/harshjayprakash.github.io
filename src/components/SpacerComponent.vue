<script lang="ts">
import { defineComponent } from 'vue';

const SpacerComponent = defineComponent({
    name: 'SpacerComponent',
    props: {
        space: {
            type: String,
            default: '1rem',
        },
    },
    setup(props) {
        return { props }
    }
});

export default SpacerComponent;
</script>

<template>
    <div class="spacer" aria-hidden="true"></div>
</template>

<style lang="css" scoped>
.spacer {
    --def-space: v-bind(props.space);
    padding-block: var(--def-space, 1rem);
}
</style>
