import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './assets/css/index.css'
import VantageUi from 'vantage-ui'
import VueGtag from 'vue-gtag'
require('vantage-ui/src/lib-components/utils/content')

createApp(App)
  .use(VantageUi, {
    color: 'lightBlue'
  })
  .use(VueGtag, {
    appName: 'DeltaV Creative',
    pageTrackerScreenviewEnabled: true,
    config: { id: 'G-YN1RDSJP64' }
  }, router)
  .use(store)
  .use(router)
  .mount('#app')
