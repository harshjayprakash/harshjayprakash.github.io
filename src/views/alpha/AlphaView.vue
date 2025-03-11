<script lang="ts">
import { defineComponent } from 'vue';

import ButtonComponent from '@/components/ButtonComponent.vue';
import DividerComponent from '@/components/DividerComponent.vue';
import BadgeComponent from '@/components/BadgeComponent.vue';

const AlphaView = defineComponent({
    name: 'AlphaView',
    components: { DividerComponent, ButtonComponent, BadgeComponent },
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
        <br/>
        <br/>
        <BadgeComponent>
            Under Construction
        </BadgeComponent>
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
