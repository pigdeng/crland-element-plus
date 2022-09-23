import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import docs from "./docs";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: import(/* webpackChunkName: "about" */ "@/docs/layout.vue"),
    children: [...docs],
  },
  {
    path: "/layout",
    name: "layout",
    component: import(
      /* webpackChunkName: "about" */ "@/demo/layout/CrlandLayout.vue"
    ),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
