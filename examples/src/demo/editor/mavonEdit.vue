<template>
  <div>
    <el-row class="mb-4">
      <crland-button shadow @click="getMd">获取 md</crland-button>
      <crland-button shadow type="primary" @click="getHtml"
        >获取 html</crland-button
      >
      <crland-button shadow type="success" @click="setEdit">
        {{ editable ? "设置不可编辑" : "设置可编辑" }}</crland-button
      >
    </el-row>
    <br />
    <crland-mavon-editor
      ref="md"
      v-model="content"
      @imgAdd="imgAdd"
      :editable="editable"
    ></crland-mavon-editor>
  </div>
</template>

<script lang="ts" setup>
import { CrlandButton } from "crland-element-plus";
import { ElRow } from "element-plus";
</script>
