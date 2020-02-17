<template>
  <div class="v-preview" :class="{ 'v-float': floatPreview }">
    <h2>App's Card Preview</h2>
    <div class="v-preview__card">
      <div class="v-preview__card__img" :style="{ backgroundColor: appInfo.bg }">
        <span><img v-if="appInfo.iconFile" :src="appInfo.iconFile" /></span>
      </div>
      <div class="v-preview__card__info">
        <h3>{{ appInfo.name || 'App Name' }}</h3>
        <p>{{ appInfo.category || 'Category 1' }}</p>
        <small>New App</small>
      </div>
    </div>
    <button
      class="btn"
      @click="checkDataInput">
      Save App
    </button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  props: {
    appInfo: {
      type: Object,
    },
    floatPreview: {
      type: Boolean,
    },
  },
  methods: {
    checkDataInput() {
      if (!this.appInfo.name) this.alertErr('Name');
      else if (!this.appInfo.iconFile) this.alertErr('Icon');
      else if (!this.appInfo.bg) this.alertErr('Background');
      else if (!this.appInfo.category) this.alertErr('Category');
      else this.postRequestFake();
    },
    alertErr(str) {
      const el = document.getElementById(`input${str}`);
      el.classList.add('err');
      el.scrollIntoView();
      setTimeout(() => {
        el.classList.remove('err');
      }, 5000);
    },
    postRequestFake() {
      this.$emit('dataSavedSuccess', true);
    },
    async postRequest() {
      const data = {
        name: this.appInfo.name,
        icon: this.appInfo.iconFile,
        background: this.appInfo.bg,
        category: this.appInfo.category,
      };
      const url = 'http://localhost:3000/list';
      const res = await axios.post(url, data).then(() => { console.log('fez post'); });
      console.log(res);
      this.$emit('dataSavedSuccess', true);
    },
  },
};
</script>

<style lang="scss">
  @import '@/styles/main.scss';
  @import './AppPreview.scss';
</style>
