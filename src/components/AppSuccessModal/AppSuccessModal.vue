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
        <router-link to="/list"><button class="btn btn-success">Ok</button></router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  @import './AppSuccessModal.scss';
</style>
