<template>
  <el-upload
    :show-file-list="false"
    class="upload-demo"
    :action="action"
    :on-preview="handlePreview"
    :on-remove="handleRemove"
    :on-success="handSuccess"
    :on-error="handError"
    :before-remove="beforeRemove"
    :on-exceed="handleExceed"
    :before-upload="handleStart"
    :drag="drag"
    :headers="headers"
    :method="method"
    :data="{ data }"
    :name="name"
    :withCredentials="withCredentials"
    :accept="accept"
  >
    <el-button type="primary">选择文件</el-button>
    <slot name="tip"></slot>
  </el-upload>
  <br />

  <div class="crland-file-list-wrap">
    <div class="crland-file-list" v-for="(i, index) in fileList" :key="i.url">
      <div class="file-list-left">
        <img class="file-type-img" :src="computedTtype(i)" alt="" />
        <div class="file-list-left-text">
          <div class="file-name" :title="i.name">{{ i.name }}</div>
          <div class="file-size" v-if="i.status !== 0">
            {{ formatBytes(i.size) }}
          </div>
          <el-progress
            class="crland-upload-progress"
            :percentage="i.percentage"
            v-else
          />
        </div>
      </div>
      <div class="crland-list-right">
        <el-icon class="icon-down">
          <img
            :src="IconDelete"
            alt=""
            title="删除"
            v-if="i.status === 2"
            @click="deleteItem(i, index)"
          />
          <a :href="i.url" :download="i.name" target="_blank">
            <img :src="IconDown" alt="" v-if="i.status === 1" />
          </a>
        </el-icon>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "crland-upload",
});
</script>

<script lang="ts" setup>
import "./style/CrlandUpload.scss";
import { ref, computed } from "vue";
import {
  ElIcon,
  ElInput,
  ElMessage,
  ElMessageBox,
  ElProgress,
  UploadProps,
  UploadUserFile,
  UploadRawFile,
} from "element-plus";
import { CloseBold } from "@element-plus/icons-vue";
import { formatBytes, randomFrom } from "../Utils/index";

import { propsData } from "./CrlandUpload";
const props = defineProps(propsData);
const emit = defineEmits(["update:value", "deleteItem"]);

import IconDelete from "./img/icon-delete.svg";
import IconDown from "./img/icon-down.svg";
import FileDoc from "./img/file-doc.svg";
import FileJpg from "./img/file-jpg.svg";
import FilePng from "./img/file-png.svg";
import FilePdf from "./img/file-pdf.svg";
import FileRar from "./img/file-rar.svg";
import FileXls from "./img/file-xls.svg";
import FileZip from "./img/file-zip.svg";
import FileUnknown from "./img/file-unknown.svg";

const fileArr: any = {
  doc: FileDoc,
  docx: FileDoc,
  jpg: FileJpg,
  jpeg: FileJpg,
  png: FilePng,
  pdf: FilePdf,
  xls: FileXls,
  xlsx: FileXls,
  zip: FileZip,
  rar: FileRar,
  unknown: FileUnknown,
};

/**
 * status 参数含义
 * 0:上传中
 * 1:查看可下载
 * 2:编辑可删除
 */
const fileList = ref([
  {
    name: "element-plus-logoelement-plus-logoelement-plus-logoelement-plus-logoelement-plus-logo.app",
    url: "http://localhost:3000/carousel2.jpeg",
    size: 12312,
    status: 2,
    percentage: 100,
  },
  {
    name: "element-plus-logo2.pdf",
    url: "http://localhost:3000/0-%E5%85%B6%E4%BB%96%E5%85%83%E7%B4%A0_svg%20(1).zip",
    size: 1242,
    status: 1,
  },
]);

const handleRemove: UploadProps["onRemove"] = (file, uploadFiles) => {
  console.log(file, uploadFiles);
};

const handlePreview: UploadProps["onPreview"] = (uploadFile) => {
  console.log(uploadFile);
};

const handleExceed: UploadProps["onExceed"] = (files, uploadFiles) => {
  ElMessage.warning(
    `The limit is 3, you selected ${files.length} files this time, add up to ${
      files.length + uploadFiles.length
    } totally`
  );
};

const beforeRemove: UploadProps["beforeRemove"] = (uploadFile, uploadFiles) => {
  return ElMessageBox.confirm(
    `Cancel the transfert of ${uploadFile.name} ?`
  ).then(
    () => true,
    () => false
  );
};
const handSuccess = (res: any, uploadFile: UploadRawFile) => {
  // console.log("res:", res);
  console.log("uploadFile:", uploadFile.uid);
  console.log("uploadFile:", uploadFile.uid);
  let obj = fileList.value.find((i: any) => {
    console.log("i:", i);
    return i.uid === uploadFile.uid;
  });
  console.log("obj:", obj);
  obj.percentage = 100;
  obj.status = 1;
};

// 上传失败
const handError = (res: any, uploadFile: UploadRawFile) => {
  // console.log("res:", res);
  console.log("uploadFile:", uploadFile);
  console.log("uploadFile:", uploadFile);
};

const handleStart = (rawFile: UploadRawFile) => {
  fileList.value.unshift({
    name: rawFile.name,
    size: rawFile.size,
    uid: rawFile.uid,
    status: 0,
    percentage: 0,
    url: "",
  });
  changePercentage(fileList);
};

//  通过文件名称和地址匹配文件的类型
const computedTtype = (i: any) => {
  let str: String = "";
  if (i.name && i.name.indexOf(".")) {
    str = i.name;
  } else {
    str = i.url;
  }

  let arr = str.split(".");
  let key = arr[arr.length - 1];
  return fileArr[key] ? fileArr[key] : fileArr["unknown"];
};

// 虚拟进度条
const changePercentage = (rawFile: any) => {
  // 虚拟进度条单位时间跨度
  let MB = rawFile.size / 1024 / 1024;
  let lowerValue = 10;
  let upperValue = 10;
  switch (true) {
    case MB >= 100:
      lowerValue = 1;
      upperValue = 3;
      break;
    case MB >= 10:
      lowerValue = 3;
      upperValue = 10;
      break;
    case MB >= 1:
      lowerValue = 10;
      upperValue = 15;
      break;
    case MB < 1:
      lowerValue = 30;
      upperValue = 50;
      break;
  }
  // 虚拟进度条单位时间跨度 end

  // 虚拟进度条进度变化
  let t1 = setInterval(() => {
    let obj = fileList.value.find((i: any) => {
      return i.uid === rawFile.uid;
    });
    if (obj.status === 0) {
      let newValue = obj.percentage + randomFrom(lowerValue, upperValue);
      if (newValue >= 100) return;

      obj.percentage = newValue;
    } else {
      obj.percentage = 100;
      clearInterval(t1);
    }
  }, 300);
  // 虚拟进度条进度变化 end
};

// 删除当前
const deleteItem = (i: any, index: Number) => {
  emit("deleteItem", i);
  fileList.value.splice(index, 1);
};
</script>
