<template>
  <div>
    <el-row class="mb-4">
      <crland-button shadow @click="getMd">获取 md</crland-button>
      <crland-button shadow type="primary" @click="getHtml"
        >获取 html</crland-button
      >
      <crland-button shadow type="success" @click="setEdit">
        {{ editable ? "设置不可编辑" : "设置可编辑" }}</crland-button
      >
    </el-row>
    <br />
    <mavon-editor
      v-model="content"
      :editable="editable"
      ref="md"
    ></mavon-editor>
  </div>
</template>

<script lang="ts" setup>
import { CrlandButton } from "crland-base";
import { ElRow } from "element-plus";

import { mavonEditor } from "mavon-editor";
import "mavon-editor/dist/css/index.css";

import { computed, ref } from "vue";
import { ElMessage } from "element-plus";
import axios from "axios";

const md = ref(null);
const content = ref("# Fantastic-admin");
const editable = ref(true);

// 获取md
const getMd = () => {
  const mdit = mavonEditor.getMarkdownIt();

  ElMessage.info(content.value);
};

// 获取html
const getHtml = () => {
  const mdit = mavonEditor.getMarkdownIt();
  const html = mdit.render(content.value);
  ElMessage.info(html);
};

// 设置是否可编辑
const setEdit = () => {
  editable.value = !editable.value;
  ElMessage.success("设置成功");
};

const imgAdd = (pos: any, $file: any) => {
  // 新建form表单类型的数据
  const formData = new FormData();
  // 将我们上传的图片地址$file加进表单里面，命名为“file”（参数名字与后端相匹配）
  formData.append("file", $file);
  axios({
    url: "/update", // 请求地址
    method: "POST",
    data: formData,
    headers: { "Content-Type": "multipart/form-data" },
  })
    .then((res: any) => {
      if (res.status === 200) {
        // 将后端返回的url放在md中图片的指定位置
        md.value.$img2Url(pos, res.data.data);
        ElMessage.success("上传成功");
      } else {
        ElMessage.warning(res.message);
      }
    })
    .catch((err) => {
      ElMessage.warning(err.message);
    });
};
</script>
