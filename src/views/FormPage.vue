<template>
  <div id="form" class="v-form-page">
    <CloseButton :greeting="greeting" />
    <AppEditor />
    <AppPreview />
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
      greeting: "Hello world!"
    };
  }
};
</script>