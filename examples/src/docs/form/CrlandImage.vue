<template>
    <div class="doc-wrap">
      <h2 class="title">CrlandImage 图片组件</h2>
      <p>
        这是一个图片容器
        <el-tag class="ml-2" type="info">crland-image</el-tag><br />
        组件保留了 el-image 原因功能，并对其进行样式定制化。
      </p>
      <!-- <el-divider /> -->
      <h3>使用规则</h3>
      <p class="dot">标签引入，如下代码演示</p>
      <!-- <el-divider /> -->
  
      <h3>代码演示【基础】</h3>
      <crland-code-show fileUrl="/code/form/CrlandImage.txt">
        <Crland-Image></Crland-Image>
      </crland-code-show>
  
      <h3>参数说明</h3>
  
      <h3>事件</h3>
  
      <h3>方法</h3>
    </div>
  </template>
  
  <script lang="ts" setup>
  import CrlandCodeShow from "@/docs/components/CrlandCodeShow.vue";
  import CrlandImage from "@/demo/form/CrlandImage.vue";
  </script>
  <style scoped lang="scss"></style>
  