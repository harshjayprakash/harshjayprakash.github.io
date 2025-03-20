<script lang="ts">
import { defineComponent } from 'vue';

import CardComponent from '@/components/CardComponent.vue';
import CardGroupComponent from '@/components/CardGroupComponent.vue';

const HomeServicesSection = defineComponent({
    name: 'HomeServicesSection',
    components: { CardGroupComponent, CardComponent },
});

export default HomeServicesSection;
</script>

<template>
    <section class="home-services" aria-label="Things I Can Do Section">
        <h2>What I can do.</h2>
        <p>
            I can do some front-end development to traditional application development,
            and understanding user experience to design simplistic interfaces. The cards
            below show the technologies I have used within the past to build projects.
        </p>
        <CardGroupComponent v-bind:desktopCols="3" aria-label="Categeory Skills List">
            <CardComponent aria-label="Front-End Web Development">
                <h3>Front-End Web Development</h3>
                <p>
                    Crafting responsive websites using modern front-end
                    technologies to create seamless user experiences.
                </p>
                <small
                    class="faded"
                    role="list"
                    aria-label="Front-End Technologies and Frameworks List"
                >
                    <span role="listitem">Angular</span> &SmallCircle;
                    <span role="listitem">Vue</span> &SmallCircle;
                    <span role="listitem">HTML</span> &SmallCircle;
                    <span role="listitem">CSS</span> &SmallCircle;
                    <span role="listitem">TypeScript</span>
                </small>
            </CardComponent>
            <CardComponent aria-label="Traditional Application Development">
                <h3>Traditional Application Development</h3>
                <p>
                    Building robust, scalable applications tailored to the given
                    requirements.
                </p>
                <small class="faded" role="list" aria-label="Traditional Languages List">
                    <span role="listitem">C</span> &SmallCircle;
                    <span role="listitem">Python</span> &SmallCircle;
                    <span role="listitem">Java</span> &SmallCircle;
                    <span role="listitem">Visual Basic .NET</span> &SmallCircle;
                    <span role="listitem">Pascal</span>
                </small>
            </CardComponent>
            <CardComponent aria-label="User Interface / User Experience">
                <h3>UI/UX</h3>
                <p>
                    Designing interfaces that balance aesthetics with functionality
                </p>
                <small class="faded" role="list" aria-label="Tools Used for UI and UX">
                    <span role="listitem">Figma</span> &SmallCircle;
                    <span role="listitem">Pen+Paper</span> &SmallCircle;
                    <span role="listitem">MS Paint</span>
                </small>
            </CardComponent>
        </CardGroupComponent>
        <CardComponent>
            <h3>Tools</h3>
            <p>
                The tools used within the workflow of creating and maintaining software.
            </p>
            <small class="faded" role="list" aria-label="Workflow Tools">
                <span role="listitem">Windows</span> &SmallCircle;
                <span role="listitem">GNU+Linux</span> &SmallCircle;
                <span role="listitem">VSCode</span> &SmallCircle;
                <span role="listitem">Visual Studio</span> &SmallCircle;
                <span role="listitem">JetBrains IntelliJ</span> &SmallCircle;
                <span role="listitem">Git</span>
            </small>
        </CardComponent>
    </section>
</template>

<style lang="css" scoped>
.home-services {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.faded {
    color: var(--clr-text-faded);
}
</style>
