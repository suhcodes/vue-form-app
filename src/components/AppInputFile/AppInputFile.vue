<template>
  <div id="inputIcon" class="v-editor__fieldset__input-group"
    :class="{ 'v-warning' : isMultipleFiles }">
    <label for="appIcon">
      <span class="v-file-label">App Icon</span>
      <div class="v-mock"
        :class="{ 'v-mock-dragging': isDragging }"
        @dragenter="dragEnter"
        @dragleave="dragLeave"
        @dragover.prevent
        @drop="onDrop">
        <span class="v-mock__input">{{ appIcon || 'Select a file' }}</span>
        <span class="v-mock__btn btn">Select a File</span>
      </div>
    </label>
    <input type="file" name="appIcon" id="appIcon" @change="iconChanged($event.target.files[0])" />
  </div>
</template>

<script>
export default {
  name: 'AppInputFile',
  props: {
    appIcon: {
      type: String,
    },
  },
  data() {
    return {
      isDragging: false,
      isMultipleFiles: false,
    };
  },
  methods: {
    iconChanged(file) {
      this.$emit('fileUploaded', file);
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
      this.isDragging = false;
      this.detectMultipleFIles(event.dataTransfer.files);
    },
    detectMultipleFIles(files) {
      if (files.length === 1) this.iconChanged(files[0]);
      else this.isMultipleFiles = true;
      setTimeout(() => { this.isMultipleFiles = false; }, 5000);
    },
  },
};
</script>

<style lang="scss">
  @import './AppInputFile.scss';
</style>
