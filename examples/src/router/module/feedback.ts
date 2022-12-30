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
    {
      path: "feedback/CrlandAlert",
      name: "CrlandAlert",
      meta: {
        title: "Alert 提示",
        isMenu: true,
      },
      component: () =>
        require(/* webpackChunkName: "menu" */ "@/docs/Feedback/CrlandAlert.vue"),
    },
    {
      path: "feedback/CrlandPoppover",
      name: "CrlandPoppover",
      meta: {
        title: "Popover 气泡卡片",
        isMenu: true,
      },
      component: () =>
        require(/* webpackChunkName: "menu" */ "@/docs/Feedback/CrlandPoppover.vue"),
    },
    {
      path: "feedback/CrlandTooltip",
      name: "CrlandTooltip",
      meta: {
        title: "Tooltip 文字提示",
        isMenu: true,
      },
      component: () =>
        require(/* webpackChunkName: "menu" */ "@/docs/Feedback/CrlandTooltip.vue"),
    },
    {
      path: "feedback/CrlandMessageBox",
      name: "CrlandMessageBox",
      meta: {
        title: "MessageBox 消息弹框",
        isMenu: true,
      },
      component: () =>
        require(/* webpackChunkName: "menu" */ "@/docs/Feedback/CrlandMessageBox.vue"),
    },
    {
      path: "feedback/CrlandNotification",
      name: "CrlandNotification",
      meta: {
        title: "Notification 通知",
        isMenu: true,
      },
      component: () =>
        require(/* webpackChunkName: "menu" */ "@/docs/Feedback/CrlandNotification.vue"),
    },
  ],
};
