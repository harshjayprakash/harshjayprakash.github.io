<script setup lang="ts">
import CardWidget from '@/components/CardWidget.vue';
import CardGroupWidget from '@/components/CardGroupWidget.vue';
</script>

<template>
    <section class="home-services" aria-label="Things I Can Do Section">
        <h2>What I can do.</h2>
        <p>
            I can do some front-end development to traditional application development,
            and understanding user experience to design simplistic interfaces. The cards
            below show the technologies I have used within the past to build projects.
        </p>
        <CardGroupWidget class="services" aria-label="Categeory Skills List" :desktop-cols="3">
            <CardWidget aria-label="Front-End Web Development">
                <h3>Front-End Web Development</h3>
                <p>
                    Crafting responsive websites using modern front-end
                    technologies to create seamless user experiences.
                </p>
                <small
                    class="faded"
                >
                    <span>Angular</span> &SmallCircle;
                    <span>Vue</span> &SmallCircle;
                    <span>HTML</span> &SmallCircle;
                    <span>CSS</span> &SmallCircle;
                    <span>TypeScript</span>
                </small>
            </CardWidget>
            <CardWidget aria-label="Traditional Application Development">
                <h3>Traditional Application Development</h3>
                <p>
                    Building robust, scalable applications tailored to the given
                    requirements.
                </p>
                <small class="faded">
                    <span>C</span> &SmallCircle;
                    <span>Python</span> &SmallCircle;
                    <span>Java</span> &SmallCircle;
                    <span>Visual Basic .NET</span> &SmallCircle;
                    <span>Pascal</span>
                </small>
            </CardWidget>
            <CardWidget aria-label="User Interface / User Experience">
                <h3>UI/UX</h3>
                <p>
                    Designing interfaces that balance aesthetics with functionality
                </p>
                <small class="faded">
                    <span>Figma</span> &SmallCircle;
                    <span>Pen+Paper</span> &SmallCircle;
                    <span>MS Paint</span>
                </small>
            </CardWidget>
            <CardWidget>
                <h3>Tools</h3>
                <p>
                    The tools used within the workflow of creating and maintaining software.
                </p>
                <small class="faded">
                    <span>Windows</span> &SmallCircle;
                    <span>GNU+Linux</span> &SmallCircle;
                    <span>VSCode</span> &SmallCircle;
                    <span>Visual Studio</span> &SmallCircle;
                    <span>JetBrains IntelliJ</span> &SmallCircle;
                    <span>Git</span>
                </small>
            </CardWidget>
        </CardGroupWidget>
    </section>
</template>

<style lang="css" scoped>
.home-services {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

@media screen and (min-width: 768px) {
    .services > :nth-child(4) {
        grid-column: 1 / 4;
    }
}

.faded {
    color: var(--clr-text-faded);
}
</style>
