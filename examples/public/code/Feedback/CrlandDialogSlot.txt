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
    <template #body
      >第 <b>{{ status }}</b> 步</template
    >

    <template #footer>
      <el-button @click="visible = false" v-if="status === 1">取消</el-button>
      <el-button
        @click="status = status - 1"
        v-if="status !== 1"
        :disabled="confirmLoading"
        >上一步</el-button
      >
      <el-button type="primary" @click="status = status + 1" v-if="status < 3"
        >下一步</el-button
      >
      <el-button
        type="primary"
        :loading="confirmLoading"
        @click="submit"
        v-if="status === 3"
        >确定</el-button
      >
    </template>
  </crland-dialog>
</template>

<script lang="ts" setup>
import { CrlandDialog, CrlandButton } from "crland-element-plus";
import { ref } from "vue";
const visible = ref(false);
const title = ref("对话框标题");
const confirmLoading = ref(false);
// 状态
const status = ref(1);

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
