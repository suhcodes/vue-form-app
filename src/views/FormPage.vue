<template>
  <div id="form" class="v-form-page">
    <CloseButton />
    <AppEditor :app-info="appInfo" @changeAppName="appInfo.AppName = $event" />
    <AppPreview :app-info="appInfo" />
  </div>
</template>

<script>
import AppEditor from "../components/AppEditor";
import AppPreview from "../components/AppPreview";
import CloseButton from "../components/CloseButton";

export default {
  name: "FormPage",
  components: {
    AppEditor,
    AppPreview,
    CloseButton
  },
  data() {
    return {
      appInfo: {
        name: "App Name",
        icon: "App Icon",
        iconFile: File,
        iconFileType: "",
        bg: "",
        category: "Category"
      }
    };
  }
};
</script>