<template>
  <div class="crland-layout-main-header">
    <div class="page-title">pageName</div>
    <div class="history-breadcrumb">
      <el-breadcrumb :separator-icon="ArrowRight">
        <el-breadcrumb-item :to="{ path: '/' }">
          <el-Icon :size="18"><HomeFilled /></el-Icon>
        </el-breadcrumb-item>
        <el-breadcrumb-item>promotion management</el-breadcrumb-item>
        <el-breadcrumb-item>promotion list</el-breadcrumb-item>
        <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "crland-layout-main-header",
});
</script>
<script lang="ts" setup>
import { ref } from "vue";
import { ElBreadcrumb, ElBreadcrumbItem } from "element-plus";
import { ArrowRight, HomeFilled } from "@element-plus/icons-vue";
import "./style/CrlandLayoutMainHeader.scss";
import { propsData } from "./CrlandLayoutTop";
const props = defineProps(propsData);

const handCollapse = () => {
  console.log("isCollapse:", props.isCollapse);
};
</script>
