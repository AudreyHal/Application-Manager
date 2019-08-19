import Vue from 'vue'
import App from './App.vue'
import './assets/css/main.css'
import  routes from './assets/js/routes.js'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

Vue.config.productionTip = false
// import routes from './routes';


const router = new VueRouter({routes: routes, mode:'history'});

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
