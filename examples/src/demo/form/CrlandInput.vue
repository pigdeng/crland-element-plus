<template>
  <el-form>
    <el-form-item label="类型">
      <el-radio-group v-model="inputType" @change="value = ''">
        <el-radio v-for="i in inputTypeList" :label="i" :key="i" />
      </el-radio-group>
    </el-form-item>
  </el-form>
  <crland-input v-model:value="value" :inputType="inputType"></crland-input>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { CrlandInput } from "crland-element-plus-base";
const value = ref("");
const inputType = ref("user");
const inputTypeList = ["user", "pass", "email", "visa", "phone", "rmb", "http"];
</script>
