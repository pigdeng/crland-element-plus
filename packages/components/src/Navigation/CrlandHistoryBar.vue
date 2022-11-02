<template>
  <el-scrollbar class="crland-menu-top-wrap" view-class="crland-menu-top-view">
    <div class="router-ul">
      <router-link
        :to="i.path"
        v-for="(i, index) in routerHistory"
        :key="i.path"
        class="router-li"
        :class="i.path === router.currentRoute.value.path ? 'tag-active' : ''"
      >
        <!-- <span class="span-tag">{{ i.meta.title || "未命名菜单" }} </span> -->

        <el-dropdown
          class="crland-dropdown"
          trigger="contextmenu"
          popper-class="right-trigger"
        >
          <span class="span-tag">
            {{ i.meta.title || "未命名菜单" }}
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item @click.stop="removeHistory(index)"
                >关闭</el-dropdown-item
              >
              <el-dropdown-item @click.stop="removeOther(index)"
                >关闭其他标签页</el-dropdown-item
              >
              <el-dropdown-item @click.stop="removeRight(index)"
                >关闭右侧标签页</el-dropdown-item
              >
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        <el-icon
          :size="10"
          class="span-tag-close"
          title="关闭"
          @click.prevent.stop="removeHistory(index)"
          ><Close
        /></el-icon>
      </router-link>
      <div style="width: 15px; height: 20px; flex-shrink: 0"></div>
    </div>
  </el-scrollbar>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "crland-history-bar",
});
</script>
<script lang="ts" setup>
import { ref, onMounted, watch } from "vue";
import {
  ElScrollbar,
  ElIcon,
  ElMessage,
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem,
} from "element-plus";
import { Close } from "@element-plus/icons-vue";
import { deepClone } from "../Utils/index";
import "./style/CrlandHistoryBar.scss";

import { useRouter, useRoute, RouterLink } from "vue-router";
const router: any = useRouter();
const route: any = useRoute();

import { propsData } from "./CrlandHistoryBar";
const props = defineProps(propsData);

const routerHistory = ref([deepClone(router.currentRoute.value)]);

watch(
  () => router.currentRoute.value,
  (newValue) => {
    addTag(newValue);
  }
);

// 添加标签
const addTag = (value: any) => {
  // 判断当前路由数据中是否存在
  let isHave = routerHistory.value.some((i) => {
    return i.path === value.path;
  });
  if (!isHave) {
    routerHistory.value.push(deepClone(value));
  }
};

// 删除标签
const removeHistory = (index: number) => {
  if (routerHistory.value.length === 1) {
    ElMessage.warning("当前不可删除");
    return;
  }
  // 删除的标签是当前打开页面
  if (routerHistory.value[index].path === router.currentRoute.value.path) {
    router.back();
  }
  // 删除标签
  routerHistory.value.splice(index, 1);
};

// 右键关闭其他
const removeOther = (index: number) => {
  router.push(routerHistory.value[index].path);
  routerHistory.value = [routerHistory.value[index]];
};

// 右键关闭右侧
const removeRight = (index: number) => {
  let historylength = routerHistory.value.length;
  routerHistory.value.splice(index + 1, historylength - index - 1);
  let isHave = routerHistory.value.some((i) => {
    return i.path === router.currentRoute.value.path;
  });
  if (!isHave) {
    historylength = routerHistory.value.length;
    router.push(routerHistory.value[historylength - 1].path);
  }
};
</script>
