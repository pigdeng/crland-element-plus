const Layout = () => import("@/docs/layout.vue");
export default {
  path: "",
  component: Layout,
  meta: {
    title: "文档",
    isMenu: false,
  },
  children: [
    {
      path: "",
      name: "home",
      meta: {
        title: "文档",
        isMenu: false,
      },
      component: () =>
        import(/* webpackChunkName: "about" */ "@/docs/docs/index.vue"),
    },
  ],
};
