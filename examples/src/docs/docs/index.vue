<template>
  <div class="doc-wrap">
    <h2 class="title">PC 组件库</h2>
    <h3>组件库简介</h3>
    <p>
      pc组件库是基于Vue3环境，对开源UI框架 element-plus 进行二次定制化封装。
      pc组件库的库名暂时命名为“crland-base”，组件库采用增量模式
      目前（2022-10-19）已封装组件33个，组件涉及8个类目，包含导航、登录、编辑器、图表、表单等类目，能满足部分开发需求。现已发布到公司npm私服。
      后续将在这个基础上对原有组件维护和新增组件。
    </p>
    <h3>注意事项</h3>
    <p class="dot">组件库基于vue3环境开发，必须在vue3环境中使用。</p>
    <!-- <el-divider /> -->
    <h3>使用规则</h3>

    <p class="dot">设置npm 源地址。</p>
    <crland-code-bar
      code="npm config set registry http://maven.saas.crland.com.cn/nexus/repository/npm-group/"
      :language="'Bash'"
    ></crland-code-bar>
    <p class="dot">下载依赖</p>
    <crland-code-bar :code="code_install" :language="'Bash'"></crland-code-bar>

    <p class="dot">标签引入，如下代码演示。</p>

    <h3>代码演示</h3>
    <crland-code-show fileUrl="/code/login/login.txt">
      <loginDemo style="height: 600px"></loginDemo>
    </crland-code-show>
    <br />
    <p>如上述代码所示，我们仅需20行代码，就能构建一个带过载动画的登录页面。</p>
    <br />
    <br />
    <br />
    <br />

    <!-- <el-divider /> -->
  </div>
</template>

<script lang="ts" setup>
import CrlandCodeShow from "@/docs/components/CrlandCodeShow.vue";
// import CrlandBarChart from "@/demo/echarts/CrlandBarChart.vue";
import loginDemo from "@/demo/login/login.vue";
const code_install = `
// 推荐 使用pnpm
pnpm install crland-base

// npm 
npm install crland-base

// yarn
yarn add crland-base
`;
</script>
