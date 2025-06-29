<script setup lang="ts">
import { metaData } from '@/data/meta';
</script>

<template>
    <footer class="footer" aria-label="Site Footer">
        <small class="version-info">
            Version {{ metaData.version }}, {{ metaData.buildDate }}. Under Construction.
        </small>
        <small class="copyright">
            &copy; {{ metaData.copyrightYear }} Harsh Jayprakash. Handcrafted with Vue.
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

@media (max-width: 767px) {
    .footer {
        padding-block-end: 6rem;
    }
}
</style>
