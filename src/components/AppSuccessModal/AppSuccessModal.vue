<template>
  <div class="v-overlay v-show">
    <div class="v-modal-success">
      <div class="v-modal-success__header">
        <router-link to="/list"><button id="closeModal">&times;</button></router-link>
      </div>
      <div class="v-modal-success__body">
        <p>Your app has been saved!</p>
      </div>
      <div class="v-modal-success__footer">
        <router-link
          :to="`view/${ this.resData.id }`">
          <button class="btn btn-success">View App</button>
        </router-link>
        <router-link to="/list"><button class="btn btn-success">App List</button></router-link>
        <router-link to="/"><button class="btn btn-success">Add New</button></router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppSuccessModal',
  props: {
    resData: {
      type: Object,
    },
  },
};
</script>

<style lang="scss">
  @import './AppSuccessModal.scss';
</style>
