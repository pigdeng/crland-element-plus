<template>
    <el-breadcrumb :separator-icon="ArrowRight">
      <el-breadcrumb-item :to="{ path: '/' }" >
        <el-icon>
          <HomeFilled />
        </el-icon>
      </el-breadcrumb-item>
      <el-breadcrumb-item>promotion management</el-breadcrumb-item>
      <el-breadcrumb-item>promotion list</el-breadcrumb-item>
      <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script lang="ts" setup>
import { ArrowRight,HomeFilled } from '@element-plus/icons-vue'
import { ElBreadcrumb, ElBreadcrumbItem } from "element-plus";
</script>
  

























