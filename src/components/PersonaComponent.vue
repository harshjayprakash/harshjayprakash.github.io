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
            validator(value: String) {
                return ['available', 'away', 'busy'].indexOf(value.toString()) !== -1
            }
        }
    },
    setup(props) {
        return { props };
    }
});

export default PersonaComponent;
</script>

<template>
    <article class="persona">
        <img
            aria-label="Profile Picture"
            class="image"
            v-bind:src="props.imageUri"
            alt="persona photo"  />
        <span aria-label="Status Indicator" class="indicator" ></span>
        <section class="information">
            <span aria-label="Person Name" class="name">{{ props.name }}</span>
            <span aria-label="Status Text" aria-atomic="true" class="status">
                <slot>Unknown</slot>
            </span>
        </section>
    </article>
</template>

<style lang="css" scoped>
.persona {
    display: flex;
    place-items: center;
}

.persona .image {
    height: 2.5rem;
    width: 2.5rem;
    border-radius: 50%;
}

.persona .indicator {
    position: relative;
    height: 0.75rem;
    width: 0.75rem;
    background-color: lime;
    border-radius: 50%;
    border: 0.1rem solid var(--clr-surface-primary);
    top: 0.9rem;
    right: 0.6rem;
}

.persona .information {
    display: flex;
    flex-direction: column;
}

.persona .status {
    opacity: 0.7;
}
</style>
