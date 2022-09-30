<template>
  <el-time-picker
    v-model="value1"
    is-range
    range-separator="-"
    start-placeholder="开始时间"
    end-placeholder="结束时间"
    format="hh:mm:ss"
    value-format="hh:mm:ss"
  />
</template>

<script lang="ts" setup>
import { ref } from "vue";
const value1 = ref("");
</script>
