<template>
  <div class="doc-wrap">
    <h2 class="title">shadow 投影按钮</h2>
    <p>
      这是一个常用按钮组件，保留原有按钮功能
      <el-tag type="info">el-button</el-tag> 在不破坏原有功能情况下对
      <el-tag type="info">el-button</el-tag> 功能进行扩展。<br />
      <el-tag type="info">crland-button</el-tag> 包含于
      <el-tag type="info">el-button</el-tag> 在实际开发过程中如果你可以使用
      <el-tag type="info">el-button</el-tag> 来调用 element-plus
      的按钮组件，也可以使用 <el-tag type="info">crland-button</el-tag> 来调用
      element-plus 的按钮组件和我们封装的扩展功能。
    </p>
    <!-- <el-divider /> -->
    <h3>使用规则</h3>
    <p class="dot">标签引入，如下代码演示。</p>
    <!-- <el-divider /> -->

    <h3>代码演示</h3>
    <crland-code-show fileUrl="/code/button/shadowButton.txt">
      <shadow-button></shadow-button>
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
          <td>shadow</td>
          <td>按钮阴影</td>
          <td><el-tag type="info">Boolean</el-tag></td>
          <td>true | false</td>
          <td>false</td>
        </tr>
      </tbody>
    </table>

    <h3>事件</h3>
    <p>暂无</p>
  </div>
</template>

<script lang="ts" setup>
import { CrlandCodeShow } from "crland-element-plus";
import shadowButton from "@/demo/button/shadowButton.vue";

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
