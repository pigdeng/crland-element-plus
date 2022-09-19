const menuData =   [
  {
    path: "/multilevel_menu_example",
    redirect: "/multilevel_menu_example/page",
    name: "multilevelMenuExample",
    meta: { title: "多级导航", icon: "sidebar-menu" },
    children: [
      {
        path: "page",
        name: "multilevelMenuExample1",
        meta: { title: "导航1" },
      },
      {
        path: "level2",
        name: "multilevelMenuExample2",
        redirect: "/multilevel_menu_example/level2/page",
        meta: { title: "导航2" },
        children: [
          {
            path: "page",
            name: "multilevelMenuExample2-1",
            meta: { title: "导航2-1" },
          },
          {
            path: "level3",
            name: "multilevelMenuExample2-2",
            redirect: "/multilevel_menu_example/level2/level3/page1",
            meta: { title: "导航2-2" },
            children: [
              {
                path: "page1",
                name: "multilevelMenuExample2-2-1",
                meta: { title: "导航2-2-1" },
              },
              {
                path: "page2",
                name: "multilevelMenuExample2-2-2",
                meta: { title: "导航2-2-2" },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path: "/breadcrumb_example",
    redirect: "/breadcrumb_example/list1",
    name: "breadcrumbExample",
    meta: { title: "面包屑导航", icon: "sidebar-breadcrumb" },
    children: [
      {
        path: "list1",
        name: "breadcrumbExampleList1",
        meta: { title: "列表1（平级模式）" },
      },
      {
        path: "detail1",
        name: "breadcrumbExampleDetail1",
        meta: {
          title: "详情1",
          sidebar: false,
          activeMenu: "/breadcrumb_example/list1",
        },
      },
      {
        path: "list2",
        name: "breadcrumbExampleList2",
        redirect: "/breadcrumb_example/list2",
        meta: { title: "列表2（层级模式）" },
        children: [
          {
            path: "",
            meta: {
              title: "列表2（层级模式）",
              sidebar: false,
              breadcrumb: false,
            },
          },
          {
            path: "detail2",
            name: "breadcrumbExampleDetail2",
            meta: {
              title: "详情2",
              sidebar: false,
              activeMenu: "/breadcrumb_example/list2",
            },
          },
        ],
      },
    ],
  },
  {
    path: "/keep_alive_example",
    redirect: "/keep_alive_example/page",
    name: "keepAliveExample",
    meta: { title: "页面缓存", icon: "sidebar-keep-alive" },
    children: [
      {
        path: "page",
        name: "keepAliveExamplePage",
        meta: { title: "页面缓存", breadcrumb: false },
      },
      {
        path: "detail",
        name: "keepAliveExampleDetail",
        meta: {
          title: "平级路由",
          sidebar: false,
          activeMenu: "/keep_alive_example/page",
        },
      },
      {
        path: "nested",
        redirect: "/keep_alive_example/detail2",
        meta: { title: "下级路由", sidebar: false },
        children: [
          {
            path: "detail",
            name: "keepAliveExampleNestedDetail",
            meta: { title: "测试页面", activeMenu: "/keep_alive_example/page" },
          },
        ],
      },
      {
        path: "nested",
        name: "keepAliveExampleNested1",
        meta: { title: "路由多级缓存(1)" },
        children: [
          {
            path: "nested",
            name: "keepAliveExampleNested2",
            meta: { title: "路由多级缓存(1-1)" },
            children: [
              {
                path: "test",
                name: "keepAliveExampleNestedTest",
                meta: { title: "测试页面(1-1-1)", cache: true },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path: "/component_basic_example",
    redirect: "/component_basic_example/icon",
    name: "componentBasicExample",
    meta: { title: "基础组件（部分）", icon: "sidebar-element" },
    children: [
      {
        path: "icon",
        name: "componentBasicExampleIcon",
        meta: { title: "图标" },
      },
      {
        path: "button",
        name: "componentBasicExampleButton",
        meta: { title: "按钮" },
      },
      {
        path: "link",
        name: "componentBasicExampleLink",
        meta: { title: "文字链接" },
      },
      {
        path: "radio",
        name: "componentBasicExampleRadio",
        meta: { title: "单选框" },
      },
      {
        path: "checkbox",
        name: "componentBasicExampleCheckbox",
        meta: { title: "多选框" },
      },
      {
        path: "input",
        name: "componentBasicExampleInput",
        meta: { title: "输入框" },
      },
      {
        path: "inputnumber",
        name: "componentBasicExampleInputnumber",
        meta: { title: "计数器" },
      },
      {
        path: "select",
        name: "componentBasicExampleSelect",
        meta: { title: "选择器" },
      },
      {
        path: "switch",
        name: "componentBasicExampleSwitch",
        meta: { title: "开关" },
      },
      {
        path: "slider",
        name: "componentBasicExampleSlider",
        meta: { title: "滑块" },
      },
      {
        path: "timepicker",
        name: "componentBasicExampleTimepicker",
        meta: { title: "时间选择器" },
      },
      {
        path: "datepicker",
        name: "componentBasicExampleDatepicker",
        meta: { title: "日期选择器" },
      },
      {
        path: "datetimepicker",
        name: "componentBasicExampleDatetimepicker",
        meta: { title: "日期时间选择器" },
      },
      {
        path: "rate",
        name: "componentBasicExampleRate",
        meta: { title: "评分" },
      },
    ],
  },
  {
    path: "/component_extend_example",
    redirect: "/component_extend_example/pageheader",
    name: "componentExtendExample",
    meta: { title: "扩展组件", icon: "sidebar-component" },
    children: [
      {
        path: "svg",
        name: "componentExtendExampleSvg",
        meta: { title: "SVG Icon" },
      },
      {
        path: "pageheader",
        name: "componentExtendExamplePageheader",
        meta: { title: "页头" },
      },
      {
        path: "pagemain",
        name: "componentExtendExamplePagemain",
        meta: { title: "内容块" },
      },
      {
        path: "actionbar",
        name: "componentExtendExampleActionbar",
        meta: { title: "固定底部操作栏" },
      },
      {
        path: "searchbar",
        name: "componentExtendExampleSearchbar",
        meta: { title: "搜索面板" },
      },
      {
        path: "batchactionbar",
        name: "componentExtendExampleBatchactionbar",
        meta: { title: "批量操作栏" },
      },
      {
        path: "tableautoheight",
        name: "componentExtendExampleTableautoheight",
        meta: { title: "表格高度自适应" },
      },
      {
        path: "upload",
        name: "componentExtendExampleUpload",
        meta: { title: "上传" },
      },
      {
        path: "imagepreview",
        name: "componentExtendExampleImagePreview",
        meta: { title: "图片预览" },
      },
      {
        path: "trend",
        name: "componentExtendExampleTrend",
        meta: { title: "趋势标记" },
      },
      {
        path: "pcas",
        name: "componentExtendExamplePcas",
        meta: { title: "省市区街道联动" },
      },
      {
        path: "editor",
        name: "componentExtendExampleEditor",
        meta: { title: "编辑器" },
      },
    ],
  },
  {
    path: "/permission_example",
    redirect: "/permission_example/index",
    name: "permissionExample",
    meta: { title: "权限验证", icon: "sidebar-permission" },
    children: [
      {
        path: "index",
        name: "permissionExampleIndex",
        meta: {
          title: "权限验证",
          auth: ["permission.browse"],
          sidebar: false,
          breadcrumb: false,
          activeMenu: "/permission_example",
        },
      },
    ],
  },
  {
    path: "/mock_example",
    redirect: "/mock_example/index",
    name: "mockExample",
    meta: { title: "Mock", icon: "sidebar-mock" },
    children: [
      {
        path: "index",
        name: "mockExampleIndex",
        meta: {
          title: "Mock",
          sidebar: false,
          breadcrumb: false,
          activeMenu: "/mock_example",
        },
      },
    ],
  },
  {
    path: "/jsx_example",
    redirect: "/jsx_example/index",
    name: "jsxExample",
    meta: { title: "JSX", icon: "sidebar-jsx" },
    children: [
      {
        path: "index",
        name: "jsxExampleIndex",
        meta: {
          title: "JSX",
          sidebar: false,
          breadcrumb: false,
          activeMenu: "/jsx_example",
        },
      },
    ],
  },
  {
    path: "/link",
    redirect: "/link/iframe",
    name: "externalLinkExample",
    meta: { title: "外链", icon: "sidebar-external-link" },
    children: [
      {
        path: "https://gitee.com/hooray/fantastic-admin",
        meta: { title: "Gitee 仓库" },
      },
      {
        path: "https://github.com/hooray/fantastic-admin",
        meta: { title: "Github 仓库" },
      },
    ],
  },
]; 


export default menuData;