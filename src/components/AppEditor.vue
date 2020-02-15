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
            @keyup="changeAppName"
          />
        </div>
        <div class="v-editor__fieldset__input-group">
          <label for="appIcon">
            <span class="v-file-label">App Icon</span>
            <span class="v-mock-input">Select a File</span>
            <span class="v-mock-btn">Select a File</span>
          </label>
          <input type="file" name="appIcon" id="appIcon" @change="changeAppIcon" />
        </div>
        <div class="v-editor__fieldset__input-group">
          <label for="iconBackground">
            <span class="v-file-label">Icon's Background Color</span>
            <span class="v-mock-input color-picker">Pick a Color</span>
            <span class="v-mock-btn color-picker">Pick a Color</span>
          </label>
          <input type="color" name="iconBackground" id="iconBackground" @change="changeAppBg" />
        </div>
        <div class="v-editor__fieldset__input-group">
          <label for="appCategory">Select a Category</label>
          <select name="appCategory" id="appCategory" @change="changeAppCategory">
            <optgroup>
              <option value="Default">Select</option>
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
  props: ['app-info'],
  methods: {
    changeAppName(event) {
      const appName = event.target.value;
      // eslint-disable-next-line
      console.log(appName);
      this.$emit('changeAppName', appName);
    },
    changeAppIcon(event) {
      const file = event.target.files[0];
      const appIconFileType = file.type;
      const appIcon = file.name;
      const appIconFile = URL.createObjectURL(file);
      // eslint-disable-next-line
      console.log(file, appIconFileType, appIcon, appIconFile);
      // this.$emit('changeAppIcon', {appIconFileType, appIcon, appIconFile});
    },
    changeAppBg(event) {
      const appBg = event.target.value;
      // eslint-disable-next-line
      console.log(appBg);
      // this.$emit('changeAppBg', appBg);
    },
    changeAppCategory(event) {
      const appCategory = event.target.value;
      // eslint-disable-next-line
      console.log(appCategory);
      // this.$emit('changeAppBg', appCategory);
    },
  },
};
</script>
