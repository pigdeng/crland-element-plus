<template>
  <el-form>
    <el-form-item label="颜色">
      <el-radio-group v-model="tagType">
        <el-radio label="success" />
        <el-radio label="info" />
        <el-radio label="warning" />
        <el-radio label="danger" />
      </el-radio-group>
    </el-form-item>
    <el-form-item label="主题">
      <el-radio-group v-model="tagEffect">
        <el-radio label="dark" />
        <el-radio label="light" />
        <el-radio label="plain" />
      </el-radio-group>
    </el-form-item>
    <el-form-item label="圆角">
      <el-radio-group v-model="tagRound">
        <el-radio :label="false" />
        <el-radio :label="true" />
      </el-radio-group>
    </el-form-item>
  </el-form>
  <crland-tag-input
    v-model:value="value"
    :tagType="tagType"
    :tagEffect="tagEffect"
    :tagRound="tagRound"
  ></crland-tag-input>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { CrlandTagInput } from "crland-element-plus";
const value = ref(["鲨鱼", "螃蟹", "田螺"]);
const tagType = ref("info");
const tagEffect = ref("light");
const tagRound = ref(false);
</script>
