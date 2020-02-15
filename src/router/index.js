import Vue from 'vue';
import Router from 'vue-router';
import FormPage from '@/views/FormPage';
import AppListPage from '@/views/AppListPage';
import ViewAppPage from '@/views/ViewAppPage';

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', component: FormPage },
    { path: '/list', component: AppListPage },
    { path: '/edit/:id', component: ViewAppPage },
  ],
  mode: 'history',
});
