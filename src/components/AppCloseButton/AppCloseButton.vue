<template>
  <button id="closeForm"><router-link to="/list">&times;</router-link></button>
</template>

<script>
export default {
  props: {
    inputChecker: {
      type: Boolean,
    },
  },
};
</script>

<style lang="scss">
  @import '@/styles/main.scss';
  @import './AppCloseButton.scss';
</style>
