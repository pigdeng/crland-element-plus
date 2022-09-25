<template>
  <div class="doc-wrap">
    <h2 class="title">Mune 菜单</h2>
    <p>
      这是一个菜单组件，一般用于页面导航。本组件对
      <el-tag class="ml-2" type="info">el-menu</el-tag>
      进行了简化封装。
    </p>
    <!-- <el-divider /> -->
    <h3>使用规则</h3>
    <p class="dot">标签引入，如下代码演示</p>
    <!-- <el-divider /> -->

    <h3>代码演示</h3>
    <crland-code-show fileUrl="/code/navigation/menu.txt">
      <menuDemo style="width: 30%" />
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
          <td>data</td>
          <td>菜单数据</td>
          <td><el-tag class="ml-2" type="info">array</el-tag></td>
          <td>—</td>
          <td>[]</td>
        </tr>
        <tr>
          <td>defaultActive</td>
          <td>
            路由跳转类型，和data数组对象中的index值相对应，告诉组件你是想通过name跳转还是path跳转，用index的值充当路由跳转的值。如：router.push({name:'index'})
          </td>
          <td><el-tag class="ml-2" type="info">string</el-tag></td>
          <td>
            <el-tag type="info">name</el-tag>&nbsp;<el-tag type="info"
              >path</el-tag
            >
          </td>
          <td>name</td>
        </tr>
      </tbody>
    </table>

    <h3>事件</h3>
    <p>暂无</p>
  </div>
</template>

<script lang="ts" setup>
import { CrlandCodeShow } from "crland-element-plus";
import menuDemo from "@/demo/navigation/menu.vue";

import {
  reactive,
  onBeforeMount,
  onMounted,
  defineExpose,
  defineEmits,
  defineProps,
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
