const Layout = () => import("@/docs/layout.vue");
export default {
  path: "/card",
  component: Layout,
  meta: {
    title: "Card 卡片",
    isMenu: true,
  },
  children: [
    {
      path: "CrlandSearchBar",
      name: "CrlandSearchBar",
      meta: {
        title: "searchBar 搜索卡片",
        isMenu: true,
      },
      component: () =>
        require(/* webpackChunkName: "menu" */ "@/docs/card/CrlandSearchBar.vue"),
    },
  ],
};
