<template>
  <div class="v-overlay v-show" :class="{ 'v-show': appModalCheck }">
    <div class="v-modal">
      <div class="v-modal__header">
        <button id="closeModal">&times;</button>
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
  props: {
    appModalCheck: {
      type: Boolean,
    },
  },
  methods: {
    cancelAction() {
      this.$emit('cancelAction', false);
    },
  },
};

</script>

<style lang="scss">
  @import '@/styles/main.scss';
  @import './AppModal.scss';
</style>
