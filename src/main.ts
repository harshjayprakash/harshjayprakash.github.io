import '@fontsource-variable/noto-sans/wght.css';
import '@fontsource-variable/overpass/wght.css';
import './assets/style/main.css';
import { createApp, type App } from 'vue';
import Main from './Main.vue';
import router from './router';

const app: App<Element> = createApp(Main);

app.use(router)

app.mount('#app');
