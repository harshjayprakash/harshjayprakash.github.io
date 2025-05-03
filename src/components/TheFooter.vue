<script lang="ts" setup>
import getMetaData from '@/data/metadata';

const { copyrightYear, epochSemanticVersion, calendarVersion, buildDate } = getMetaData();
</script>

<template>
    <footer class="footer">
        <small>
            Version {{ epochSemanticVersion }} &mdash; {{ calendarVersion }},
            {{ buildDate }} Under Construction.
        </small>
        <small>
            Copyright &copy; {{ copyrightYear }} Harsh Jayprakash. Handcrafted with Vue.
        </small>
    </footer>
</template>

<style lang="css" scoped>
.footer {
    display: flex;
    flex-direction: column;
    padding-block: 2rem;
}
</style>
