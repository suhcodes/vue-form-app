<template>
  <div class="v-list" v-show="hasLoaded">
    <h2>Apps List</h2>
    <ul class="v-list__ul" v-if="appList.length">
      <li class="v-list__ul__item"
        v-for="app in appList"
        :key="app.id">
        <router-link :to="`view/${app.id}`">
          <p><span>{{ app.name }}</span><span>{{ app.category }}</span></p>
        </router-link>
        <button @click="clickedToRemove(app.id)"><span>&times;</span></button>
      </li>
    </ul>
    <p class="v-list__empty" v-else>Oops!<br /> You don't have any apps yet :(</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      appList: [],
      hasLoaded: false,
    };
  },
  methods: {
    async clickedToRemove(id) {
      try {
        axios.delete(`http://192.168.1.9:3000/list/${id}`);
        await this.getListApps();
      } catch (e) {
        console.error(e);
      }
    },
    async getListApps() {
      try {
        const res = await axios.get('http://192.168.1.9:3000/list');
        this.appList = res.data;
        this.hasLoaded = true;
      } catch (e) {
        console.error(e);
      }
    },
  },
  created() {
    this.getListApps();
  },
};
</script>

<style lang="scss">
  @import './AppList.scss';
</style>
