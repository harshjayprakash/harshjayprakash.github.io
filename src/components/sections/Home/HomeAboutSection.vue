<template>
    <section class="about">
        <h2 class="about__title">Get to know me.</h2>
        <div class="about__container">
            <div class="about__image-container">
                <img class="about__profile-picture" 
                    :src="profilePortfolioUri.toString()" alt="profile picture" />
            </div>
            <p class="about__greeting">
                Hi there! I'm Harsh Jayprakash, a versatile programmer and artist 
                passionate about pushing the boundaries of creativity and technical 
                precision.
                <br />
                <LinkComponent link-type="internal" to="/about">
                    Read More &RightArrow;
                </LinkComponent>
            </p>
        </div>
    </section>
</template>

<script lang="ts">
import LinkComponent from '@/components/ui/LinkComponent.vue';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'HomeAboutSection',
    components: { LinkComponent },
    data() {
        const profilePortfolioUri: String = 'https://avatars.githubusercontent.com/u/58461297?v=4';
        return { profilePortfolioUri };
    }
});
</script>

<style lang="css" scoped>
.about {
    display: flex;
    flex-direction: column;
    padding: 5rem 0;
    gap: 2rem;
}

.about .about__container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color: var(--clr-surface-container);
}

.about .about__profile-picture {
    display: block;
    width: 104px;
    height: 104px;
    border-radius: 0.25rem;
}

.about .about__greeting {
    max-width: 50ch;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.about .about__more {
    text-decoration: underline solid 2px var(--clr-accent);
    color: inherit;
}

.about .about__more:hover {
    text-decoration: underline solid 2px var(--clr-accent-variant);
}

@media (min-width: 769px) {
    .about .about__container {
        flex-direction: row;
        margin: auto;
    }
}

</style>