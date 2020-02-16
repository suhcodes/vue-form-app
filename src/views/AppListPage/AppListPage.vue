<template>
  <div class="v-list-page">
    <AppList />
    <router-link to="/">
      <button class="btn">Add new</button>
    </router-link>
  </div>
</template>

<script>
import AppList from '@/components/AppList/AppList.vue';

export default {
  name: 'AppListPage',
  components: {
    AppList,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss">
  @import '@/styles/main.scss';
  @import './AppListPage.scss';
</style>
