<template>
  <crland-layout>222</crland-layout>
</template>

<script lang="ts" setup>
// import { CrlandDialog, CrlandButton } from "bui-element-plus";
import CrlandLayout from "@/demo/layout/CrlandLayout.vue";
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
