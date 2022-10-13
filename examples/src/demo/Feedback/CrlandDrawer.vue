<template>
  <crland-button shadow type="primary" @click="openDrawer"
    >打开抽屉</crland-button
  >
  <crland-drawer
    v-model:visible="visible"
    :title="title"
    :confirmLoading="confirmLoading"
    @confirm="submit"
  >
    <template #body> 这是一个抽屉组件 </template>

    <template #footer></template>
  </crland-drawer>
</template>

<script lang="ts" setup>
import { CrlandDrawer, CrlandButton } from "crland-base";
import { ref } from "vue";
const visible = ref(false);
const title = ref("抽屉标题");
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
