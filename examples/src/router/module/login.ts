const Layout = () => import("@/docs/layout.vue");
export default {
  path: "/logon",
  component: Layout,
  meta: {
    title: "登录",
    isMenu: true,
  },
  children: [
    {
      path: "login",
      name: "login",
      meta: {
        title: "逃生登录",
        isMenu: true,
      },
      component: () =>
        import(/* webpackChunkName: "login" */ "@/docs/login/login.vue"),
    },
  ],
};
