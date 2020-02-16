<template>
  <div class="v-list-page">
    <AppList />
    <button>
      <router-link to="/">Add new</router-link>
    </button>
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
