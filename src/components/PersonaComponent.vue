<script lang="ts">
import { defineComponent } from 'vue';

const PersonaComponent = defineComponent({
    name: 'PersonaComponent',
    props: {
        name: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            required: true,
        },
        imageUri: {
            type: String,
            required: true,
        },
        indicator: {
            type: String,
            required: true,
            validator: (value: String) => {
                return ['available', 'away', 'busy'].indexOf(value.toString()) !== -1
            }
        }
    },
});

export default PersonaComponent;
</script>

<template>
    <article class="persona">
        <img class="image" v-bind:src="$props.imageUri" alt="persona photo"  />
        <div class="indicator" ></div>
        <div class="information">
            <span class="name">{{ $props.name }}</span>
            <span class="status">
                <slot>Unknown</slot>
            </span>
        </div>
    </article>
</template>

<style lang="css" scoped>
</style>
