<template>
  <div class="doc-wrap">
    <h2 class="title">crland-dialog 对话框组件</h2>
    <p>
        抽屉组件是后台管理系统开发中最常见之一，这里对 <span>element-plus</span> 的 <span>Deawer</span>
        组件进行的二次封装，依旧保留了原有功能和穿参方式，在原有基础上增加一些功能。
    </p>
    <!-- <el-divider /> -->
    <h3>使用规则</h3>
    <p class="dot">
        标签引入，如下代码演示
    </p>

    <!-- <p class="dot">成功案例：
        <a href="https://mon.saas.crland.com.cn/#/login" target="three">监控平台</a>
    </p> -->
    <!-- <el-divider /> -->

    <h3>代码演示</h3>
    <crland-code-show fileUrl="/code/Feedback/CrlandDialog.txt">
        <CrlandDialog  />
    </crland-code-show>


    <h3>代码演示【带插槽】</h3>
    <crland-code-show fileUrl="/code/Feedback/CrlandDialogSlot.txt">
        <CrlandDialogSlot  />
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
          <td>visible</td>
          <td>控制组件显示</td>
          <td><el-tag class="ml-2" type="info">Boolean</el-tag></td>
          <td>false｜true</td>
          <td>false</td>
        </tr>
        <tr>
          <td>title</td>
          <td>抽屉框标题</td>
          <td><el-tag class="ml-2" type="info">String</el-tag></td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td>confirmLoading</td>
          <td>确定按钮loading</td>
          <td><el-tag class="ml-2" type="info">Boolean</el-tag></td>
          <td>false｜true</td>
          <td>false</td>
        </tr>
        <tr>
          <td>closePopconfirm</td>
          <td>关闭提示</td>
          <td><el-tag class="ml-2" type="info">Boolean</el-tag></td>
          <td>false｜true</td>
          <td>false</td>
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
          <td>footer</td>
          <td>抽屉框底部按钮替换（如上代码演示）</td>
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
          <td>confirm</td>
          <td>点击确认按钮事件回调</td>
          <td>-</td>
        </tr>
        <tr>
          <td>close</td>
          <td>点击取消按钮事件回调</td>
          <td>-</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts" setup>
import CrlandDialog from '@/demo/Feedback/CrlandDialog.vue';
import CrlandDialogSlot from '@/demo/Feedback/CrlandDialogSlot.vue';

import {
  reactive,
  onBeforeMount,
  onMounted,
  defineExpose,
  defineEmits,
  defineProps,
  ref,
} from 'vue';
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
