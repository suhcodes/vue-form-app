<template>
  <div id="inputIcon" class="v-editor__fieldset__input-group">
    <label for="appIcon">
      <span class="v-file-label">App Icon</span>
      <div
        class="v-mock"
        :class="{ 'v-mock-dragging': isDragging}"
        @dragenter="dragEnter"
        @dragleave="dragLeave"
        @dragover.prevent
        @drop.prevent="onDrop"
      >
        <span class="v-mock__input">{{ appIcon || 'Select a file' }}</span>
        <span class="v-mock__btn btn">Select a File</span>
      </div>
    </label>
    <input
      type="file"
      name="appIcon"
      id="appIcon"
      @change="iconChanged"
    />
  </div>
</template>

<script>
export default {
  props: {
    appIcon: {
      type: String,
    },
  },
  data() {
    return {
      isDragging: false,
    };
  },
  methods: {
    iconChanged(event) {
      this.$emit('fileUploaded', event.target.files[0]);
    },
    dragEnter(event) {
      event.preventDefault();
      this.isDragging = true;
    },
    dragLeave(event) {
      event.preventDefault();
      this.isDragging = false;
    },
    onDrop(event) {
      event.preventDefault();
      event.stopPropagation();
      this.$emit('fileUploaded', event.dataTransfer.files[0]);
      this.isDragging = false;
    },
  },
};
</script>

<style lang="scss">
  @import '@/styles/main.scss';
  @import './AppInputFile.scss';
</style>
