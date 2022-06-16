import { createApp } from 'vue'
import App from './App.vue'
import { Quasar } from 'quasar'
import router from './router'
import store from './store'
import 'quasar/src/css/index.sass'
import '@quasar/extras/material-icons/material-icons.css'

createApp(App)
  .use(store)
  .use(router)
  .use(Quasar, {
    plugins: {} // import Quasar plugins and add here
  })
  .mount('#app')
