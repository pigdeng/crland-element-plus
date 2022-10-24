const Layout = () => import("@/docs/layout.vue");
export default {
  path: "/layout",
  component: Layout,
  meta: {
    title: "Layout 布局",
    isMenu: true,
  },
  children: [
    {
      path: "CrlandLayoutTop",
      name: "CrlandLayoutTop",
      meta: {
        title: "LayoutTop 顶部导航条",
        isMenu: true,
      },
      component: () =>
        require(/* webpackChunkName: "menu" */ "@/docs/layout/CrlandLayoutTop.vue"),
    },
    {
      path: "CrlandLayout",
      name: "CrlandLayout",
      meta: {
        title: "CrlandLayout 布局",
        isMenu: true,
      },
      component: () =>
        require(/* webpackChunkName: "menu" */ "@/docs/layout/CrlandLayout.vue"),
      children: [
        {
          path: "initiating",
          name: "initiating",
          meta: {
            title: "项目启动",
          },
          component: () =>
            require(/* webpackChunkName: "menu" */ "@/demo/layout/CrlandHistory.vue"),
        },
        {
          path: "devalop",
          name: "devalop",
          meta: {
            title: "制定项目章程",
          },
          component: () =>
            require(/* webpackChunkName: "menu" */ "@/demo/layout/CrlandHistory.vue"),
        },
        {
          path: "initiating/stakeholders",
          name: "stakeholders",
          meta: {
            title: "识别干系人",
          },
          component: () =>
            require(/* webpackChunkName: "menu" */ "@/demo/layout/CrlandHistory.vue"),
        },
        {
          path: "initiating/risks1",
          name: "risks1",
          meta: {
            title: "问题1",
          },
          component: () =>
            require(/* webpackChunkName: "menu" */ "@/demo/layout/CrlandHistory.vue"),
        },
        {
          path: "initiating/risks2",
          name: "risks2",
          meta: {
            title: "问题2",
          },
          component: () =>
            require(/* webpackChunkName: "menu" */ "@/demo/layout/CrlandHistory.vue"),
        },
        {
          path: "planing",
          name: "planing",
          meta: {
            title: "项目规划",
          },
          component: () =>
            require(/* webpackChunkName: "menu" */ "@/demo/layout/CrlandHistory.vue"),
        },
        {
          path: "executing",
          name: "executing",
          meta: {
            title: "项目执行",
          },
          component: () =>
            require(/* webpackChunkName: "menu" */ "@/demo/layout/CrlandHistory.vue"),
        },
        {
          path: "monitoring",
          name: "monitoring",
          meta: {
            title: "项目监控",
          },
          component: () =>
            require(/* webpackChunkName: "menu" */ "@/demo/layout/CrlandHistory.vue"),
        },
        {
          path: "closing",
          name: "closing",
          meta: {
            title: "项目收尾",
          },
          component: () =>
            require(/* webpackChunkName: "menu" */ "@/demo/layout/CrlandHistory.vue"),
        },
      ],
    },
  ],
};
