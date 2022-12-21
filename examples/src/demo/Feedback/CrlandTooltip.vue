<template>

    <el-tooltip class="box-item" effect="dark" content="Top Center prompts info" placement="top">
        <el-button>top</el-button>
    </el-tooltip>

    <el-tooltip class="box-item" effect="dark" content="Left Center prompts info" placement="left">
        <el-button class="mt-3 mb-3">left</el-button>
    </el-tooltip>

    <el-tooltip class="box-item" effect="dark" content="Right Center prompts info" placement="right">
        <el-button>right</el-button>
    </el-tooltip>

    <el-tooltip class="box-item" effect="dark" content="Bottom Center prompts info" placement="bottom">
        <el-button>bottom</el-button>
    </el-tooltip>

    <el-tooltip content="Top center" placement="top">
        <el-button>Dark</el-button>
    </el-tooltip>
    <el-tooltip content="Bottom center" placement="bottom" effect="light">
        <el-button>Light</el-button>
    </el-tooltip>

</template>
<script lang="ts" setup>

</script>
<style lang="scss" scoped>
</style>