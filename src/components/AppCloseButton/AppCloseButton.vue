<template>
  <button id="closeForm" @click="clickedToClose">&times;</button>
</template>

<script>
export default {
  methods: {
    clickedToClose() {
      this.$emit('clickedToClose', true);
    },
  },
};
</script>

<style lang="scss">
  @import '@/styles/main.scss';
  @import './AppCloseButton.scss';
</style>
