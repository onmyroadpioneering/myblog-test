import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import {router} from './route/router'
import store from './store/index'


//import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
//import VueLazyload from 'vue-lazyload'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(store)
//app.use(BootstrapVue)
//app.use(IconsPlugin)

//app.use(VueLazyload)
app.mount('#app')
