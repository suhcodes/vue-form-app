<template>
  <div class="v-overlay v-show">
    <div class="v-modal">
      <div class="v-modal__header">
        <button id="closeModal" @click="cancelAction">&times;</button>
      </div>
      <div class="v-modal__body">
        <p>If you close the editor all changes will be lost. <strong>Are you sure?</strong></p>
      </div>
      <div class="v-modal__footer">
        <router-link to="/list"><button class="btn btn-success">Yes</button></router-link>
        <button class="btn btn-cancel" @click="cancelAction">No</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppExitModal',
  methods: {
    cancelAction() {
      this.$emit('cancelAction', false);
    },
  },
};

</script>

<style lang="scss">
  @import './AppExitModal.scss';
</style>
