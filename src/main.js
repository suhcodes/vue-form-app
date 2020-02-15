import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import FormPage from './views/FormPage'
import AppListPage from './views/AppListPage'
import ViewAppPage from './views/ViewAppPage'

Vue.use(VueRouter)

Vue.config.productionTip = false

const router = new VueRouter({
  routes: [
    { path: '/', component: FormPage },
    { path: '/list', component: AppListPage },
    { path: '/edit/:id', component: ViewAppPage }
  ],
  mode: 'history'
})

Vue.use(VueRouter)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
