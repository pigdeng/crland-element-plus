export default [
  {
    path: "navigation/menu",
    name: "mune",
    component: () =>
      import(/* webpackChunkName: "menu" */ "@/docs/navigation/menu.vue"),
  },
  {
    path: "button/shadowButton",
    name: "shadowButton",
    component: () =>
      import(/* webpackChunkName: "menu" */ "@/docs/button/shadowButton.vue"),
  },
  {
    path: "button/mainButton",
    name: "mainButton",
    component: () =>
      import(/* webpackChunkName: "menu" */ "@/docs/button/mainButton.vue"),
  },
  {
    path: "button/disabledButton",
    name: "disabledButton",
    component: () =>
      import(/* webpackChunkName: "menu" */ "@/docs/button/disabledButton.vue"),
  },
  {
    path: "button/textButton",
    name: "textButton",
    component: () =>
      import(/* webpackChunkName: "menu" */ "@/docs/button/textButton.vue"),
  },
  {
    path: "button/iconButton",
    name: "iconButton",
    component: () =>
      import(/* webpackChunkName: "menu" */ "@/docs/button/iconButton.vue"),
  },
  {
    path: "button/linkButton",
    name: "linkButton",
    component: () =>
      import(/* webpackChunkName: "menu" */ "@/docs/button/linkButton.vue"),
  },
  {
    path: "button/switchButton",
    name: "switchButton",
    component: () =>
      import(/* webpackChunkName: "menu" */ "@/docs/button/switchButton.vue"),
  },
  {
    path: "editor/mavonEdit",
    name: "mavonEdit",
    component: () =>
      import(/* webpackChunkName: "menu" */ "@/docs/editor/mavonEdit.vue"),
  },
  {
    path: "editor/tinymceEdit",
    name: "tinymceEdit",
    component: () =>
      import(/* webpackChunkName: "menu" */ "@/docs/editor/tinymceEdit.vue"),
  },
  {
    path: "login/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "menu" */ "@/docs/login/login.vue"),
  },
  {
    path: "feedback/crlandDrawer",
    name: "crlandDrawer",
    component: () =>
      import(/* webpackChunkName: "menu" */ "@/docs/Feedback/CrlandDrawer.vue"),
  },
  {
    path: "feedback/CrlandDialog",
    name: "CrlandDialog",
    component: () =>
      import(/* webpackChunkName: "menu" */ "@/docs/Feedback/CrlandDialog.vue"),
  },
];
