<script lang="ts" setup>
</script>

<template>
    <article aria-label="Page Not Found" class="not-found">
        <h1>Seems you've wondered off the map.</h1>
        <RouterLink to="/home">Back to Home</RouterLink>
    </article>
</template>

<style lang="css" scoped>
.not-found {
    display: flex;
    flex-direction: column;
    height: 90vh;
    place-content: center;
    place-items: center;
    gap: 5rem;
}
</style>
