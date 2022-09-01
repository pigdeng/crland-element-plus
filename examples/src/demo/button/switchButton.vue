<template>
    <el-row class="mb-4">
        <el-col :span="6">
            <el-switch v-model="value1" class="mr-2"
                style="--el-switch-on-color: #41cd00; --el-switch-off-color: #9cd37b" />

            <el-switch v-model="value1" class="mr-2" inline-prompt :active-icon="Check" :inactive-icon="Close"
                style="--el-switch-on-color: #41cd00; --el-switch-off-color: #9cd37b" />

            <el-switch class="mr-2" v-model="value1" inline-prompt active-text="开" inactive-text="关"
                style="--el-switch-on-color: #41cd00; --el-switch-off-color: #9cd37b" />
        </el-col>
        <el-col :span="6">
            <el-switch v-model="value1" disabled class="mr-2" 
                style="--el-switch-on-color: #41cd00; --el-switch-off-color: #9cd37b" />

            <el-switch v-model="value1" disabled class="mr-2"  inline-prompt :active-icon="Check" :inactive-icon="Close"
                style="--el-switch-on-color: #41cd00; --el-switch-off-color: #9cd37b" />

            <el-switch class="mr-2" v-model="value1" disabled  inline-prompt active-text="开" inactive-text="关"
                style="--el-switch-on-color: #41cd00; --el-switch-off-color: #9cd37b" />
        </el-col>


    </el-row>

    <el-row class="mb-4">
        <el-col :span="6">
        <el-switch v-model="value2" class="mr-2"
            style="--el-switch-on-color: #41cd00; --el-switch-off-color: #9cd37b" />

        <el-switch v-model="value2" class="mr-2" inline-prompt :active-icon="Check" :inactive-icon="Close"
            style="--el-switch-on-color: #41cd00; --el-switch-off-color: #9cd37b" />

        <el-switch class="mr-2" v-model="value2" inline-prompt active-text="开" inactive-text="关"
            style="--el-switch-on-color: #41cd00; --el-switch-off-color: #9cd37b" />
        </el-col>
        <el-col :span="6">
        <el-switch v-model="value2" disabled class="mr-2"
            style="--el-switch-on-color: #41cd00; --el-switch-off-color: #9cd37b" />

        <el-switch v-model="value2" disabled class="mr-2" inline-prompt :active-icon="Check" :inactive-icon="Close"
            style="--el-switch-on-color: #41cd00; --el-switch-off-color: #9cd37b" />

        <el-switch class="mr-2" v-model="value2" disabled inline-prompt active-text="开" inactive-text="关"
            style="--el-switch-on-color: #41cd00; --el-switch-off-color: #9cd37b" />
        </el-col>
        

    </el-row>

    <el-row class="mb-4">
        <el-col :span="6">
        <el-switch v-model="value3" class="mr-2"
            style="--el-switch-on-color: #41cd00; --el-switch-off-color: #9cd37b" />

        <el-switch v-model="value3" class="mr-2" inline-prompt :active-icon="Check" :inactive-icon="Close"
            style="--el-switch-on-color: #41cd00; --el-switch-off-color: #9cd37b" />

        <el-switch class="mr-2" v-model="value3" inline-prompt active-text="开" inactive-text="关"
            style="--el-switch-on-color: #41cd00; --el-switch-off-color: #9cd37b" />
        </el-col>
        <el-col :span="6">
        <el-switch v-model="value3" disabled class="mr-2"
            style="--el-switch-on-color: #41cd00; --el-switch-off-color: #9cd37b" />

        <el-switch v-model="value3" class="mr-2" disabled inline-prompt :active-icon="Check" :inactive-icon="Close"
            style="--el-switch-on-color: #41cd00; --el-switch-off-color: #9cd37b" />

        <el-switch class="mr-2" v-model="value3" disabled inline-prompt active-text="开" inactive-text="关"
            style="--el-switch-on-color: #41cd00; --el-switch-off-color: #9cd37b" />
        </el-col>
        

    </el-row>

</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Check, Close } from '@element-plus/icons-vue'

const value1 = ref(true)
const value2 = ref(false)
const value3 = ref(false)
</script>

<style lang="scss" scoped>
.mb-4 {
    margin-bottom: 16px;
}

.mr-2 {
    margin-right: 20px;
}
</style>
