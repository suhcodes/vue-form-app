<template>
  <div class="v-preview">
    <h2>App's Card Preview</h2>
    <div class="v-preview__card">
      <div class="v-preview__card__img" :style="{ backgroundColor: appInfo.bg }">
        <span><img v-if="appInfo.iconFile" :src="appInfo.iconFile" /></span>
      </div>
      <div class="v-preview__card__info">
        <h3>{{ appInfo.name }}</h3>
        <p>{{ appInfo.category }}</p>
        <small>New App</small>
      </div>
    </div>
    <button>Save App</button>
  </div>
</template>

<script>
export default {
  props: ['app-info'],
  data() {
    return {};
  },
};
</script>

<style lang="scss">
  @import '@/styles/main.scss';
  @import './AppPreview.scss';
</style>
