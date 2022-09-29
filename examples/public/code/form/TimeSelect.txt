<template>
  <el-form>
    <el-form-item label="时间间隔">
      <el-radio-group v-model="step">
        <el-radio label="00:30" />
        <el-radio label="01:00" />
        <el-radio label="01:30" />
        <el-radio label="02:00" />
      </el-radio-group>
    </el-form-item>
  </el-form>

  <el-time-select
    v-model="value"
    start="00:00"
    :step="step"
    end="23:59"
    placeholder="请选择时间"
    popper-class="el-time-select-demo"
  />
</template>

<script lang="ts" setup>
import { ref } from "vue";

const value = ref("");
const step = ref("00:30");
</script>
<style lang="scss">
.el-time-select-demo {
  .el-select-dropdown__item.selected {
    background-color: var(--el-color-primary);
    color: #fff;
  }
}
</style>
