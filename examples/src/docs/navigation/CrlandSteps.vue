<template>
  <div class="doc-wrap">
    <h2 class="title">Steps 步骤条</h2>
    <p>
      引导用户按照流程完成任务的分步导航条，
      可根据实际应用场景设定步骤，步骤不得少于 2 步。本组件对
      <el-tag class="ml-2" type="info">el-steps</el-tag>
      进行了简化封装。
    </p>
    <!-- <el-divider /> -->
    <h3>使用规则</h3>
    <p class="dot">标签引入，如下代码演示</p>
    <!-- <el-divider /> -->

    <h3>代码演示</h3>
    <crland-code-show fileUrl="/code/navigation/CrlandSteps.txt">
      <crlandStepsDemo style="width: 30%" />
    </crland-code-show>

    <!-- <el-divider /> -->

    <h3>参数说明</h3>
    <!-- <small>可以在分割线上自定义文本内容</small> -->
    <table>
      <thead>
        <tr>
          <th>Props</th>
          <th>说明</th>
          <th>类型</th>
          <th>可选值</th>
          <th>默认值</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>title</td>
          <td>标题</td>
          <td><el-tag class="ml-2" type="info">string</el-tag></td>
          <td>—</td>
          <td></td>
        </tr>
        <tr>
          <td>status</td>
          <td>设置当前步骤的状态， 不设置则根据 steps 确定状态</td>
          <td><el-tag class="ml-2" type="info">string</el-tag></td>
          <td>wait / process / finish / error / success</td>
          <td></td>
        </tr>
      </tbody>
    </table>

    <h3>事件</h3>
    <p>暂无</p>
  </div>
</template>

<script lang="ts" setup>
import { CrlandCodeShow } from "crland-base";
import crlandStepsDemo from "@/demo/navigation/CrlandSteps.vue";

import { reactive, onBeforeMount, onMounted, ref } from "vue";
const props = defineProps({});
const emit = defineEmits([]);
const data = reactive({});
onBeforeMount(() => {
  // 2.组件挂载页面之前执行----onBeforeMount
});
onMounted(() => {
  // 3.组件挂载到页面之后执行-------onMounted
});
</script>
<style scoped lang="scss"></style>
