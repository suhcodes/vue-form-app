<template>
  <div class="v-editor">
    <div class="v-editor__header">
      <h2>Create Your App</h2>
    </div>
    <div class="v-editor__fieldset">
      <fieldset>
        <div>
          <label for="appName">App Name</label>
          <input type="text" name="appName" id="appName" />
        </div>
        <div>
          <label for="appIcon">App Icon</label>
          <input type="file" name="appIcon" id="appIcon" />
        </div>
        <div>
          <label for="iconBackground">Icon's Background Color</label>
          <input type="color" name="iconBackground" id="iconBackground" />
        </div>
        <div>
          <label for="appCategory">Select a Category</label>
          <select name="appCategory" id="appCategory">
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