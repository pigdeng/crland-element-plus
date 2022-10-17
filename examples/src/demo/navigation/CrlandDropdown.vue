<template>x
    <el-dropdown>
      <span class="el-dropdown-link">
        Dropdown List
        <el-icon class="el-icon--right">
          <arrow-down />
        </el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>
            个人资料
        </el-dropdown-item>
          <el-dropdown-item divided> 😉我的消息</el-dropdown-item>
          <el-dropdown-item divided>待办项</el-dropdown-item>
          <el-dropdown-item divided>设置</el-dropdown-item>
          <el-dropdown-item divided>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </template>

  <script lang="ts" setup>
  import { ArrowDown } from '@element-plus/icons-vue'
  </script>
  <style scoped>
  .example-showcase .el-dropdown-link {
    cursor: pointer;
    color: var(--el-color-primary);
    display: flex;
    align-items: center;
  }
  </style>
  


