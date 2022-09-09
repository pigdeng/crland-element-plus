<script lang="ts">
  import { defineComponent } from 'vue'
  export default defineComponent({
      name: 'crland-mavon-editor'
  })
</script>

<script lang="ts" setup>
import {
  computed,
  reactive,
  ref,
} from 'vue';

import { mavonEditor } from 'mavon-editor';
import 'mavon-editor/dist/css/index.css';

import axios from 'axios';


const content1 = ref('<h1>Fantastic-admin</h1>');
const content2 = ref('# Fantastic-admin');
const toolbars = reactive({
  bold: true, // 粗体
  italic: true, // 斜体
  header: true, // 标题
  underline: true, // 下划线
  strikethrough: true, // 中划线
  mark: true, // 标记
  superscript: true, // 上角标
  subscript: true, // 下角标
  quote: true, // 引用
  ol: true, // 有序列表
  ul: true, // 无序列表
  link: true, // 链接
  imagelink: true, // 图片链接
  code: true, // code
  table: true, // 表格
  fullscreen: true, // 全屏编辑
  readmodel: true, // 沉浸式阅读
  htmlcode: true, // 展示html源码
  help: true, // 帮助
  /* 1.3.5 */
  undo: true, // 上一步
  redo: true, // 下一步
  trash: true, // 清空
  save: true, // 保存（触发events中的save事件）
  /* 1.4.2 */
  navigation: true, // 导航目录
  /* 2.1.8 */
  alignleft: true, // 左对齐
  aligncenter: true, // 居中
  alignright: true, // 右对齐
  /* 2.2.1 */
  subfield: true, // 单双栏模式
  preview: true, // 预览
});

const imgAdd = (pos, $file) => {
  // 新建form表单类型的数据
  const formData = new FormData();
  // 将我们上传的图片地址$file加进表单里面，命名为“file”（参数名字与后端相匹配）
  formData.append('file', $file);
  console.log(formData);
  axios({
    url: '/icommunity/post/getImageUrl', // 请求地址
    method: 'POST',
    data: formData,
    headers: {'Content-Type': 'multipart/form-data'},
  }).then((res) => {
    if (res.status === 200) {
      // 将后端返回的url放在md中图片的指定位置
    //   this.$refs.md.$img2Url(pos, res.data.data);
    } else {
    //   this.$message.error(res.message);
    }
  });
};

</script>

<template>
    <div>
        <!-- <page-main title="富文本编辑器">
            <editor v-model="content1" />
            <div class="preview" v-html="content1" />
        </page-main> -->
        <!-- <page-main title="markdown 编辑器"> -->
            <mavon-editor v-model="content2" style="z-index: 9;" :toolbars="toolbars" @imgAdd="imgAdd"/>
            <div class="preview" v-html="mdContent2" />
        <!-- </page-main> -->
    </div>
</template>

<style lang="scss" scoped>
.preview {
    margin-top: 10px;
    &::before {
        content: "预览：";
        display: block;
    }
}
</style>
