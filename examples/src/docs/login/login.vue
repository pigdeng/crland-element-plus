<template>
  <div class="doc-wrap">
    <h2 class="title">login 逃生登录组件</h2>
    <p>
        逃生登录组件，提供登录界面并根据项目主题动态调整按钮颜色和边框样式。自动填充常用账户和密码。
    </p>
    <!-- <el-divider /> -->
    <h3>使用规则</h3>
    <p class="dot">
        标签引入，如下代码演示
    </p>
    <p class="dot">成功案例：
        <a href="https://mon.saas.crland.com.cn/#/login" target="three">监控平台</a>
    </p>
    <!-- <el-divider /> -->

    <h3>代码演示</h3>
    <crland-code-show fileUrl="/code/login/login.txt">
        <loginDemo style="height: 800px" />
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
          <td>imgBg</td>
          <td>背景图片地址</td>
          <td><el-tag class="ml-2" type="info">String</el-tag></td>
          <td>—</td>
          <td>./img/login-bg.png</td>
        </tr>
        <tr>
          <td>imgTitle</td>
          <td>输入框表单上方图片地址</td>
          <td><el-tag class="ml-2" type="info">String</el-tag></td>
          <td>-</td>
          <td>./img/logo-title.png</td>
        </tr>
        <tr>
          <td>loading</td>
          <td>登录按钮加载动画</td>
          <td><el-tag class="ml-2" type="info">Boolean</el-tag></td>
          <td>false｜true</td>
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
          <td>formSubmit</td>
          <td>点击登录按钮，必填校验成功后会传递本方法，并回调登录表单数据</td>
          <td>value</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts" setup>
import { CrlandCodeShow } from 'bui-element-plus';
import loginDemo from '@/demo/login/login.vue';

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
