import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

// loads the Icon plugin
UIkit.use(Icons);

createApp(App).use(router).mount('#app')
