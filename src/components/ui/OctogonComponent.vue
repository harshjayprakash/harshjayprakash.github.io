<template>
    <div class="hx-octogon-container"> 
        <svg :width="octWidth" :height="octHeight" 
            viewBox="-10 -10 115 115" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="linear" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#00bdbd"/>
                    <stop offset="100%" stop-color="#005252"/>
                </linearGradient>
            </defs>
            <polygon class="hx-octogon" 
                points="30,5 70,5 95,30 95,70 70,95 30,95 5,70 5,30" 
                stroke="url(#linear)"/>
        </svg> 
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'OctogonComponent',
    props: {
        height: {
            type: Number,
            required: false,
        },
        width: {
            type: Number,
            required: false,
        }
    },
    setup(props) { 
        const octWidth = props.width ?? 20;
        const octHeight = props.height ?? 20;
        return { octWidth, octHeight };
    },
});
</script>

<style lang="css" scoped>
.hx-octogon {
    fill: var(--clr-surface);
    stroke-width: 1rem;
}
</style>