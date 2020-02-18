<template>
  <div class="v-list">
    <h2>Apps List</h2>
    <ul class="v-list__ul" v-if="appList.length">
      <li class="v-list__ul__item"
        v-for="app in appList"
        :key="app.id"
        :style="{ borderColor: app.background}">
        <p><span>{{ app.name }}</span><span>{{ app.category }}</span></p>
      </li>
    </ul>
    <p class="v-list__empty" v-if="!appList.length">Oops!<br /> You don't have any apps yet :(</p>
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
    } catch (e) {
      console.error(e);
    }
  },
};
</script>

<style lang="scss">
  @import './AppList.scss';
</style>
