<template>
  <el-form :labelWidth="60">
    <el-form-item label="圆角">
      <el-radio-group v-model="isCircle">
        <el-radio :label="true" />
        <el-radio :label="false" />
      </el-radio-group>
    </el-form-item>
    <el-form-item label="小尺寸">
      <el-radio-group v-model="small">
        <el-radio :label="true" />
        <el-radio :label="false" />
      </el-radio-group>
    </el-form-item>
    <el-form-item label="layout">
      <el-radio-group v-model="layout">
        <el-radio label="total, sizes, prev, pager, next, jumper">layout1</el-radio>
        <el-radio label="total, sizes, prev, pager, next">layout2</el-radio>
        <el-radio label="total, prev, pager, next">layout3</el-radio>
        <el-radio label="prev, pager, next">layout4</el-radio>
      </el-radio-group>
    </el-form-item>

    <el-form-item label="调整页">
      <el-radio-group v-model="pageNum" @change="changePage(pageNum)">
        <el-radio :label="1"></el-radio>
        <el-radio :label="5"></el-radio>
        <el-radio :label="10"></el-radio>
        <el-radio :label="20"></el-radio>
      </el-radio-group>
    </el-form-item>
  </el-form>
  <br />
  <crland-pagination :total="400" :isCircle="isCircle" :layout="layout" :small="small" @change="changePagination" ref="childRef"> </crland-pagination>
</template>

<script lang="ts" setup>
import { ref } from "vue"
import { CrlandPagination } from "crland-base"

const changePagination = (res: Object) => {
  console.log("res:", res)
}

const isCircle = ref(true)
const small = ref(true)
const layout = ref("total, sizes, prev, pager, next, jumper")
const pageNum = ref(1)

const childRef = ref(null)
const changePage = (num: Number) => {
  childRef.value.currentPage = num
}
</script>

<style lang="scss" scoped></style>
