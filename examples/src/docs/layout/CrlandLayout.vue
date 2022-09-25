<template>
  <div class="doc-wrap">
    <h2 class="title">布局</h2>
    <p>
      考虑到布局的特殊性，这里就没有封装成组件，提供了代码示例方便大家套用和修改。
    </p>

    <!-- <el-divider /> -->
    <h3>使用规则</h3>
    <p class="dot">如下代码演示</p>
    <!-- <el-divider /> -->

    <h3>代码演示</h3>
    <crland-code-show fileUrl="/code/layout/CrlandLayout.txt">
      <CrlandLayout style="height: 600px" />
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
          <th>是否必填</th>
          <th>默认值</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>userInfo</td>
          <td>用户信息</td>
          <td><el-tag class="ml-2" type="info">Object</el-tag></td>
          <td>—</td>
          <td>是</td>
          <td>-</td>
        </tr>
        <tr>
          <td>isCollapse</td>
          <td>菜单是否收缩</td>
          <td><el-tag class="ml-2" type="info">Boolean</el-tag></td>
          <td>-</td>
          <td>是</td>
          <td>-</td>
        </tr>
        <tr>
          <td>dropdownList</td>
          <td>下拉菜单列表</td>
          <td><el-tag class="ml-2" type="info">Array</el-tag></td>
          <td>-</td>
          <td>是</td>
          <td>-</td>
        </tr>
      </tbody>
    </table>

    <h3>userInfo 参数说明</h3>
    <table>
      <thead>
        <tr>
          <th>Props</th>
          <th>说明</th>
          <th>类型</th>
          <th>是否必填</th>
          <th>默认值</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>userName</td>
          <td>用户名称</td>
          <td><el-tag class="ml-2" type="info">string</el-tag></td>
          <td>是</td>
          <td>-</td>
        </tr>
        <tr>
          <td>avatar</td>
          <td>用户头像地址</td>
          <td><el-tag class="ml-2" type="info">string</el-tag></td>
          <td>否</td>
          <td>-</td>
        </tr>
      </tbody>
    </table>

    <h3>dropdownList 参数说明</h3>
    <table>
      <thead>
        <tr>
          <th>Props</th>
          <th>说明</th>
          <th>类型</th>
          <th>是否必填</th>
          <th>默认值</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>title</td>
          <td>下拉菜单名称</td>
          <td><el-tag class="ml-2" type="info">string</el-tag></td>
          <td>是</td>
          <td>-</td>
        </tr>
      </tbody>
    </table>

    <h3>事件</h3>
    <table>
      <thead>
        <tr>
          <th>事件名</th>
          <th>说明</th>
          <th>回调参数</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>handCollapse</td>
          <td>点击菜单收缩按钮</td>
          <td>-</td>
        </tr>
        <tr>
          <td>handDropdownItem</td>
          <td>点击下拉列表某一项，携带该项object参数</td>
          <td>Obiect</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts" setup>
import { CrlandCodeShow } from "crland-element-plus";
import CrlandLayout from "@/demo/layout/CrlandLayout.vue";

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
