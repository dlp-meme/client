import '@app/styles/main.scss';

import { createPinia } from 'pinia';
import { createApp } from 'vue';

import App from '@/app/app.vue';
import router from '@app/router';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount('#app');
