<template>
  <div class="v-view">
    <div class="v-view__header">
      <router-link to="/list"><span>&#8592;</span> App List</router-link>
      <router-link to="/">+ New App</router-link>
    </div>
    <div class="v-view__prototype">
      <div class="v-view__prototype-box">
        <div class="v-view__prototype-box__header"
          :style="{ backgroundColor: this.appData.background }">
          <h1>{{ this.appData.name }}</h1>
        </div>
        <div class="v-view__prototype-box__body">
          <div class="v-view__prototype-box__body-message">
            <h2></h2>
            <p></p>
            <p></p>
            <p></p>
          </div>
          <div class="v-view__prototype-box__body-list">
            <ul>
              <li class="v-checked"
                :style="{ backgroundColor: `${this.appData.background}99` }"></li>
              <li></li>
              <li class="v-checked"
                :style="{ backgroundColor: `${this.appData.background}99` }"></li>
              <li></li>
            </ul>
          </div>
          <div class="v-view__prototype-box__body-text"></div>
          <div class="v-view__prototype-box__body-button">
            <button :style="{ backgroundColor: `${this.appData.background}99` }"></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'AppView',
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
      this.appData.name = res.data.name;
      this.appData.background = res.data.background;
      this.appData.category = res.data.category;
      this.appData.icon = res.data.icon;
      console.log(res.data);
    } catch (e) {
      console.error(e);
    }
  },
};
</script>

<style lang="scss">
  @import './AppView.scss';
</style>
