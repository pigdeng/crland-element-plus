import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import { qiankunWindow } from 'vite-plugin-qiankun/dist/helper'
// Layout
const Layout = () => import("@/docs/layout.vue");
// home
import home from "./module/home";
// new 文档菜单
import docs from "./module/docs";
// 导航🥱菜单
import navigation from "./module/navigation";
// 按钮
import button from "./module/button";
// 编辑器
import deitor from "./module/deitor";
// 登录
import login from "./module/login";
// 反馈组件
import feedback from "./module/feedback";
// layout 布局组件
import layout from "./module/layout";
// form 表单组件
import form from "./module/form";
// echarts图表
import echarts from "./module/echarts";
//  list 列表哦
// import list from "./module/list";

//  card 卡片
import card from "./module/card";

const routes: Array<RouteRecordRaw> = [
  home,
  docs,
  navigation,
  button,
  deitor,
  login,
  feedback,
  layout,
  form,
  echarts,
  // list,
  card,
];


if (qiankunWindow.__POWERED_BY_QIANKUN__) {
  routes.forEach((i: any) => {
    if (i.path) {
      i.path = `${import.meta.env.VITE_CODE_PATH}${i.path}`;
      // i.path = `/ued-pc-web${i.path}`;
    }
  });
}

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
