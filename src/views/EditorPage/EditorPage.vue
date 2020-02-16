<template>
  <div id="editor" class="v-editor-page">
    <AppCloseButton :input-checker="inputChecker" />
    <AppEditor
      @changeAppName="appInfo.name = $event"
      @changeAppIcon="appInfo.iconFile = $event"
      @changeAppBg="appInfo.bg = $event"
      @changeAppCategory="appInfo.category = $event"
    />
    <AppPreview :app-info="appInfo" />
  </div>
</template>

<script>
import AppEditor from '@/components/AppEditor/AppEditor.vue';
import AppPreview from '@/components/AppPreview/AppPreview.vue';
import AppCloseButton from '@/components/AppCloseButton/AppCloseButton.vue';

export default {
  name: 'EditorPage',
  components: {
    AppEditor,
    AppPreview,
    AppCloseButton,
  },
  data() {
    return {
      appInfo: {
        name: '',
        iconFile: null,
        bg: '',
        category: '',
      },
      inputChecker: false,
    };
  },
  methods: {
    inputValidator() {
      // this.inputChecker = this.inputChecker ? true : false;
    },
  },
};
</script>

<style lang="scss">
  @import '@/styles/main.scss';
  @import './EditorPage.scss';
</style>
