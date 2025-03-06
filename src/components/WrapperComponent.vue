<script lang="ts">
import { defineComponent } from 'vue';

const WrapperComponent = defineComponent({
    name: 'WrapperComponent',
});

export default WrapperComponent;
</script>

<template>
    <div class="wrapper">
        <slot></slot>
    </div>
</template>

<style lang="css" scoped>
.wrapper {
    margin-inline: auto;
    max-width: 60rem;
    padding-inline: 1rem;
}
</style>
