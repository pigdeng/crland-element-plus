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
      path: "crlandListCombined",
      name: "crlandListCombined",
      meta: {
        title: "listCombined 列表组合",
        isMenu: true,
      },
      component: () =>
        import(/* webpackChunkName: "list" */ "@/docs/list/crlandListCombined.vue"),
    },
  ],
};
