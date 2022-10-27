const Layout = () => import("@/docs/layout.vue");
export default {
  path: "/list",
  component: Layout,
  meta: {
    title: "list 列表",
    isMenu: true,
  },
  children: [
    {
      path: "list",
      name: "list",
      meta: {
        title: "列表",
        isMenu: true,
      },
      component: () =>
        require(/* webpackChunkName: "menu" */ "@/demo/list/list.vue"),
    },
  ],
};
