<template>
  <div class="v-form-page">
    <AppEditor />
    <AppPreview />
    <button>close</button>
  </div>
</template>

<script>
import AppEditor from "../components/AppEditor";
import AppPreview from "../components/AppPreview";

export default {
  name: "FormPage",
  components: {
    AppEditor,
    AppPreview
  }
};
</script>