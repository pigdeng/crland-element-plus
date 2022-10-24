import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
// Layout
const Layout = () => import("@/docs/layout.vue");
// new 文档菜单
import docs from "./docs";
// 导航🥱菜单
import navigation from "./navigation";
// 按钮
import button from "./button";
// 编辑器
import deitor from "./deitor";
// 登录
import login from "./login";
// 反馈组件
import feedback from "./feedback";
// layout 布局组件
import layout from "./layout";
// form 表单组件
import form from "./form";
// echarts图表
import echarts from "./echarts";

const routes: Array<RouteRecordRaw> = [
  docs,
  navigation,
  button,
  deitor,
  login,
  feedback,
  layout,
  form,
  echarts,
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
