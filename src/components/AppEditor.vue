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
            @keyup="changeAppName()"
            v-model="appName"
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
          <select
            name="appCategory"
            id="appCategory"
            @change="changeAppCategory()"
            v-model="appCategory"
          >
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
  props: {
    appName: { type: String },
    appIcon: { type: String },
    appIconFile: { type: File },
    appBg: { type: String },
    appCategory: { type: String }
  },
  methods: {
    changeAppName() {},
    changeAppIcon(event) {
      let file = event.target.files[0];
      this.appIcon = file.name;
      this.appIconFile = URL.createObjectURL(file);
    },
    changeAppBg(event) {
      this.appBg = event.target.value;
      this.$emit("changeAppBg", this.appBg);
    },
    changeAppCategory() {}
  }
};
</script>


<style lang="scss">
@import "../assets/scss/main";
.v-editor {
  label {
    text-transform: uppercase;
    letter-spacing: 0.05rem;
    display: block;
    font-family: $secondary-font;
    font-size: 14px;
  }
  input,
  select {
    margin: 1rem 0;
    width: 100%;
  }
  input[type="text"],
  select {
    padding: 0.75rem;
    border: 0.05rem solid $gray;
    border-radius: 5px;
    background-color: $white;
    font-size: 12px;
    &::placeholder {
      color: $secondary-color;
    }
  }
  select {
    color: $secondary-color;
  }
  input[type="file"],
  input[type="color"] {
    display: none;
  }
  &__fieldset {
    margin: 2rem 0;
  }

  .v-file-label {
    display: block;
  }

  .v-mock-input {
    margin: 1rem 0;
    width: calc(65% - 5px);
    display: inline-block;
    background-color: $white;
    padding: 0.8rem;
    color: $secondary-color;
    font-size: 12px;
    border: 0.05rem solid $gray;
    border-radius: 5px;
    background-color: $white;
    font-size: 12px;
    margin-right: 5px;
    font-family: $primary-font;
    text-transform: initial;
    letter-spacing: 0;
    &.color-picker {
      width: 70%;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
      border-left: none;
      margin: 0;
    }
  }

  .v-mock-btn {
    margin: 1rem 0;
    width: 35%;
    display: inline-block;
    background-color: $secondary-color;
    padding: 0.8rem;
    border: 0.05rem solid $gray;
    border-radius: 5px;
    font-size: 12px;
    text-align: center;
    color: $white;
    font-family: $primary-font;
    letter-spacing: 0;
    font-weight: bold;
    &.color-picker {
      width: 30%;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      border-left: none;
      background-color: $dark-gray;
    }
  }
}
</style>