<template>
  <div class="v-preview">
    <h2>App's Card Preview</h2>
    <div class="v-preview__card">
      <div class="v-preview__card__img">
        <img src alt />
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
