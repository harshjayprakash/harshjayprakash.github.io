<template>
    <section class="not-found">
        <span class="not-found__code">404</span>
        <span class="not-found__description">
            Impossible Page
        </span>
        <span class="not-found__text">
            This website is still under construction. 
            If this is a valid page, please come back at a later date
        </span>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'NotFoundPage',
});
</script>

<style lang="css" scoped>
.not-found {
    text-align: center;
    display: flex;
    gap: 2rem;
    flex-direction: column;
    place-items: center;
    place-content: center;
    height: 80vh;
}

.not-found .not-found__code {
    font-size: 7rem;
    font-weight: 900;
}

.not-found .not-found__description {
    font-size: 2rem;
    font-weight: 600;
    text-transform: uppercase;
}

.not-found .not-found__text {
    max-width: 45ch;
}
</style>