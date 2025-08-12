import { createApp } from 'vue';
import '@fontsource-variable/inter/opsz';
import '@fontsource-variable/material-symbols-rounded/index';
import '@fontsource-variable/material-symbols-rounded/fill';

import '@/assets/css/main.css';
import MainComponent from '@/MainComponent.vue';
import router from '@/router';

const app = createApp(MainComponent);
app.use(router);
app.mount('#app');
