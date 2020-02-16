<template>
  <div class="v-list">
    <h2>Welcome to your apps list!</h2>
    <ul class="v-list__ul">
      <li class="v-list__ul-item" v-for="app in appList" :key="app.id">
        <p>{{ app.name }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      appList: [],
    };
  },
  async created() {
    try {
      const res = await axios.get('http://localhost:3000/list');
      this.appList = res.data;
      console.log(res.data);
    } catch (e) {
      console.error(e);
    }
  },
};
</script>

<style lang="scss">
  @import '@/styles/main.scss';
  @import './AppList.scss';
</style>
