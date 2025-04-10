<script lang="ts" setup>
import CardWidget from '@/components/CardWidget.vue';
import DividerWidget from '@/components/DividerWidget.vue';
import getServices from '@/data/services';

const { services } = getServices();
</script>

<template>
    <DividerWidget variant="horizontal" />
    <section aria-label="Offered Services" class="services">
        <h2>What I can do.</h2>
        <p>
            These are the skills I have as a software engineer, though outside of this
            realm I have some art and design skills. I can design simple interfaces that
            focus on the user experience.
        </p>
        <div aria-label="Service Cards List" class="services-list" role="group">
            <CardWidget
                v-for="svc in services"
                :key="svc.title"
                :aria-label="svc.title"
                :elevate-on-hover="false"
                :elevated="false"
                :fill-on-hover="false"
                link="none"
                variant="filled"
            >
                <div class="service-card" role="group">
                    <h3>{{ svc.title }}</h3>
                    <p>{{ svc.details }}</p>
                    <ul class="technologies">
                        <li
                            v-for="(tech, idx) in svc.technologies"
                            :key="tech"
                            class="technology-item">
                            {{ tech }}
                            <span
                                v-if="idx !== svc.technologies.length - 1"
                                aria-hidden="true"
                            >
                                &SmallCircle;
                            </span>
                        </li>
                    </ul>
                </div>
            </CardWidget>
        </div>
    </section>
</template>

<style lang="css" scoped>
.services {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-block-end: 5rem;
}

.services-list {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
}

.service-card {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.technologies {
    list-style-type: none;
    padding: 0;
}

.technology-item {
    display: inline;
}

@media screen and (min-width: 768px) {
    .services-list {
        grid-template-columns: repeat(3, 1fr);
    }
}
</style>
