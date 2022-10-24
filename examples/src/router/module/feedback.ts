const Layout = () => import("@/docs/layout.vue");
export default {
  path: "/feedback",
  component: Layout,
  meta: {
    title: "Feedback 反馈组件",
    isMenu: true,
  },
  children: [
    {
      path: "feedback/crlandDrawer",
      name: "crlandDrawer",
      meta: {
        title: "Drawer 抽屉",
        isMenu: true,
      },
      component: () =>
        require(/* webpackChunkName: "menu" */ "@/docs/Feedback/CrlandDrawer.vue"),
    },
    {
      path: "feedback/CrlandDialog",
      name: "CrlandDialog",
      meta: {
        title: "Dialog 对话框",
        isMenu: true,
      },
      component: () =>
        require(/* webpackChunkName: "menu" */ "@/docs/Feedback/CrlandDialog.vue"),
    },
  ],
};
