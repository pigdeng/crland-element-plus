const Layout = () => import("@/docs/layout.vue");
export default {
  path: "/docs",
  component: Layout,
  meta: {
    title: "echarts 图表组件",
    isMenu: true,
  },
  children: [
    {
      path: "CrlandProgressBar",
      name: "CrlandProgressBar",
      meta: {
        title: "progressBar 进度条",
        isMenu: true,
      },
      component: () =>
        require(/* webpackChunkName: "menu" */ "@/docs/echarts/CrlandProgressBar.vue"),
    },
    {
      path: "CrlandBarChart",
      name: "CrlandBarChart",
      meta: {
        title: "barChart 柱状条",
        isMenu: true,
      },
      component: () =>
        require(/* webpackChunkName: "menu" */ "@/docs/echarts/CrlandBarChart.vue"),
    },
    {
      path: "CrlandLineChart",
      name: "CrlandLineChart",
      meta: {
        title: "lineChart 折线图",
        isMenu: true,
      },
      component: () =>
        require(/* webpackChunkName: "menu" */ "@/docs/echarts/CrlandLineChart.vue"),
    },
    {
      path: "CrlandStackedColChart",
      name: "CrlandStackedColChart",
      meta: {
        title: "stackedColChart 堆叠柱状图",
        isMenu: true,
      },
      component: () =>
        require(/* webpackChunkName: "menu" */ "@/docs/echarts/CrlandStackedColChart.vue"),
    },
    {
      path: "CrlandDoughnutChart",
      name: "CrlandDoughnutChart",
      meta: {
        title: "doughnutChart 环形图",
        isMenu: true,
      },
      component: () =>
        require(/* webpackChunkName: "menu" */ "@/docs/echarts/CrlandDoughnutChart.vue"),
    },
    {
      path: "CrlandChinaMap",
      name: "CrlandChinaMap",
      meta: {
        title: "ChinaMap 中国地图",
        isMenu: true,
      },
      component: () =>
        require(/* webpackChunkName: "menu" */ "@/docs/echarts/CrlandChinaMap.vue"),
    },
  ],
};
