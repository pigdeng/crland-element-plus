<template>
  <crland-button shadow type="primary" @click="openDrawer"
    >打开抽屉</crland-button
  >
  <crland-drawer
    v-model:visible="visible"
    :title="title"
  >
    <template #body>第 <b>{{status}}</b> 步</template>

    <template #footer>
      <el-button size="small" @click="visible = false" v-if="status === 1" >取消</el-button>
      <el-button size="small" @click="status = status - 1" v-if="status !== 1" :disabled="confirmLoading">上一步</el-button>
      <el-button type="primary" size="small" @click="status = status + 1" v-if="status < 3">下一步</el-button>
      <el-button type="primary" size="small" :loading="confirmLoading" @click="submit" v-if="status === 3">确定</el-button>
    </template>
  </crland-drawer>
</template>
 
<script lang="ts" setup>
import { ref } from "vue";
const visible = ref(false);
const title = ref("抽屉标题");
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
