<template>
  <div class="example-basic">
    <el-time-picker v-model="value1" placeholder="请选择时间" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const value1 = ref();
</script>
