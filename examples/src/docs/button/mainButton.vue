<template>
  <div class="doc-wrap">
    <h2 class="title">主按钮</h2>
    <p>
        主要按钮来自 Element Plus ，更多组件及使用技巧请查看 
        <a href="https://element-plus.gitee.io/zh-CN/" target="three">Element Plus 官网</a>

    </p>
    <!-- <el-divider /> -->
    <h3>使用规则</h3>
    <p class="dot">
        使用 type、plain、round 和 circle 来定义按钮的样式。
    </p>
    <!-- <el-divider /> -->

    <h3>代码演示</h3>
    <crland-code-show fileUrl="/code/button/mainButton.txt">
        <main-button></main-button>
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
import { CrlandCodeShow } from 'bui-element-plus';
import MainButton from '@/demo/button/mainButton.vue';
</script>
