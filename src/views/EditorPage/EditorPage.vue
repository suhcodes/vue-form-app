<template>
  <div id="editor" class="v-editor-page">
    <AppCloseButton
      @clickedToClose="appModalCheck = $event"
    />
    <AppEditor
      @changeAppName="appInfo.name = $event"
      @changeAppIcon="appInfo.iconFile = $event"
      @changeAppBg="appInfo.bg = $event"
      @changeAppCategory="appInfo.category = $event"
    />
    <AppPreview :app-info="appInfo" />
    <AppModal
      v-if="appModalCheck"
      :modal-check="appModalCheck"
      @cancelAction="appModalCheck = $event"
    />
  </div>
</template>

<script>
import AppEditor from '@/components/AppEditor/AppEditor.vue';
import AppPreview from '@/components/AppPreview/AppPreview.vue';
import AppCloseButton from '@/components/AppCloseButton/AppCloseButton.vue';
import AppModal from '@/components/AppModal/AppModal.vue';

export default {
  name: 'EditorPage',
  components: {
    AppEditor,
    AppPreview,
    AppCloseButton,
    AppModal,
  },
  data() {
    return {
      appInfo: {
        name: '',
        iconFile: null,
        bg: '',
        category: '',
        inputChecker: false,
      },
      appModalCheck: false,
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
