<template>
  <el-container class="crland-layout-wrap">
    <el-aside
      :style="{ width: isCollapse ? '65px' : '300px' }"
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
          :userInfo="userInfo"
        >
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
      <el-main class="crland-el-main">
        <crland-history-bar style="height: 50px"></crland-history-bar>
        <router-view></router-view>
      </el-main>
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
import { CrlandMenuPro, CrlandHistoryBar, CrlandLayoutTop } from "crland-base";

import { RouterView } from "vue-router";
const isCollapse = ref(localStorage.getItem("isCollapse") === "true");

// 这里做路径处理，组件实际使用中不需要
let rootPath = "";
if (window.__POWERED_BY_QIANKUN__) {
  rootPath = "/ued-pc-web";
}

// 菜单数据
const data = [
  {
    title: "项目启动",
    index: "initiating",
    icon: collapseLogo,
    disabled: false,
    tips: 9999,
    child: [
      {
        title: "制定项目章程",
        index: rootPath + "/layout/CrlandLayout/initiating/devalop",
        disabled: true,
        icon: collapseLogo,
        tips: 9999,
      },
      {
        title: "识别干系人",
        index: rootPath + "/layout/CrlandLayout/initiating/stakeholders",
        disabled: false,
        icon: collapseLogo,
        tips: 9999,
      },
      {
        title: "登记风险",
        index: rootPath + "/layout/CrlandLayout/initiating/risks1",
        disabled: false,
        tips: 9999,
        icon: collapseLogo,
        child: [
          {
            title: "登记风险1",
            index: rootPath + "/layout/CrlandLayout/initiating/risks1",
            disabled: false,
            tips: 9999,
            icon: collapseLogo,
          },
          {
            title: "登记风险2",
            index: rootPath + "/layout/CrlandLayout/initiating/risks2",
            disabled: false,
            tips: 9999,
            icon: collapseLogo,
          },
        ],
      },
    ],
  },
  {
    title: "项目规划",
    index: rootPath + "/layout/CrlandLayout/planing",
    icon: collapseLogo,
    disabled: true,
    tips: 10,
    child: [],
  },
  {
    title: "项目执行",
    index: rootPath + "/layout/CrlandLayout/executing",
    icon: collapseLogo,
    disabled: false,
    tips: 20,
    child: [],
  },
  {
    title: "项目监控",
    index: rootPath + "/layout/CrlandLayout/monitoring",
    icon: collapseLogo,
    disabled: false,
    child: [],
  },
  {
    title: "项目收尾",
    index: rootPath + "/layout/CrlandLayout/closing",
    icon: collapseLogo,
    disabled: false,
    child: [],
  },
];

const userInfo = {
  userName: "华小润",
  avatar: "",
};

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
  background-color: #f6fafb;
  .layout-el-aside {
    background: #fff;
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
