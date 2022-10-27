<template>
  <br />
  <br />
  <br />
  <crland-list-combined v-model:setItemValue="setItemValue" :setItem="setItem">
    <template #listTopLeft>
      <el-tooltip
        class="box-item"
        effect="light"
        content="刷新"
        placement="top-start"
      >
        <el-button :icon="Refresh"></el-button>
      </el-tooltip>
      <el-button type="primary">新增</el-button>
      <el-button>关闭</el-button>
    </template>
    <template #listTopRight>
      <el-button type="danger">删除</el-button>
    </template>
    <crland-table :data="tableData()">
      <crland-table-column type="index" />
      <crland-table-column
        prop="date"
        label="Date"
        v-if="setItemValue.includes('date')"
      />
      <crland-table-column
        prop="name"
        label="Name"
        v-if="setItemValue.includes('name')"
      />
      <crland-table-column
        prop="address"
        label="Address"
        v-if="setItemValue.includes('address')"
      />
    </crland-table>
  </crland-list-combined>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { ElButton } from "element-plus";
import { Refresh } from "@element-plus/icons-vue";

const tableData = () => {
  let arr = [];
  for (let i = 0; i < 30; i++) {
    arr[i] = {
      index: i,
      date: "2016-05-01",
      name: "Tom",
      address: "No. 189, Grove St, Los Angeles",
    };
  }
  return arr;
};

const setItemValue = ref(["date", "name", "address"]);
const setItem = ref(["date", "name", "address"]);
</script>
<style lang="scss" scoped></style>
