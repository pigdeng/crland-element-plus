<template>
    <el-alert title="success alert" type="success" show-icon />
    <el-alert title="info alert" type="info" show-icon />
    <el-alert title="warning alert" type="warning" show-icon />
    <el-alert title="error alert" type="error" show-icon />

    <el-alert title="success alert" type="success" effect="dark" />
    <el-alert title="info alert" type="info" effect="dark" />
    <el-alert title="warning alert" type="warning" effect="dark" />
    <el-alert title="error alert" type="error" effect="dark" />

    <el-alert title="success alert" type="success" description="more text description" show-icon />
    <el-alert title="info alert" type="info" description="more text description" show-icon />
    <el-alert title="warning alert" type="warning" description="more text description" show-icon />
    <el-alert title="error alert" type="error" description="more text description" show-icon />
    <el-alert title="alert with callback" type="warning" @close="hello"  close-text="查看详情"/>
</template>
<script lang="ts" setup>
const hello = () => {
  // eslint-disable-next-line no-alert
  alert('Hello World!')
}
</script>
<style lang="scss" scoped>
.el-alert {
    margin: 20px 0 0;
}

.el-alert:first-child {
    margin: 0;
}
</style>