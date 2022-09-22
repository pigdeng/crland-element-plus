<template>
  <el-container class="crland-layout-wrap">
    <el-aside
      :style="{ width: isCollapse ? '64px' : '300px' }"
      class="layout-el-aside"
    >
      <crland-menu-pro :data="data" :isCollapse="isCollapse"></crland-menu-pro>
    </el-aside>
    <el-container>
      <el-header class="crland-el-header">
        <crland-layout-top
          @handCollapse="handCollapse"
          @handDropdownItem="handDropdownItem"
          :isCollapse="isCollapse"
          :dropdownList="dropdownList"
        >
          <template #left>
            <div style="width: 10px"></div>

            <el-input
              placeholder="请输入.."
              size="large"
              :suffix-icon="Search"
              style="width: 250px"
            />
          </template>
          <!-- 右侧插槽 -->
          <template #right>
            <el-badge is-dot class="solt-right-badge">
              <el-icon :size="18"><Bell /></el-icon>
            </el-badge>
            <div style="width: 10px"></div>
            <el-badge is-dot class="solt-right-badge">
              <el-icon :size="18"><Message /></el-icon>
            </el-badge>
            <div style="width: 3px"></div>
            <el-divider direction="vertical" style="height: 26px" />
          </template>
        </crland-layout-top>
      </el-header>
      <el-main> Main </el-main>
    </el-container>
  </el-container>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import {
  ElContainer,
  ElHeader,
  ElAside,
  ElMain,
  ElDivider,
} from "element-plus";
import { Bell, Message, Search } from "@element-plus/icons-vue";

import collapseLogo from "./img/collapse-logo.png";
// import { CrlandMenuPro } from "crland-element-plus";
const isCollapse = ref(localStorage.getItem("isCollapse") === "true");
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

const handCollapse = () => {
  isCollapse.value = !isCollapse.value;
  localStorage.setItem("isCollapse", isCollapse.value + "");
};

const dropdownList = [{ title: "个人中心" }, { title: "退出登录" }];
const handDropdownItem = (value: any) => {
  console.log("vlaue:", value);
};
</script>
<style lang="scss" scoped>
.crland-layout-wrap {
  height: 100vh;
  .layout-el-aside {
    overflow-x: visible;
    overflow-y: visible;
    border-right: solid 1px var(--el-menu-border-color);
    box-sizing: border-box;
  }
  .crland-el-header {
    padding: 0px;
  }
  .solt-right-badge {
    cursor: pointer;
    margin-top: 8px;
    :deep(.el-badge__content.is-dot) {
      width: 6px;
      height: 6px;
    }
  }
}
</style>
