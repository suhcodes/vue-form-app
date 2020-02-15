<template>
  <div class="v-view-page">
    <AppEditor />
    <AppPreview />
  </div>
</template>

<script>
import AppEditor from '@/components/AppEditor';
import AppPreview from '@/components/AppPreview';

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
