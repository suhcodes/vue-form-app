<template>
  <div class="v-view-page">
    <AppEditor />
    <AppPreview />
  </div>
</template>

<script>
import AppEditor from '@/components/AppEditor/AppEditor.vue';
import AppPreview from '@/components/AppPreview/AppPreview.vue';

export default {
  name: 'ViewAppPage',
  components: {
    AppEditor,
    AppPreview,
  },
  data() {
    return {};
  },
};
</script>
