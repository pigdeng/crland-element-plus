<template>
  <div class="doc-wrap">
    <h2 class="title">Pagination 分页</h2>
    <p>
      当数据量过多时，使用分页分解数据。本组件对
      <el-tag class="ml-2" type="info">el-pagination</el-tag>
      进行了简化封装。
    </p>
    <!-- <el-divider /> -->
    <h3>使用规则</h3>
    <p class="dot">标签引入，如下代码演示</p>
    <!-- <el-divider /> -->

    <h3>代码演示</h3>
    <crland-code-show fileUrl="/code/navigation/CrlandPagination.txt">
      <CrlandPaginationDemo style="width: 90%" />
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
          <td>total</td>
          <td>总条数</td>
          <td><el-tag class="ml-2" type="info">nimber</el-tag></td>
          <td>-</td>
          <td>0</td>
        </tr>
        <tr>
          <td>isCircle</td>
          <td>是否开启按钮圆角</td>
          <td><el-tag class="ml-2" type="info">Boolan</el-tag></td>
          <td>true/false</td>
          <td>true</td>
        </tr>
        <tr>
          <td>layout</td>
          <td>布局</td>
          <td><el-tag class="ml-2" type="info">string</el-tag></td>
          <td>—</td>
          <td>total, sizes, prev, pager, next, jumper</td>
        </tr>
        <tr>
          <td>small</td>
          <td>是否使用小尺寸分页组件</td>
          <td><el-tag class="ml-2" type="info">Boolan</el-tag></td>
          <td>true/false</td>
          <td>true</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>是否禁用</td>
          <td><el-tag class="ml-2" type="info">Boolan</el-tag></td>
          <td>true/false</td>
          <td>false</td>
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
          <td>changePagination</td>
          <td>点击分页按钮或调整每页个数时触发</td>
          <td>Object 页码和每页个数</td>
        </tr>
      </tbody>
    </table>

    <h3>ref</h3>
    <table>
      <thead>
        <tr>
          <th>ref</th>
          <th>说明</th>
          <th>方法</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>currentPage</td>
          <td>可通过ref获取组件的页码</td>
          <td>childRef.value.currentPage</td>
        </tr>
        <tr>
          <td>pageSize</td>
          <td>可通过ref获取或改变组件的每页个数</td>
          <td>childRef.value.pageSize</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts" setup>
import CrlandCodeShow from "@/docs/components/CrlandCodeShow.vue"
import CrlandPaginationDemo from "@/demo/navigation/CrlandPagination.vue"

import { reactive, onBeforeMount, onMounted, ref } from "vue"
const props = defineProps({})
const emit = defineEmits([])
const data = reactive({})
onBeforeMount(() => {
  // 2.组件挂载页面之前执行----onBeforeMount
})
onMounted(() => {
  // 3.组件挂载到页面之后执行-------onMounted
})
</script>
<style scoped lang="scss"></style>
