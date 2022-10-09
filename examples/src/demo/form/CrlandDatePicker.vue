<template>
  <el-form>
    <el-form-item label="尺寸">
      <el-radio-group v-model="size">
        <el-radio label="large" />
        <el-radio label="default" />
        <el-radio label="small" />
      </el-radio-group>
    </el-form-item>
    <el-form-item label="类型">
      <el-radio-group v-model="type" @change="value = ''">
        <el-radio v-for="i in typeList" :label="i" :key="i" />
      </el-radio-group>
    </el-form-item>
  </el-form>
  <crland-date-picker
    :size="size"
    :type="type"
    v-model="value"
  ></crland-date-picker>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { CrlandDatePicker } from "crland-element-plus-base";
const value = ref("");
const size = ref("default");
const type = ref("date");
const typeList = [
  "year",
  "month",
  "date",
  "dates",
  "datetime",
  "week",
  "datetimerange",
  "daterange",
  "monthrange",
];
</script>
