export default [
  {
    path: "navigation/CrlandDropdown",
    name: "CrlandDropdown",
    component: () =>
      require(/* webpackChunkName: "menu" */ "@/docs/navigation/CrlandDropdown.vue"),
  },
  {
    path: "navigation/CrlandPagination",
    name: "CrlandPagination",
    component: () =>
      require(/* webpackChunkName: "menu" */ "@/docs/navigation/CrlandPagination.vue"),
  },
  {
    path: "navigation/CrlandBreadcrumb",
    name: "CrlandBreadcrumb",
    component: () =>
      require(/* webpackChunkName: "menu" */ "@/docs/navigation/CrlandBreadcrumb.vue"),
  },
  {
    path: "navigation/CrlandSteps",
    name: "CrlandSteps",
    component: () =>
      require(/* webpackChunkName: "menu" */ "@/docs/navigation/CrlandSteps.vue"),
  },
  {
    path: "navigation/CrlandHistoryBar",
    name: "CrlandHistoryBar",
    component: () =>
      require(/* webpackChunkName: "menu" */ "@/docs/navigation/CrlandHistoryBar.vue"),
  },
  {
    path: "navigation/menu",
    name: "mune",
    component: () =>
      require(/* webpackChunkName: "menu" */ "@/docs/navigation/menu.vue"),
  },
  {
    path: "navigation/CralndMenuPro",
    name: "CralndMenuPro",
    component: () =>
      require(/* webpackChunkName: "menu" */ "@/docs/navigation/CralndMenuPro.vue"),
  },
  {
    path: "button/shadowButton",
    name: "shadowButton",
    component: () =>
      require(/* webpackChunkName: "menu" */ "@/docs/button/shadowButton.vue"),
  },
  {
    path: "button/mainButton",
    name: "mainButton",
    component: () =>
      require(/* webpackChunkName: "menu" */ "@/docs/button/mainButton.vue"),
  },
  {
    path: "button/disabledButton",
    name: "disabledButton",
    component: () =>
      require(/* webpackChunkName: "menu" */ "@/docs/button/disabledButton.vue"),
  },
  {
    path: "button/textButton",
    name: "textButton",
    component: () =>
      require(/* webpackChunkName: "menu" */ "@/docs/button/textButton.vue"),
  },
  {
    path: "button/iconButton",
    name: "iconButton",
    component: () =>
      require(/* webpackChunkName: "menu" */ "@/docs/button/iconButton.vue"),
  },
  {
    path: "button/linkButton",
    name: "linkButton",
    component: () =>
      require(/* webpackChunkName: "menu" */ "@/docs/button/linkButton.vue"),
  },
  {
    path: "button/switchButton",
    name: "switchButton",
    component: () =>
      require(/* webpackChunkName: "menu" */ "@/docs/button/switchButton.vue"),
  },
  {
    path: "editor/mavonEdit",
    name: "mavonEdit",
    component: () =>
      require(/* webpackChunkName: "menu" */ "@/docs/editor/mavonEdit.vue"),
  },
  {
    path: "editor/tinymceEdit",
    name: "tinymceEdit",
    component: () =>
      require(/* webpackChunkName: "menu" */ "@/docs/editor/tinymceEdit.vue"),
  },
  {
    path: "login/login",
    name: "login",
    component: () =>
      require(/* webpackChunkName: "menu" */ "@/docs/login/login.vue"),
  },
  {
    path: "feedback/crlandDrawer",
    name: "crlandDrawer",
    component: () =>
      require(/* webpackChunkName: "menu" */ "@/docs/Feedback/CrlandDrawer.vue"),
  },
  {
    path: "feedback/CrlandDialog",
    name: "CrlandDialog",
    component: () =>
      require(/* webpackChunkName: "menu" */ "@/docs/Feedback/CrlandDialog.vue"),
  },
  {
    path: "layout/CrlandLayoutTop",
    name: "CrlandLayoutTop",
    component: () =>
      require(/* webpackChunkName: "menu" */ "@/docs/layout/CrlandLayoutTop.vue"),
  },
  {
    path: "layout/CrlandLayout",
    name: "CrlandLayout",
    component: () =>
      require(/* webpackChunkName: "menu" */ "@/docs/layout/CrlandLayout.vue"),
    children: [
      {
        path: "initiating",
        name: "initiating",
        meta: {
          title: "项目启动",
        },
        component: () =>
          require(/* webpackChunkName: "menu" */ "@/demo/layout/CrlandHistory.vue"),
      },
      {
        path: "initiating/devalop",
        name: "devalop",
        meta: {
          title: "制定项目章程",
        },
        component: () =>
          require(/* webpackChunkName: "menu" */ "@/demo/layout/CrlandHistory.vue"),
      },
      {
        path: "initiating/stakeholders",
        name: "stakeholders",
        meta: {
          title: "识别干系人",
        },
        component: () =>
          require(/* webpackChunkName: "menu" */ "@/demo/layout/CrlandHistory.vue"),
      },
      {
        path: "initiating/risks1",
        name: "risks1",
        meta: {
          title: "问题1",
        },
        component: () =>
          require(/* webpackChunkName: "menu" */ "@/demo/layout/CrlandHistory.vue"),
      },
      {
        path: "initiating/risks2",
        name: "risks2",
        meta: {
          title: "问题2",
        },
        component: () =>
          require(/* webpackChunkName: "menu" */ "@/demo/layout/CrlandHistory.vue"),
      },
      {
        path: "planing",
        name: "planing",
        meta: {
          title: "项目规划",
        },
        component: () =>
          require(/* webpackChunkName: "menu" */ "@/demo/layout/CrlandHistory.vue"),
      },
      {
        path: "executing",
        name: "executing",
        meta: {
          title: "项目执行",
        },
        component: () =>
          require(/* webpackChunkName: "menu" */ "@/demo/layout/CrlandHistory.vue"),
      },
      {
        path: "monitoring",
        name: "monitoring",
        meta: {
          title: "项目监控",
        },
        component: () =>
          require(/* webpackChunkName: "menu" */ "@/demo/layout/CrlandHistory.vue"),
      },
      {
        path: "closing",
        name: "closing",
        meta: {
          title: "项目收尾",
        },
        component: () =>
          require(/* webpackChunkName: "menu" */ "@/demo/layout/CrlandHistory.vue"),
      },
    ],
  },
  {
    path: "form/Rate",
    name: "Rate",
    component: () =>
      require(/* webpackChunkName: "menu" */ "@/docs/form/Rate.vue"),
  },
  {
    path: "form/Slider",
    name: "Slider",
    component: () =>
      require(/* webpackChunkName: "menu" */ "@/docs/form/Slider.vue"),
  },
  {
    path: "form/CrlandTagInput",
    name: "CrlandTagInput",
    component: () =>
      require(/* webpackChunkName: "menu" */ "@/docs/form/CrlandTagInput.vue"),
  },
  {
    path: "form/TimeSelect",
    name: "TimeSelect",
    component: () =>
      require(/* webpackChunkName: "menu" */ "@/docs/form/TimeSelect.vue"),
  },
  {
    path: "form/TimePicker",
    name: "TimePicker",
    component: () =>
      require(/* webpackChunkName: "menu" */ "@/docs/form/TimePicker.vue"),
  },
  {
    path: "form/CrlandDatePicker",
    name: "CrlandDatePicker",
    component: () =>
      require(/* webpackChunkName: "menu" */ "@/docs/form/CrlandDatePicker.vue"),
  },
  {
    path: "form/CrlandInput",
    name: "CrlandInput",
    component: () =>
      require(/* webpackChunkName: "menu" */ "@/docs/form/CrlandInput.vue"),
  },
  {
    path: "echarts/CrlandProgressBar",
    name: "CrlandProgressBar",
    component: () =>
      require(/* webpackChunkName: "menu" */ "@/docs/echarts/CrlandProgressBar.vue"),
  },
  {
    path: "echarts/CrlandBarChart",
    name: "CrlandBarChart",
    component: () =>
      require(/* webpackChunkName: "menu" */ "@/docs/echarts/CrlandBarChart.vue"),
  },
  {
    path: "echarts/CrlandLineChart",
    name: "CrlandLineChart",
    component: () =>
      require(/* webpackChunkName: "menu" */ "@/docs/echarts/CrlandLineChart.vue"),
  },
  {
    path: "echarts/CrlandStackedColChart",
    name: "CrlandStackedColChart",
    component: () =>
      require(/* webpackChunkName: "menu" */ "@/docs/echarts/CrlandStackedColChart.vue"),
  },
  {
    path: "echarts/CrlandDoughnutChart",
    name: "CrlandDoughnutChart",
    component: () =>
      require(/* webpackChunkName: "menu" */ "@/docs/echarts/CrlandDoughnutChart.vue"),
  },
];
