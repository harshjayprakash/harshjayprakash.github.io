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
        }
    },
});

export default PersonaComponent;
</script>

<template>
    <article class="persona">
        Persona
    </article>
</template>

<style lang="css" scoped>
</style>
