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
  props: ["app-info"],
  data() {
    return {};
  }
};
</script>

<style lang="scss">
@import "../assets/scss/main";
.v-preview {
  margin: 2rem 0;
  padding-top: 1rem;
  border-top: 0.05rem solid $gray;
  h2 {
    text-transform: uppercase;
    letter-spacing: 1px;
    font-family: $secondary-font;
  }
  button {
    width: 100%;
    background-color: $secondary-color;
    font-family: $secondary-font;
    color: $white;
    padding: 0.75rem;
    text-transform: uppercase;
    border-radius: 5px;
  }
  &__card {
    display: flex;
    border: 0.05rem solid $gray;
    border-radius: 5px;
    overflow: hidden;
    margin: 1rem 0;
    &__img {
      width: 100px;
      height: 100px;
      background-color: $dark-gray;
      img {
        margin: 10px;
        background-color: $white;
        width: 90px;
        height: 90px;
        padding: 40px;
        border-radius: 100%;
      }
    }
    &__info {
      height: 100px;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      padding: 0 0.75rem;
      width: calc(100% - 100px);
      background-color: $lighter-gray;
      p {
        font-size: 14px;
      }
      small {
        font-size: 12px;
        font-weight: bold;
      }
    }
  }
}
</style>