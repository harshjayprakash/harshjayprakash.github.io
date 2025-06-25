<script setup lang="ts">
import { metaData } from '@/data/meta';
</script>

<template>
    <footer class="footer">
        <small>
            Version {{ metaData.version }}, {{ metaData.buildDate }}. Under Construction.
        </small>
        <small>
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
</style>
