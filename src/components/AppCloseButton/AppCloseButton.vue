<template>
  <button id="closeForm" @click="clickedToClose">&times;</button>
</template>

<script>
export default {
  name: 'AppCloseButton',
  methods: {
    clickedToClose() {
      this.$emit('clickedToClose', true);
    },
  },
};
</script>

<style lang="scss">
  @import './AppCloseButton.scss';
</style>
