<template>
  <div class="v-overlay">
    <div class="v-modal">
      <div class="v-modal__header">
        <button id="closeModal">&times;</button>
      </div>
      <div class="v-modal__body">
        <p>If you close the editor all changes will be lost.</p>
        <p><strong>Are you sure?</strong></p>
      </div>
      <div class="v-modal__footer">
        <button class="btn btn-success">Ok</button>
        <button class="btn btn-cancel">Cancel</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  @import '@/styles/main.scss';
  @import './AppModal.scss';
</style>
