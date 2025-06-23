<script setup lang="ts">
import getAvatar from '@/data/avatar';

const { avatar } = getAvatar();
</script>

<template>
    <section aria-label="Home Page Hero Section" class="home-hero">
        <img :src="avatar" alt="Profile Picture" class="avatar" />
        <h1>
            I'm Harsh, a Software Developer<br />based in Southampton, UK.
        </h1>
        <p>Crafting functional and thoughtful digital experience.</p>
        <p></p>
        <div class="rect">

        </div>
    </section>
</template>

<style lang="css" scoped>
.home-hero {
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.avatar {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
}

.rect {
    border-radius: 5px;
    height: 30vh;
    background: lightcyan;
}
</style>
