import { createApp } from 'vue';

import '@fontsource-variable/inter';
import '@/assets/css/main.css';

import MainComponent from './MainComponent.vue';
import router from './router';

const app = createApp(MainComponent);
app.use(router);
app.mount('#app');
