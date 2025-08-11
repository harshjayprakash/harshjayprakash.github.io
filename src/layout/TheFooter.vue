<script setup lang="ts">
import TheBadge from '@/components/TheBadge.vue';
import TheDivider from '@/components/TheDivider.vue';
import TheLink from '@/components/TheLink.vue';
import { metaData } from '@/data/meta';
</script>

<template>
    <footer class="footer" aria-label="Site Footer">
        <TheDivider class="divider" orientation="horizontal" :margin="0.5"/>
        <small class="version-info">
            <TheBadge appearance="tint" colour="highlight">
                {{ metaData.buildStatus }}
            </TheBadge>
            Epoch Version {{ metaData.version.fullString() }},
            {{ metaData.buildDate }}. Under Construction.
        </small>
        <small class="copyright">
            <span>
                &copy; {{ metaData.copyrightYear }} Harsh Jayprakash. Handcrafted with
                Vue.
            </span>
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
    gap: 0.15rem;
}

.footer .version-info,
.footer .copyright {
    color: var(--colour-text-faded);
}

.footer .divider {
    margin-block: 1rem;
}

@media (max-width: 639px) {
    .footer {
        padding-block-end: 6rem;
    }
}
</style>
