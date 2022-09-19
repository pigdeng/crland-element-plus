<template>
  <crland-menu :menuData="menuData"></crland-menu>
</template>

<script lang='ts' setup>
import { CrlandMenu } from 'bui-element-plus';
import {reactive} from 'vue';
const menuData =reactive([
  {
    index: 'navigation',
    title: 'Navigation 导航',
    child: [
      {
        index: 'muneName',
        title: 'Mune 菜单组件',
      },
    ],
  },
  {
    index: 'searchBarName',
    title: 'searchBar 列表搜索',
  },
]);
</script>
