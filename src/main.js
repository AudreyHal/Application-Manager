import Vue from 'vue'
import App from './App.vue'
import './assets/css/main.css'
import  routes from './assets/js/routes.js'
import VueRouter from 'vue-router'
import  store  from './assets/js/store/store.js'
import { mapGetters } from 'vuex'

Vue.use(VueRouter)

Vue.config.productionTip = false

const router = new VueRouter({routes: routes, mode:'history'});

new Vue({
  render: h => h(App),
  router: router,
  store: store
}).$mount('#app')
