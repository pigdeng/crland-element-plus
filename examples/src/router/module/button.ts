const Layout = () => import("@/docs/layout.vue");
export default {
  path: "/button",
  component: Layout,
  meta: {
    title: "Button 按钮",
    isMenu: true,
  },
  children: [
    {
      path: "mainButton",
      name: "mainButton",
      meta: {
        title: "main 主按钮",
        isMenu: true,
      },
      component: () =>
        require(/* webpackChunkName: "menu" */ "@/docs/button/mainButton.vue"),
    },
    {
      path: "shadowButton",
      name: "shadowButton",
      meta: {
        title: "shadow 投影按钮",
        isMenu: true,
      },
      component: () =>
        require(/* webpackChunkName: "menu" */ "@/docs/button/shadowButton.vue"),
    },

    {
      path: "disabledButton",
      name: "disabledButton",
      meta: {
        title: "disabled 失效按钮",
        isMenu: true,
      },
      component: () =>
        require(/* webpackChunkName: "menu" */ "@/docs/button/disabledButton.vue"),
    },
    {
      path: "textButton",
      name: "textButton",
      meta: {
        title: "text 文字按钮",
        isMenu: true,
      },
      component: () =>
        require(/* webpackChunkName: "menu" */ "@/docs/button/textButton.vue"),
    },
    {
      path: "iconButton",
      name: "iconButton",
      meta: {
        title: "icon 图标按钮",
        isMenu: true,
      },
      component: () =>
        require(/* webpackChunkName: "menu" */ "@/docs/button/iconButton.vue"),
    },
    {
      path: "linkButton",
      name: "linkButton",
      meta: {
        title: "link 链接按钮",
        isMenu: true,
      },
      component: () =>
        require(/* webpackChunkName: "menu" */ "@/docs/button/linkButton.vue"),
    },
    {
      path: "switchButton",
      name: "switchButton",
      meta: {
        title: "switch 开关按钮",
        isMenu: true,
      },
      component: () =>
        require(/* webpackChunkName: "menu" */ "@/docs/button/switchButton.vue"),
    },
  ],
};
