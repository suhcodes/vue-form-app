<template>
  <div class="v-view">
    <div class="v-view__header">
      <router-link to="/list"><span>&#8592;</span> App List</router-link>
      <router-link to="/">+ New App</router-link>
    </div>
    <AppPrototype :app-data="appData" />
  </div>
</template>

<script>
import axios from 'axios';
import AppPrototype from '@/components/AppPrototype/AppPrototype.vue';

export default {
  name: 'AppView',
  components: {
    AppPrototype,
  },
  data() {
    return {
      id: this.$route.params.id,
      appData: {
        name: String,
        background: String,
        category: String,
        icon: String,
      },
    };
  },
  async created() {
    try {
      const url = `http://localhost:3000/list/${this.id}`;
      const res = await axios.get(url);
      this.appData = {
        name: res.data.name,
        background: res.data.background,
        category: res.data.category,
        icon: res.data.icon,
      };
    } catch (e) {
      console.error(e);
    }
  },
};
</script>

<style lang="scss">
  @import './AppView.scss';
</style>
