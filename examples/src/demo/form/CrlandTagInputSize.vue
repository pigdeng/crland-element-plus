<template>
  <el-form>
    <el-form-item>
      <el-radio-group v-model="size">
        <el-radio label="large" />
        <el-radio label="default" />
        <el-radio label="small" />
      </el-radio-group>
    </el-form-item>
  </el-form>
  <crland-tag-input v-model:value="value" :size="size"></crland-tag-input>
</template>
<script lang="ts" setup>
import { ref } from "vue";
// import { CrlandTagInput } from "crland-element-plus";
const value = ref(["鲨鱼", "螃蟹", "田螺"]);
const size = ref("default");
</script>
