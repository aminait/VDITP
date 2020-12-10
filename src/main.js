import Vue from 'vue'
import App from './App.vue'
import vueDebounce from 'vue-debounce'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import store from "./store"
import Router from 'vue-router'
import router from './router'

Vue.use(Router)

Vue.config.productionTip = false
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

// Setting a different event to listen to
Vue.use(vueDebounce, {
  listenTo: 'b-form-input'
})

