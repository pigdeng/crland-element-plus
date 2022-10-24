const Layout = () => import("@/docs/layout.vue");
export default {
  path: "/docs",
  component: Layout,
  meta: {
    title: "文档",
    isMenu: false,
  },
  children: [
    {
      path: "index",
      name: "docs",
      meta: {
        title: "文档",
        isMenu: true,
      },
      component: () =>
        import(/* webpackChunkName: "about" */ "@/docs/docs/index.vue"),
    },
  ],
};
