<template>
  <div class="doc-wrap">
    <h2 class="title">Menu Pro 菜单</h2>
    <p>
      这是一个菜单组件，一般用于页面导航。本组件对
      <el-tag class="ml-2" type="info">el-menu</el-tag>
      进行了封装。与相比
      <el-tag class="ml-2" type="info">crland-menu</el-tag> 增加功能有如下<br />
      <p class="dot">新增菜单收缩功能。</p>
      <p class="dot">不限制级数子菜单，注意：子菜单级数达到一定程度 (三级以上) 界面显示可能会压缩变形。</p>
      <p class="dot">新增菜单图标。</p>
      <p class="dot">新增徽章实现消息数量提示。</p>
    </p>
    <!-- <el-divider /> -->
    <h3>使用规则</h3>
    <p class="dot">标签引入，如下代码演示</p>
    <!-- <el-divider /> -->

    <h3>代码演示</h3>
    <crland-code-show fileUrl="/code/navigation/CrlandMenuPro.txt">
      <CrlandMenuProDemo style="width: 30%"></CrlandMenuProDemo>
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
          <td>menuData</td>
          <td>菜单数据</td>
          <td><el-tag class="ml-2" type="info">array</el-tag></td>
          <td>—</td>
          <td>[]</td>
        </tr>
        <tr>
          <td>data</td>
          <td>
            路由跳转类型，和data数组对象中的index值相对应，告诉组件你是想通过name跳转还是path跳转，用index的值充当路由跳转的值。如：router.push({name:'index'})
          </td>
          <td><el-tag class="ml-2" type="info">string</el-tag></td>
          <td>
            <el-tag type="info">name</el-tag>&nbsp;<el-tag type="info"
              >path</el-tag
            >
          </td>
          <td>path</td>
        </tr>
        <tr>
          <td>isCollapse</td>
          <td>是否收缩菜单</td>
          <td><el-tag class="ml-2" type="info">Boolean</el-tag></td>
          <td>-</td>
          <td>false</td>
        </tr>
        <tr>
          <td>width</td>
          <td>菜单宽度</td>
          <td><el-tag class="ml-2" type="info">string</el-tag><el-tag class="ml-2" type="info">Number</el-tag></td>
          <td>-</td>
          <td>100%</td>
        </tr>
      </tbody>
    </table>

    <h3>data 参数说明</h3>
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
          <td>菜单标题</td>
          <td><el-tag class="ml-2" type="info">string</el-tag></td>
          <td>是</td>
          <td>-</td>
        </tr>
        <tr>
          <td>index</td>
          <td>路由跳转的 name或path</td>
          <td><el-tag class="ml-2" type="info">string</el-tag></td>
          <td>是</td>
          <td>-</td>
        </tr>
        <tr>
          <td>icon</td>
          <td>菜单图标</td>
          <td><el-tag class="ml-2" type="info">string</el-tag></td>
          <td>否</td>
          <td>-</td>
        </tr>
         <tr>
          <td>disabled</td>
          <td>设置不可点击</td>
          <td><el-tag class="ml-2" type="info">Boolean</el-tag></td>
          <td>否</td>
          <td>false</td>
        </tr>
         <tr>
          <td>tips</td>
          <td>消息数量提示，大于99时显示“99+”</td>
          <td>
            <el-tag class="ml-2" type="info">string</el-tag>
            <el-tag class="ml-2" type="info">Number</el-tag>
          </td>
          <td>否</td>
          <td>-</td>
        </tr>
         <tr>
          <td>child</td>
          <td>子菜单</td>
          <td><el-tag class="ml-2" type="info">array</el-tag></td>
          <td>否</td>
          <td>-</td>
        </tr>
      </tbody>
    </table>

    <h3>事件</h3>
    <p>暂无</p>
  </div>
</template>

<script lang="ts" setup>
import { CrlandCodeShow } from "crland-base";
import CrlandMenuProDemo from "@/demo/navigation/CrlandMenuPro.vue";

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
