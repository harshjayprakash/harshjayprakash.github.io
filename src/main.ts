import { createApp } from 'vue';

import '@fontsource-variable/inter';
import '@/assets/styles/main.css';

import MainComponent from '@/MainComponent.vue';
import router from '@/router';

const app = createApp(MainComponent);
app.use(router)
app.mount('#app');
