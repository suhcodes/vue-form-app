<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="scss">
#app {
  padding: 1rem;
  background-color: #eee;
  min-height: 100vh;
}
</style>