import Vue from 'vue';
import Router from 'vue-router';
import EditorPage from './views/EditorPage/EditorPage.vue';
import AppListPage from './views/AppListPage/AppListPage.vue';

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
  ],
});
