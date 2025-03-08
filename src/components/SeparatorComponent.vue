<script lang="ts">
import { defineComponent } from 'vue';

const SeparatorComponent = defineComponent({
    name: 'SeparatorComponent',
});

export default SeparatorComponent;
</script>

<template>
    <div class="separator"></div>
</template>

<style lang="css" scoped>
.separator {
    padding: 1rem;
}
</style>
