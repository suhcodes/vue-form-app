<template>
  <div id="editor" class="v-editor-page" :class="{ 'v-float-preview' : floatPreview }">
    <AppCloseButton
      @clickedToClose="AppExitModalCheck = $event"
    />
    <AppEditor
      @changeAppName="appInfo.name = $event"
      @changeAppIcon="appInfo.iconFile = $event"
      @changeAppBg="appInfo.bg = $event"
      @changeAppCategory="appInfo.category = $event"
      @floatPreview="floatPreview = $event"
      @dataSavedSuccess="dataSavedModalCheck = $event"
    />
    <AppPreview
      :app-info="appInfo"
      :float-preview="floatPreview"
    />
    <AppExitModal
      v-if="AppExitModalCheck"
      @cancelAction="AppExitModalCheck = $event"
    />
    <AppSuccessModal v-if="dataSavedModalCheck" />
  </div>
</template>

<script>
import AppEditor from '@/components/AppEditor/AppEditor.vue';
import AppPreview from '@/components/AppPreview/AppPreview.vue';
import AppCloseButton from '@/components/AppCloseButton/AppCloseButton.vue';
import AppExitModal from '@/components/AppExitModal/AppExitModal.vue';
import AppSuccessModal from '@/components/AppSuccessModal/AppSuccessModal.vue';

export default {
  name: 'EditorPage',
  components: {
    AppEditor,
    AppPreview,
    AppCloseButton,
    AppExitModal,
    AppSuccessModal,
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
      AppExitModalCheck: false,
      floatPreview: false,
      dataSavedModalCheck: false,
    };
  },
};
</script>

<style lang="scss">
  @import '@/styles/main.scss';
  @import './EditorPage.scss';
</style>
