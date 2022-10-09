<template>
  <div>
    是否收缩菜单：
    <el-switch
      v-model="isCollapse"
      inline-prompt
      active-text="是"
      inactive-text="否"
    />
    <crland-menu-pro :data="data" :isCollapse="isCollapse"></crland-menu-pro>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import collapseLogo from "./img/collapse-logo.png";
import { CrlandMenuPro } from "crland-element-plus-base";
const isCollapse = ref(false);
const data = [
  {
    title: "NavigatorOne",
    index: "NavigatorOne",
    icon: collapseLogo,
    disabled: false,
    tips: 9999,
    child: [
      {
        title: "item One",
        index: "/navigation/CralndMenuPro?type=itemOne",
        disabled: true,
        icon: collapseLogo,
        tips: 9999,
      },
      {
        title: "item Two",
        index: "/navigation/CralndMenuPro?type=itemTwo",
        disabled: false,
        icon: collapseLogo,
        tips: 9999,
      },
      {
        title: "item Three",
        index: "/navigation/CralndMenuPro?type=itemThree",
        disabled: false,
        icon: collapseLogo,
        tips: 9999,
      },
      {
        title: "item Four",
        index: "/navigation/CralndMenuPro?type=itemFour",
        disabled: false,
        tips: 9999,
        icon: collapseLogo,

        child: [
          {
            title: "item Three 2",
            index: "/navigation/CralndMenuPro?type=itemThree2",
            disabled: false,
            tips: 9999,
            icon: collapseLogo,
          },
        ],
      },
    ],
  },
  {
    title: "Navigator Two",
    index: "/navigation/CralndMenuPro?type=NavigatorTwo",
    icon: collapseLogo,
    disabled: true,
    tips: 10,
    child: [],
  },
  {
    title: "Navigator Three",
    index: "/navigation/CralndMenuPro?type=NavigatorThree",
    icon: collapseLogo,
    disabled: false,
    tips: 20,
    child: [],
  },
  {
    title:
      "Navigator FourNavigator FourNavigator FourNavigator FourNavigator Four",
    index: "/navigation/CralndMenuPro?type=NavigatorFour",
    icon: collapseLogo,
    disabled: false,
    child: [],
  },
];
</script>
