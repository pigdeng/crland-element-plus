<template>
     <editor
       api-key="huvi1dhiu3mhl98civm1np9u7c4hl96d3dpmt26gik7xp1lg"
       :init="completeSetting"
       initial-value="富文本编辑器"
       :disabled="disabled"
       v-model="myValue"
     />
 </template>

 <script lang="ts">
  import { defineComponent } from 'vue'
export default defineComponent({
      name: 'crland-tinymce-editor'
  })
</script>

 <script lang='ts' setup>
 import {
  computed,
  ref,
  defineEmits,
  watch,

} from 'vue';

 import Editor from '@tinymce/tinymce-vue'
 

 const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  setting: {
    type: Object,
    default: () => {},
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits(['update:modelValue']);

const myValue = ref(props.modelValue);

const completeSetting = computed(() => {
  return Object.assign(defaultSetting.value, props.setting);
});

watch(() => myValue.value, (newValue) => {
  emit('update:modelValue', newValue);
});

watch(() => props.modelValue, (newValue) => {
  myValue.value = newValue;
});

const defaultSetting = ref({
  language_url: '/tinymce/langs/zh-Hans.js',
  language: 'zh-Hans',
  skin_url: '/tinymce/skins/ui/oxide',
  content_css: '/tinymce/skins/content/default/content.min.css',
  //   skin_url: settingsStore.app.colorScheme === 'light' ? 'tinymce/skins/ui/oxide' : 'tinymce/skins/ui/oxide-dark',
  //   content_css: settingsStore.app.colorScheme === 'light' ? 'tinymce/skins/content/default/content.min.css' : 'tinymce/skins/content/dark/content.min.css',
  min_height: 250,
  max_height: 600,
  selector: 'textarea',
  plugins: 'autolink autoresize fullscreen image insertdatetime link lists media preview table wordcount code searchreplace',
  toolbar: 'undo redo | blocks | bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | forecolor backcolor removeformat | link image media table insertdatetime searchreplace | preview code fullscreen',
  branding: false,
  menubar: false,
  toolbar_mode: 'sliding',
  insertdatetime_formats: [
    '%Y年%m月%d日',
    '%H点%M分%S秒',
    '%Y-%m-%d',
    '%H:%M:%S',
  ],
  // https://www.tiny.cloud/docs/tinymce/6/file-image-upload/#images_upload_handler
  images_upload_handler: (blobInfo:any) => new Promise((resolve) => {
    console.log('blobInfo:', blobInfo);
    const img = `data:image/jpeg;base64,${blobInfo.base64()}`;
    resolve(img);
  }),
});

//  export default {
//    name: 'app',
//    components: {
//      'editor': Editor
//    }
//  }
 </script>