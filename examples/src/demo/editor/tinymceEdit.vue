<template>
  <el-row class="mb-4">
    <crland-button shadow type="primary" @click="getHtml"
      >获取 html</crland-button
    >
    <crland-button shadow type="success" @click="setEdit">
      {{ !disabled ? "设置不可编辑" : "设置可编辑" }}</crland-button
    >
  </el-row>
  <br />
  <crland-tinymce-editor
    v-model="value"
    :disabled="disabled"
    :setting="setting"
  ></crland-tinymce-editor>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { ElMessage, ElRow } from "element-plus";
import { CrlandTinymceEditor, CrlandButton } from "crland-base";
import axios from "axios";
const value = ref(`<p>富文本编辑器</p>`);
const disabled = ref(false);
// 这里是路径
let CODE_PATH;
try {
  CODE_PATH = import.meta.env.VITE_CODE_PATH;
} catch (error) {
  CODE_PATH = process.env.VUE_APP_CODE_PATH;
}
const setting = ref({
  language_url: `${CODE_PATH}/tinymce/langs/zh-Hans.js`,
  language: "zh-Hans",
  skin_url: `${CODE_PATH}/tinymce/skins/ui/oxide`,
  content_css: `${CODE_PATH}/tinymce/skins/content/default/content.min.css`,
  images_upload_handler: (blobInfo: any) =>
    new Promise((resolve) => {
      // 新建form表单类型的数据
      const formData = new FormData();
      // 将我们上传的图片地址$file加进表单里面，命名为“file”（参数名字与后端相匹配）
      formData.append("file", blobInfo.blob());
      axios({
        url: "/update", // 请求地址
        method: "POST",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      })
        .then((res: any) => {
          if (res.status === 200) {
            // 将后端返回的url放在md中图片的指定位置
            resolve(res.data);
            ElMessage.success("上传成功");
          } else {
            ElMessage.warning(res.message);
          }
        })
        .catch((err) => {
          ElMessage.warning(err.message);
          //   因为没有上传接口，这里模拟上传失败resolve地址
          resolve("https://blog.bigdeng.com/img/avatar.jpeg");
        });
    }),
});
const getHtml = () => {
  ElMessage.success(value.value);
};

const setEdit = () => {
  disabled.value = !disabled.value;
  ElMessage.success("设置成功");
};
</script>
<style scoped lang="scss"></style>
