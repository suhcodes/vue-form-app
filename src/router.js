import Vue from 'vue';
import Router from 'vue-router';
import AppEditorPage from './views/AppEditorPage/AppEditorPage.vue';
import AppListPage from './views/AppListPage/AppListPage.vue';
import AppView from './views/AppView/AppView.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'New App',
      component: AppEditorPage,
    },
    {
      path: '/list',
      name: 'Apps List',
      component: AppListPage,
    },
    {
      path: '/view/:id',
      name: 'App View',
      props: true,
      component: AppView,
    },
  ],
});
