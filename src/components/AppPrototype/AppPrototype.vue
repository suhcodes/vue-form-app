<template>
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
        <div class="v-view__prototype-box__body-message">
          <p></p>
          <p></p>
        </div>
        <div class="v-view__prototype-box__body-text"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppPrototype',
  props: {
    appData: {
      type: Object,
    },
  },
};
</script>

<style lang="scss">
  @import './AppPrototype.scss';
</style>
