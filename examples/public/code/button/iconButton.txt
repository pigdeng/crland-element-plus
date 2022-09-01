<template>
    <el-row class="mb-4">
        <el-button :icon="Plus" size="large" circle />
        <el-button :icon="Plus" circle />
        <el-button :icon="Plus" size="small" circle />
    </el-row>
    <el-row class="mb-4">
        <el-button :icon="SemiSelect" type="primary" size="large" circle />
        <el-button :icon="SemiSelect" type="primary" circle />
        <el-button :icon="SemiSelect" type="primary" size="small" circle />
    </el-row>
    <el-row class="mb-4">
        <el-button :icon="Select" type="success" size="large" circle />
        <el-button :icon="Select" type="success" circle />
        <el-button :icon="Select" type="success" size="small" circle />
    </el-row>
    <el-row class="mb-4">
        <el-button :icon="Search" type="danger" size="large" circle />
        <el-button :icon="Search" type="danger" circle />
        <el-button :icon="Search" type="danger" size="small" circle />
    </el-row>
</template>

<script setup lang="ts">
import { Plus, SemiSelect, Select, Search } from '@element-plus/icons-vue'
</script>
<style lang="scss" scoped>
.mb-4 {
    margin-bottom: 16px;
}
</style>
