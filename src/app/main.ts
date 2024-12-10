import '@app/styles/main.scss';

import { createPinia } from 'pinia';
import { createApp } from 'vue';

import ConfigProvider from '@app/config-provider.vue';
import router from '@app/router';

const app = createApp(ConfigProvider);

app.use(createPinia());
app.use(router);

app.mount('#app');
