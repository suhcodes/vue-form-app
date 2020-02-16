<template>
  <div class="v-editor">
    <div class="v-editor__header">
      <h2>Create Your App</h2>
    </div>
    <div class="v-editor__fieldset">
      <fieldset>
        <div class="v-editor__fieldset__input-group">
          <label for="appName">App Name</label>
          <input
            type="text"
            name="appName"
            id="appName"
            placeholder="Enter App Dysplay Name"
            maxlength="50"
            @keyup="changeAppName"
          />
        </div>
        <div class="v-editor__fieldset__input-group">
          <label for="appIcon">
            <span class="v-file-label">App Icon</span>
            <div class="v-mock">
              <span class="v-mock__input">{{ appIcon || 'Select a file' }}</span>
              <span class="v-mock__btn">Select a File</span>
            </div>
          </label>
          <input
            type="file"
            name="appIcon"
            id="appIcon"
            @change="changeAppIcon"
          />
        </div>
        <div class="v-editor__fieldset__input-group">
          <label for="iconBackground">
            <span class="v-file-label">Icon's Background Color</span>
            <div class="v-mock">
              <span class="v-mock__input color-picker">Pick a Color</span>
              <span class="v-mock__btn color-picker">{{ appBg || '#333' }}</span>
            </div>
          </label>
          <input
            type="color"
            name="iconBackground"
            id="iconBackground"
            @change="changeAppBg"
          />
        </div>
        <div class="v-editor__fieldset__input-group">
          <label for="appCategory">Select a Category</label>
          <select name="appCategory" id="appCategory" @change="changeAppCategory">
            <optgroup>
              <option value="Category 1">Category 1</option>
              <option value="Category 2">Category 2</option>
              <option value="Category 3">Category 3</option>
            </optgroup>
          </select>
        </div>
      </fieldset>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      appIcon: '',
      appBg: '',
      appIconFileType: '',
    };
  },
  methods: {
    changeAppName(event) {
      this.$emit('changeAppName', event.target.value);
    },
    changeAppIcon(event) {
      this.appIcon = event.target.files[0].name;
      this.appIconFileType = event.target.files[0].type;
      if (this.appIconFileType.indexOf('image') > -1) {
        this.$emit('changeAppIcon', URL.createObjectURL(event.target.files[0]));
      } else {
        this.appIcon = 'Error: File is not an image';
      }
    },
    changeAppBg(event) {
      this.appBg = event.target.value;
      this.$emit('changeAppBg', event.target.value);
    },
    changeAppCategory(event) {
      this.$emit('changeAppCategory', event.target.value);
    },
  },
};
</script>

<style lang="scss">
  @import '@/styles/main.scss';
  @import './AppEditor.scss';
</style>
