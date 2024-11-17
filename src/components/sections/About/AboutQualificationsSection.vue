<template>
    <section class="about-quals">
        <h2>Qualifications.</h2>
        <div class="about-quals-list">
            <CardComponent>
                <span class="card__title">Bachelor's in Computer Science</span>
                <span>The University of Winchester, 2021-24</span>
            </CardComponent>
            <CardComponent>
                <span class="card__title">GCE A-Levels</span>
                <span>Computer Science, Maths</span>
                <span>Barton Peveril Sixth Forms, 2019-21</span>
            </CardComponent>
            <CardComponent>
                <span class="card__title">GCSEs</span>
                <span>English, Maths, Science, Geography, Spanish, Computer Science, Fine Art</span>
            </CardComponent>
        </div>
    </section>
</template>

<script lang="ts">
import CardComponent from '@/components/ui/CardComponent.vue';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'AboutQualificationsSection',
    components: { CardComponent },
});
</script>

<style lang="css" scoped>
.about-quals {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.about-quals-list {
    display: grid;
    gap: 1rem;
}

.about-quals-list .card__title {
    font-weight: 600;
}

.about-quals-list > * {
    display: flex;
    flex-direction: column;

}

@media (min-width: 769px) {
    .about-quals-list {
        grid-template-columns: repeat(3, 1fr);
    }
}
</style>