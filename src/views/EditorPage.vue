<template>
  <div id="form" class="v-form-page">
    <AppCloseButton />
    <AppEditor :app-info="appInfo"
      @changeAppName="appInfo.name = $event"
      @changeAppCategory="appInfo.category = $event"
      @changeAppIcon="appInfo.iconFile = $event.appIconFile"
      @changeAppBg="appInfo.bg = $event"
    />
    <AppPreview :app-info="appInfo" />
  </div>
</template>

<script>
import AppEditor from '@/components/AppEditor/AppEditor.vue';
import AppPreview from '@/components/AppPreview/AppPreview.vue';
import AppCloseButton from '@/components/AppCloseButton/AppCloseButton.vue';

export default {
  name: 'FormPage',
  components: {
    AppEditor,
    AppPreview,
    AppCloseButton,
  },
  data() {
    return {
      appInfo: {
        name: 'App Name',
        icon: 'App Icon',
        iconFile: null,
        iconFileType: '',
        bg: '',
        category: 'Category',
      },
    };
  },
};
</script>
