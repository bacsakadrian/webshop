import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import UIkit from 'uikit'
import Icons from 'uikit/dist/js/uikit-icons';


UIkit.use(Icons)

createApp(App).use(router).mount('#app')
