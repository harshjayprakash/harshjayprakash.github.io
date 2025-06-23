import { createApp } from 'vue';

import '@fontsource-variable/inter';
import '@/assets/css/main.css';

import MainComponent from './MainComponent.vue';

const app = createApp(MainComponent);
app.mount('#app');
