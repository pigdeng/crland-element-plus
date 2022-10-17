<template>
  <crland-menu-top :menuData="menuData"></crland-menu-top>
  <!-- <crland-menu-top ></crland-menu-top> -->
</template>

<script lang="ts" setup>
//import { CrlandMenuTop } from "crland-base";
import { reactive } from "vue";
const menuData = reactive([
  {
    index: "navigation",
    title: "Navigation 导航",
    child: [
      {
        index: "memuName",
        title: "Menu 菜单组件",
      },
    ],
  },
  {
    index: "item1",
    title: "菜单项一",
    child: [
      {
        index: "submenu1",
        title: "子菜单项一",
      },
      {
        index: "submenu2",
        title: "子菜单项二",
      },
    ],
  },
  {
    index: "item2",
    title: "菜单项二",
  },
]);
</script>
