<template>
  <el-container class="crland-layout-wrap">
    <el-aside width="200px">Aside</el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "crland-layout",
});
</script>
<script lang="ts" setup>
import { ref } from "vue";
import { ElContainer, ElHeader, ElAside, ElMain } from "element-plus";
import "./style/CrlandLayout.scss";
import { propsData } from "./CrlandLayoutTop";
const props = defineProps(propsData);

const handCollapse = () => {
  console.log("isCollapse:", props.isCollapse);
};
</script>
