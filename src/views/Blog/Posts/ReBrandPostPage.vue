<template>
    <section class="blog-post">
        <h1 class="blog-post__title">Rebrand.</h1>
        <div class="blog-post__content">
            <p>A rebrand serves as redefining how.</p>
        </div>
    </section>
</template>

<script lang="ts">
import OctogonComponent from '@/components/ui/OctogonComponent.vue';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'ReBrandPostPage',
    components: { OctogonComponent },
});
</script>

<style lang="css" scoped>
.blog-post__image {
    padding: 1rem;
}

.blog-post__content {
    max-width: 80ch;
}
</style>