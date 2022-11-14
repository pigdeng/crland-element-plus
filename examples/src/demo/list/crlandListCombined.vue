<template>
  <!-- <el-form>
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
  </el-form> -->

  <br />
  <!-- 搜索框 -->
  <crland-search-bar
    :span="3"
    label-width="80px"
    @submit="search"
    @reset="reset"
    class="demo-style"
  >
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
  <br />

  <!-- 列表组合 -->
  <crland-list-combined
    v-model:setItemShowValue="setItemShowValue"
    :setItemShow="setItemShow"
    :tableData="tableData"
    style="width: 100%"
    isSort
    sortClass=".table-row-weigh-sort"
    tableStyle="table"
    :loading="loading"
    @changeIndex="changeIndex"
    @selectionChange="selectionChange"
  >
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
    <el-table-column type="selection" width="55" />
    <el-table-column prop="index" label="序号" width="55" />
    <el-table-column
      prop="name"
      label="姓名"
      v-if="setItemShowValue.includes('name')"
    />
    <el-table-column
      prop="age"
      label="年龄"
      v-if="setItemShowValue.includes('age')"
    />
    <el-table-column
      prop="code"
      label="编码"
      v-if="setItemShowValue.includes('code')"
    />
    <el-table-column
      prop="date"
      label="时间"
      v-if="setItemShowValue.includes('date')"
    />
    <el-table-column
      prop="address"
      label="地址"
      width="250"
      v-if="setItemShowValue.includes('address')"
    />
    <el-table-column
      label="操作"
      width="80"
      v-if="setItemShowValue.includes('operation')"
    >
      <template #default>
        <el-icon class="table-row-weigh-sort"><Rank /></el-icon>
      </template>
    </el-table-column>
  </crland-list-combined>
  <br /><br />
  <crland-pagination
    :disabled="loading"
    :total="400"
    @change="changePagination"
    ref="childRef"
  ></crland-pagination>
</template>
<script lang="ts" setup>
import { ref, reactive, onMounted } from "vue";
import { ElButton, ElMessage } from "element-plus";
import { Refresh, Rank } from "@element-plus/icons-vue";
// import {
//   CrlandPagination,
//   CrlandListCombined,
//   CrlandSearchBar,
// } from "crland-base";

// 分页组件ref
const childRef = ref();

// 搜索数据
const query = reactive({
  name: "",
  code: "",
});

const tableData = ref([]);
const loading = ref(false);

// 搜索
const search = () => {
  console.log("query:", query);
  // 搜索默认从第一页开始，分页组件页码数回归1
  childRef.value.currentPage = 1;
  getTableData();
};
const reset = () => {};

onMounted(() => {
  getTableData();
});

// 获取数据
const getTableData = (obj?: any) => {
  loading.value = true;
  setTimeout(() => {
    tableData.value = mockTableData(obj);
    loading.value = false;
  }, 500);
};

// 模拟数据
const mockTableData = () => {
  let pageSize = childRef.value.pageSize; //获取分页组件页码数据
  let currentPage = childRef.value.currentPage; //获取分页组件每页个数

  let arr = [];
  for (let i = 0; i < pageSize; i++) {
    let index = pageSize * currentPage - pageSize + 1 + i;
    arr[i] = {
      index,
      name: "name" + index,
      age: Math.round(Math.random() * 80 + 20),
      code: Math.random().toString(36).slice(-10).toLocaleUpperCase(),
      date: "2016-05-01",
      address: "南昌市青山湖区南京东路235号" + index + "铺",
    };
  }
  return arr;
};

// 触发分页操作
const changePagination = (val: any) => {
  getTableData(val);
};

//列表拖动事件
const changeIndex = (res: any) => {
  console.log("oldIndex:", res.oldIndex);
  console.log("newIndex:", res.newIndex);
  loading.value = true;
  // 你的逻辑
  setTimeout(() => {
    loading.value = false;
    ElMessage.success("操作成功");
  }, 1000);
};

// 选择框勾选事件
const selectionChange = (res: any) => {
  let arr = res.map((i: any) => {
    return i.index;
  });
  console.log("被勾选的:", arr);
};

// 默认显示的列 key
const setItemShowValue = ref([
  "name",
  "age",
  "code",
  "date",
  "address",
  "operation",
]);
// 需要参与控制显示与隐藏列 key:value
const setItemShow = reactive({
  name: "姓名",
  age: "年龄",
  code: "编码",
  date: "时间",
  address: "地址",
  operation: "操作",
});
</script>

<style lang="scss" scoped>
.demo-style {
  // box-shadow: var(--el-box-shadow);
}
</style>
