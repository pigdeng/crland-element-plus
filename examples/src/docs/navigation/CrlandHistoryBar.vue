<template>
  <div class="doc-wrap">
    <h2 class="title">HistoryBar 历史导航条</h2>
    <p>
      这是历史导航条组件，需结合菜单组件使用，标签直接引入无需传参数，效果如下图所示
    </p>
    <p>
      使用方法
      <router-link :to="{ name: 'CrlandLayout' }">【前往】</router-link>
    </p>
    <img :src="CODE_PATH + '/img/history-bar-demo.png'" alt="" />
    <!-- <el-divider /> -->
    <h3>使用规则</h3>
    <p class="dot">
      标签引入，<el-tag class="ml-2" type="info">el-history-bar</el-tag>
      无需传参
    </p>
    <!-- <el-divider /> -->

    <h3>代码演示</h3>
    <router-link :to="{ name: 'CrlandLayout' }">【前往】</router-link>
    <!-- <crland-code-show fileUrl="/code/navigation/CrlandMenuTop.txt">
      <CrlandMenuTopDemo style="width: 30%"></CrlandMenuTopDemo>
    </crland-code-show> -->

    <!-- <el-divider /> -->

    <h3>参数说明</h3>
    <!-- <small>可以在分割线上自定义文本内容</small> -->

    <h3>事件</h3>
    <p>暂无</p>
  </div>
</template>

<script lang="ts" setup>
// import CrlandCodeShow from "@/docs/components/CrlandCodeShow.vue";
// import CrlandHistoryBarDemo from "@/demo/navigation/CrlandHistoryBar.vue";

import { reactive, onBeforeMount, onMounted, ref } from "vue";
const props = defineProps({});
const emit = defineEmits([]);
const data = reactive({});

let CODE_PATH;
try {
  CODE_PATH = import.meta.env.VITE_CODE_PATH;
} catch (error) {
  CODE_PATH = process.env.VUE_APP_CODE_PATH;
}
onBeforeMount(() => {
  // 2.组件挂载页面之前执行----onBeforeMount
});
onMounted(() => {
  // 3.组件挂载到页面之后执行-------onMounted
});
</script>
<style scoped lang="scss"></style>
