<template>
  <div class="docs-layout-wrap">
    <div class="docs-left">
      <div class="docs-left-title">
        <h1>Pc</h1>
        <img :src="require('@/assets/img/to-mobile.png')" alt="" />
      </div>
      <crland-menu :menuData="getMenu()" defaultActive="path"></crland-menu>
    </div>
    <div class="docs-right">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { CrlandMenu } from "crland-base";
import menuData from "@/docs/data/menu";
import { useRouter, RouterView } from "vue-router";
const router: any = useRouter();

// 根据路由配置生成菜单
const getMenu = () => {
  return mapChild(router.options.routes, "", false);
};

/**
 * 遍历路由数组
 * @param list 遍历的数组路由children
 * @param parentPath 父级的path
 * @param isChild 当前遍历是否children
 */
const mapChild = (list: any, parentPath: string, isChild: boolean) => {
  let backData: any = [];
  list.map((i: any) => {
    if (i.meta?.isMenu) {
      // 当前path
      let nowPath = `${parentPath + (isChild ? "/" : "") + i.path}`;
      let obj: any = {
        title: i.meta?.title || "未命名标题",
        index: nowPath,
        disabled: i.meta?.disabled || false,
      };
      if (i.children?.length > 0) {
        obj.child = mapChild(i.children, nowPath, true);
      }
      backData.push(obj);
    } else if (!i.meta?.isMenu && i.children?.length > 0) {
      // 对一级菜单的处理
      backData = [...backData, ...mapChild(i.children, i.path, true)];
    }
  });
  return backData;
};
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
