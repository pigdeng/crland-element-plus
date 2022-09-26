<template>
  <div class="docs-layout-wrap">
    <div class="docs-left">
      <div class="docs-left-title">
        <h1>Pc</h1>
        <img :src="require('@/assets/img/to-mobile.png')" alt="" />
      </div>
      <crland-menu :menuData="menuData"></crland-menu>
    </div>
    <div class="docs-right">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { CrlandMenu } from "crland-element-plus";
import menuData from "@/docs/data/menu";
import { reactive, onBeforeMount, onMounted, ref } from "vue";
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
<style scoped lang="scss">
.docs-layout-wrap {
  width: 1336px;
  margin: 0 auto;
  min-height: 100vh;
  position: relative;
  .docs-left {
    position: sticky;
    // position: absolute;
    top: 0px;
    left: 0px;
    width: 242px;
    height: 100vh;
    overflow: auto;
    float: left;
    background: #fff;
    z-index: 20;
    .docs-left-title {
      display: flex;
      align-items: center;
      position: relative;
      > h1 {
        font-size: 24px;
        font-weight: 700;
        margin: 25px 113px 17px 52px;
      }
      > img {
        position: absolute;
        cursor: pointer;
        top: 28px;
        right: 8px;
        width: 34px;
        height: 34px;
      }
    }
  }
  .docs-right {
    // position: relative;
    margin-left: 242px;
    padding: 0px 50px;
    height: 100%;
    overflow-y: auto;
    box-sizing: border-box;
    padding-bottom: 30px;
  }
}

.docs-layout-wrap-qiankun {
  min-height: calc(100vh - 165px);
}
</style>
