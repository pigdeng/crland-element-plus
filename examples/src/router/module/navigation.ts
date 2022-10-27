const Layout = () => import("@/docs/layout.vue");
export default {
  path: "/navigation",
  component: Layout,
  meta: {
    title: "Navigation 导航",
    isMenu: true,
  },
  children: [
    {
      path: "menu",
      name: "mune",
      meta: {
        title: "Menu 菜单组件",
        isMenu: true,
      },
      component: () =>
        require(/* webpackChunkName: "menu" */ "@/docs/navigation/menu.vue"),
    },
    {
      path: "CralndMenuPro",
      name: "CralndMenuPro",
      meta: {
        title: "MenuPro 菜单组件",
        isMenu: true,
      },
      component: () =>
        require(/* webpackChunkName: "menu" */ "@/docs/navigation/CralndMenuPro.vue"),
    },
    {
      path: "CrlandHistoryBar",
      name: "CrlandHistoryBar",
      meta: {
        title: "HistoryBar 历史导航条",
        isMenu: true,
      },
      component: () =>
        require(/* webpackChunkName: "menu" */ "@/docs/navigation/CrlandHistoryBar.vue"),
    },
    {
      path: "CrlandDropdown",
      name: "CrlandDropdown",
      meta: {
        title: "Dropdown 下拉气泡",
        isMenu: true,
      },
      component: () =>
        require(/* webpackChunkName: "menu" */ "@/docs/navigation/CrlandDropdown.vue"),
    },
    {
      path: "CrlandPagination",
      name: "CrlandPagination",
      meta: {
        title: "Pagination 分页",
        isMenu: true,
      },
      component: () =>
        require(/* webpackChunkName: "menu" */ "@/docs/navigation/CrlandPagination.vue"),
    },
    {
      path: "CrlandBreadcrumb",
      name: "CrlandBreadcrumb",
      meta: {
        title: "Breadcrumb 面包屑",
        isMenu: true,
      },
      component: () =>
        require(/* webpackChunkName: "menu" */ "@/docs/navigation/CrlandBreadcrumb.vue"),
    },
    {
      path: "CrlandSteps",
      name: "CrlandSteps",
      meta: {
        title: "Steps 步骤条",
        isMenu: true,
      },
      component: () =>
        require(/* webpackChunkName: "menu" */ "@/docs/navigation/CrlandSteps.vue"),
    },
  ],
};
