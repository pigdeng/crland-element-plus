<template>
  <div class="doc-wrap">
    <h2 class="title">CrlandTagInput 标签输入框组件</h2>
    <p>
      这是一个标签输入框组件
      <el-tag class="ml-2" type="info">crland-tag-input</el-tag><br/>
      主要功能有如下:<br />
      <p class="dot">按回车键生成标签</p>
      <p class="dot">按删除键依次删除标签</p>
      <p class="dot">按标签删除按钮，删除指定标签</p>
    </p>
    <!-- <el-divider /> -->
    <h3>使用规则</h3>
    <p class="dot">标签引入，如下代码演示</p>
    <!-- <el-divider /> -->

    <h3>代码演示【基础】</h3>
    <crland-code-show fileUrl="/code/form/CrlandTagInput.txt">
      <CrlandTagInput ></CrlandTagInput>
    </crland-code-show>

    <h3>代码演示【尺寸】</h3>
    <crland-code-show fileUrl="/code/form/CrlandTagInputSize.txt">
      <CrlandTagInputSize ></CrlandTagInputSize>
    </crland-code-show>

    <h3>代码演示【tag属性】</h3>
    <crland-code-show fileUrl="/code/form/CrlandTagInputType.txt">
      <CrlandTagInputType ></CrlandTagInputType>
    </crland-code-show>

    <h3>参数说明</h3>
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
          <td>value</td>
          <td>标签数据</td>
          <td><el-tag class="ml-2" type="info">array</el-tag></td>
          <td>-</td>
          <td>[]</td>
        </tr>
        <tr>
          <td>tagType</td>
          <td>
            标签颜色类型
          </td>
          <td><el-tag class="ml-2" type="info">string</el-tag></td>
          <td>
            success/info/warning/danger
          </td>
          <td>info</td>
        </tr>
        <tr>
          <td>tagEffect</td>
          <td>标签主题</td>
          <td><el-tag class="ml-2" type="info">string</el-tag></td>
          <td>dark/light/plain</td>
          <td>light</td>
        </tr>
        <tr>
          <td>tagRound</td>
          <td>标签是否圆角</td>
          <td><el-tag class="ml-2" type="info">Boolean</el-tag></td>
          <td>-</td>
          <td>fasle</td>
        </tr>
      </tbody>
    </table>

    <h3>事件</h3>
    <p>暂无</p>
  </div>
</template>

<script lang="ts" setup>
import { CrlandCodeShow } from "crland-element-plus-base";
import CrlandTagInput from "@/demo/form/CrlandTagInput.vue";
import CrlandTagInputSize from "@/demo/form/CrlandTagInputSize.vue";
import CrlandTagInputType from "@/demo/form/CrlandTagInputType.vue";



import {
  reactive,
  onBeforeMount,
  onMounted,
  
  
  ref,
} from "vue";
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
