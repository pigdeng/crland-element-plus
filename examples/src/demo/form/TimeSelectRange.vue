<template>
  <div class="demo-time-range">
    <el-time-select
      v-model="startTime"
      :max-time="endTime"
      class="mr-4"
      placeholder="开始时间"
      start="08:30"
      step="00:15"
      end="18:30"
      popper-class="el-time-select-demo"
    />
    -
    <el-time-select
      v-model="endTime"
      :min-time="startTime"
      placeholder="结束时间"
      start="08:30"
      step="00:15"
      end="18:30"
      popper-class="el-time-select-demo"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const startTime = ref("");
const endTime = ref("");
</script>
<style lang="scss">
.el-time-select-demo {
  .el-select-dropdown__item.selected {
    background-color: var(--el-color-primary);
    color: #fff;
  }
}
</style>
