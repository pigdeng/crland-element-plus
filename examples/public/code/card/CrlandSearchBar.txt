<template>
  <crland-search-bar class="demo-style" :span="3" label-width="80px" @submit="search" @reset="reset">
    <el-col :span="8">
      <el-form-item label="参数名称">
        <el-input v-model="query.name"></el-input>
      </el-form-item>
    </el-col>
    <el-col :span="8">
      <el-form-item label="参数编码">
        <el-input v-model="query.code"></el-input>
      </el-form-item>
    </el-col>
  </crland-search-bar>
</template>

<script lang="ts" setup>
import { CrlandSearchBar } from "crland-base"
import { reactive } from "vue"

const query = reactive({
  name: "",
  code: "",
})
// 点击搜索按钮
const search = () => {
  console.log("query:", query)
}
// 点击清除按钮
const reset = () => {}
</script>

<style lang="scss" scoped>
.demo-style {
  box-shadow: var(--el-box-shadow);
}
</style>
