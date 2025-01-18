<template>
    <footer class="footer">
        <small class="links">
            <a class="link" href="https://github.com/harshjayprakash">GitHub</a>
            <a class="link" href="https://www.linkedin.com/in/harshjayprakash7/">LinkedIn</a>
        </small>
        <small class="build">
            Handcrafted with Vue. ({{ buildDate }}).
            <a
                class="link"
                href="https://github.com/harshjayprakash/harshjayprakash.github.io"
            >
                View Source Code
            </a>
        </small>
        <br />
        <small class="copyright">
            &copy; {{ year.toString() }} Harsh Jayprakash.
        </small>
    </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'FooterComponent',
    data() {
        const year: String = 'MMXXV';
        const buildDate: String = '2025.H1.4';
        return { year, buildDate };
    }
});
</script>

<style lang="css" scoped>
.footer {
    padding: 2rem 0;
}
</style>
