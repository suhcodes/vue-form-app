import Vue from 'vue';
import Router from 'vue-router';
import EditorPage from './views/EditorPage.vue';
import AppListPage from './views/AppListPage.vue';
import ViewAppPage from './views/ViewAppPage.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'New App',
      component: EditorPage,
    },
    {
      path: '/list',
      name: 'Apps List',
      component: AppListPage,
    },
    {
      path: '/view/:id',
      name: 'App Editor',
      component: ViewAppPage,
    },
  ],
});
