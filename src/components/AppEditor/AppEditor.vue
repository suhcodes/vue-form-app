<template>
  <div class="v-editor">
    <div class="v-editor__header">
      <h2>Create Your App</h2>
    </div>
    <div class="v-editor__fieldset">
      <fieldset>
        <div class="v-editor__fieldset__input-group" id="inputName">
          <label for="appName">App Name</label>
          <input type="text" name="appName" id="appName" placeholder="Enter App Display Name"
            autocomplete="off"
            maxlength="50"
            @keyup="changeAppName"
            @focusin="floatPreview(true)"
            @focusout="floatPreview(false)" />
        </div>
        <AppInputFile :app-icon="appIcon" @fileUploaded="changeAppIcon($event)" />
        <div class="v-editor__fieldset__input-group" id="inputBackground">
          <label for="iconBackground">
            <span class="v-file-label">Icon's Background Color</span>
            <div class="v-mock">
              <span class="v-mock__input color-picker" id="appBackground">Pick a Color</span>
              <span class="v-mock__btn color-picker">{{ appBg || '...' }}</span>
            </div>
          </label>
          <input type="color" name="iconBackground" id="iconBackground" @change="changeAppBg" />
        </div>
        <div class="v-editor__fieldset__input-group" id="inputCategory">
          <label for="appCategory">Select a Category</label>
          <select name="appCategory" id="appCategory" @change="changeAppCategory">
            <optgroup>
              <option value="Default">Select a category</option>
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
import AppInputFile from '@/components/AppInputFile/AppInputFile.vue';

export default {
  name: 'AppEditor',
  components: {
    AppInputFile,
  },
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
    changeAppIcon(file) {
      this.appIcon = file.name;
      this.appIconFileType = file.type;
      if (this.appIconFileType.indexOf('image') > -1) this.$emit('changeAppIcon', URL.createObjectURL(file));
      else this.appIcon = 'Error: File is not an image';
    },
    changeAppBg(event) {
      this.appBg = event.target.value;
      this.$emit('changeAppBg', event.target.value);
    },
    changeAppCategory(event) {
      this.$emit('changeAppCategory', event.target.value);
    },
    floatPreview(check) {
      this.$emit('floatPreview', check);
    },
  },
};
</script>

<style lang="scss">
  @import './AppEditor.scss';
</style>
