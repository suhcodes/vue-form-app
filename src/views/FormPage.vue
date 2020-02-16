<template>
  <div id="form" class="v-form-page">
    <CloseButton />
    <AppEditor :app-info="appInfo" @changeAppName="appInfo.AppName = $event" />
    <AppPreview :app-info="appInfo" />
  </div>
</template>

<script>
import AppEditor from '@/components/AppEditor/AppEditor.vue';
import AppPreview from '@/components/AppPreview/AppPreview.vue';
import CloseButton from '@/components/CloseButton/CloseButton.vue';

export default {
  name: 'FormPage',
  components: {
    AppEditor,
    AppPreview,
    CloseButton,
  },
  data() {
    return {
      appInfo: {
        name: 'App Name',
        icon: 'App Icon',
        iconFile: File,
        iconFileType: '',
        bg: '',
        category: 'Category',
      },
    };
  },
};
</script>
