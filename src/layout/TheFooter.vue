<script setup lang="ts">
import TheLink from '@/components/TheLink.vue';
import { metaData } from '@/data/meta';
</script>

<template>
    <footer class="footer" aria-label="Site Footer">
        <small class="version-info">
            Epoch Semantic Version {{ metaData.version.fullString() }}, {{ metaData.buildDate }}.
            Under Construction.
        </small>
        <small class="copyright">
            &copy; {{ metaData.copyrightYear }} Harsh Jayprakash. Handcrafted with Vue.
            <TheLink linkable="external" new-window
                to="https://github.com/harshjayprakash/harshjayprakash.github.io"
            >
                Explore the Source Code.
            </TheLink>
        </small>
    </footer>
</template>

<style lang="css">
.footer {
    display: flex;
    flex-direction: column;
    padding-block: 1rem;
}

.footer .version-info,
.footer .copyright {
    color: var(--colour-text-faded);
}

@media (max-width: 639px) {
    .footer {
        padding-block-end: 6rem;
    }
}
</style>
