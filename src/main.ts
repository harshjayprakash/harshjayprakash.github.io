import { createApp } from 'vue';

import '@fontsource-variable/inter/opsz';
import '@fontsource-variable/inter/opsz-italic';
import '@/assets/stylesheets/main.css';

import AppComponent from '@/AppComponent.vue';
import router from '@/router';

const app = createApp(AppComponent);
app.use(router);
app.mount('#app');
