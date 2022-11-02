<template>
  <div class="doc-wrap">
    <h2 class="title">SearchBar 搜索卡片组件</h2>
    <p>
      搜索卡片组件，常用于列表搜索。组件使用了 element-plus
      的删格系统和form表单组合而成
    </p>
    <!-- <el-divider /> -->
    <h3>使用规则</h3>
    <p class="dot">标签引入，如下代码演示</p>

    <h3>代码演示</h3>
    <crland-code-show fileUrl="/code/card/CrlandSearchBar.txt">
      <CrlandSearchBar />
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
          <td>span</td>
          <td>搜索按钮和清除按钮所在容器的删格比例</td>
          <td><el-tag class="ml-2" type="info">Numbe</el-tag></td>
          <td>—</td>
          <td>3</td>
        </tr>
        <tr>
          <td>label-width</td>
          <td>表单标题文案的宽度</td>
          <td><el-tag class="ml-2" type="info">String</el-tag></td>
          <td>-</td>
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
          <td>search</td>
          <td>点击搜索按钮触发事件</td>
          <td>-</td>
        </tr>

        <tr>
          <td>reset</td>
          <td>点击重置按钮触发事件</td>
          <td>-</td>
        </tr>
      </tbody>
    </table>

    <h3>插槽</h3>
    <table>
      <thead>
        <tr>
          <th>插槽名</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>默认</td>
          <td>表单输入框位置,如下图所示</td>
        </tr>
      </tbody>
    </table>

    <h3>插槽示意图</h3>
    <el-image :src="slotImg" :preview-src-list="srcList"></el-image>
    <br />
    <br />
    <br />
    <br />
    <br />
  </div>
</template>

<script lang="ts" setup>
import CrlandCodeShow from "@/docs/components/CrlandCodeShow.vue";
import CrlandSearchBar from "@/demo/card/CrlandSearchBar.vue";
import slotImg from "./img/slot.png";

import { reactive, onBeforeMount, onMounted, ref } from "vue";

const srcList = [slotImg];
</script>
<style scoped lang="scss"></style>
