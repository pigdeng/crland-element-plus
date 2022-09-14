<template>
  <crland-button shadow type="primary" @click="openDrawer"
    >打开对话框</crland-button
  >
  <crland-dialog
    v-model:visible="visible"
    :title="title"
    :confirmLoading="confirmLoading"
    @confirm="submit"
  >
    <template #body> 这是一个对话框组件 </template>
    <template #footer></template>
  </crland-dialog>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const visible = ref(false);
const title = ref("对话框标题");
const confirmLoading = ref(false);

const openDrawer = () => {
  visible.value = true;
};

const submit = () => {
  confirmLoading.value = true;
  setTimeout(() => {
    confirmLoading.value = false;
    visible.value = false;
  }, 1500);
};
</script>
