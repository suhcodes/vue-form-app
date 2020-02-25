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
      const url = `http://192.168.1.9:3000/list/${this.id}`;
      const res = await axios.get(url);
      this.appData.name = res.data.name;
      this.appData.background = res.data.background;
      this.appData.category = res.data.category;
      this.appData.icon = res.data.icon;
    } catch (e) {
      console.error(e);
    }
  },
};
</script>

<style lang="scss">
  @import './AppView.scss';
</style>
