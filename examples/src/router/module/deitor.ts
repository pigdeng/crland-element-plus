const Layout = () => import("@/docs/layout.vue");
export default {
  path: "/editor",
  component: Layout,
  meta: {
    title: "Editor 编辑器",
    isMenu: true,
  },
  children: [
    {
      path: "mavonEdit",
      name: "mavonEdit",
      meta: {
        title: "mavon md编辑器",
        isMenu: true,
      },
      component: () =>
        import(/* webpackChunkName: "deitor" */ "@/docs/editor/mavonEdit.vue"),
    },
    {
      path: "tinymceEdit",
      name: "tinymceEdit",
      meta: {
        title: "tinymce 富文本编辑器",
        isMenu: true,
      },
      component: () =>
        import(/* webpackChunkName: "deitor" */ "@/docs/editor/tinymceEdit.vue"),
    },
  ],
};
