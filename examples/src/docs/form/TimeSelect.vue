<template>
  <div class="doc-wrap">
    <h2 class="title">TimeSelect 时间选择</h2>
    <p>
      来自 Element Plus ，更多组件及使用技巧请查看
      <a href="https://element-plus.gitee.io/zh-CN/" target="three"
        >Element Plus 官网</a
      >
    </p>
    <!-- <el-divider /> -->
    <h3>使用规则</h3>
    <p class="dot">标签引入，如下代码演示。</p>
    <!-- <el-divider /> -->

    <h3>代码演示</h3>
    <crland-code-show fileUrl="/code/form/TimeSelect.txt">
      <TimeSelect></TimeSelect>
    </crland-code-show>

    <h3>代码演示【区间选择】</h3>
    <crland-code-show fileUrl="/code/form/TimeSelectRange.txt">
      <TimeSelectRange></TimeSelectRange>
    </crland-code-show>

    <!-- <el-divider /> -->

    <h3>参数说明</h3>
    <p>暂无</p>
    <!-- <small>可以在分割线上自定义文本内容</small> -->

    <h3>事件</h3>
    <p>暂无</p>
  </div>
</template>

<script lang="ts" setup>
import { CrlandCodeShow } from "crland-base";
import TimeSelect from "@/demo/form/TimeSelect.vue";
import TimeSelectRange from "@/demo/form/TimeSelectRange.vue";
</script>
