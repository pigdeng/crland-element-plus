const Layout = () => import("@/docs/layout.vue");
export default {
  path: "/form",
  component: Layout,
  meta: {
    title: "form 表单组件",
    isMenu: true,
  },
  children: [
    {
      path: "Rate",
      name: "Rate",
      meta: {
        title: "Rate 评分",
        isMenu: true,
      },
      component: () =>
        require(/* webpackChunkName: "menu" */ "@/docs/form/Rate.vue"),
    },
    {
      path: "Slider",
      name: "Slider",
      meta: {
        title: "Slider 滑块",
        isMenu: true,
      },
      component: () =>
        require(/* webpackChunkName: "menu" */ "@/docs/form/Slider.vue"),
    },
    {
      path: "CrlandTagInput",
      name: "CrlandTagInput",
      meta: {
        title: "TagInput 标签输入框",
        isMenu: true,
      },
      component: () =>
        require(/* webpackChunkName: "menu" */ "@/docs/form/CrlandTagInput.vue"),
    },
    {
      path: "TimeSelect",
      name: "TimeSelect",
      meta: {
        title: "TimeSelect 时间选择",
        isMenu: true,
      },
      component: () =>
        require(/* webpackChunkName: "menu" */ "@/docs/form/TimeSelect.vue"),
    },
    {
      path: "TimePicker",
      name: "TimePicker",
      meta: {
        title: "TimePicker 时间选择器",
        isMenu: true,
      },
      component: () =>
        require(/* webpackChunkName: "menu" */ "@/docs/form/TimePicker.vue"),
    },
    {
      path: "CrlandDatePicker",
      name: "CrlandDatePicker",
      meta: {
        title: "DatePicker 日期选择器",
        isMenu: true,
      },
      component: () =>
        require(/* webpackChunkName: "menu" */ "@/docs/form/CrlandDatePicker.vue"),
    },
    {
      path: "CrlandInput",
      name: "CrlandInput",
      meta: {
        title: "Input 输入框",
        isMenu: true,
      },
      component: () =>
        require(/* webpackChunkName: "menu" */ "@/docs/form/CrlandInput.vue"),
    },
  ],
};
