import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './assets/css/index.css'
import VantageUi from 'vantage-ui'
require('vantage-ui/src/lib-components/utils/content')

createApp(App)
  .use(VantageUi, {
    color: 'lightBlue'
  })
  .use(store)
  .use(router)
  .mount('#app')
