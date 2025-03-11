<script lang="ts">
import { defineComponent } from 'vue';

import ButtonComponent from '@/components/ButtonComponent.vue';
import DividerComponent from '@/components/DividerComponent.vue';

const AlphaView = defineComponent({
    name: 'AlphaView',
    components: { DividerComponent, ButtonComponent },
    methods: {
        hi() {
            alert('hi');
        }
    }
});

export default AlphaView;
</script>

<template>
    <p>Alpha View</p>
    <div class="wrapper--alpha">
        <div class="fixed-size">

            <DividerComponent variant="horizontal" />
        </div>
        <ButtonComponent variant="standard">
            Standard Button
        </ButtonComponent>
        <br />
        <br />
        <ButtonComponent variant="accent">
            Accent Button
        </ButtonComponent>
    </div>
</template>

<style lang="css" scoped>
.wrapper--alpha {
    padding: 5rem;
}

.fixed-size {
    inline-size: 3rem;
    block-size: 3rem;
}
</style>
