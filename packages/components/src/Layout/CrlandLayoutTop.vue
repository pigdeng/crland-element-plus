<template>
  <div class="layout-top-wrap" :style="{ height: computedSize(height) }">
    <div class="layout-top-left">
      <el-icon
        class="layout-top-icon"
        :class="isCollapse ? '' : 'icon-collapse'"
        :size="20"
        @click="handCollapse"
      >
        <svg
          data-v-49e15297=""
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
        >
          <path
            data-v-49e15297=""
            d="M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 0 0 0-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0 0 14.4 7z"
          ></path>
        </svg>
      </el-icon>
      <div class="slot-left">
        <slot name="left"></slot>
      </div>
    </div>
    <div class="layout-top-right">
      <!-- <el-icon title="全屏" v-if="isFullScreen"><FullScreen /></el-icon> -->
      <div class="slot-right">
        <slot name="right"></slot>
      </div>
      <el-avatar class="crland-el-avatar" :src="userInfo.avatar">
        {{ getFirstText(userInfo.userName) }}
      </el-avatar>
      <el-dropdown class="crland-el-dropdown">
        <span class="el-dropdown-link">
          {{ userInfo.userName }}
          <el-icon class="el-icon--right">
            <ArrowDown />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item
              v-for="(i, index) in dropdownList"
              :key="index"
              :disabled="i.disabled"
              :divided="i.divided"
              @click="handDropdownItem(i)"
              >{{ i.title }}</el-dropdown-item
            >
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "crland-layout-top",
});
</script>
<script lang="ts" setup>
import { ref, defineEmits } from "vue";
import "./style/CrlandLayoutTop.scss";
import { computedSize, getFirstText } from "../utils/index";
import {
  ElIcon,
  ElAvatar,
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem,
  ElDivider,
} from "element-plus";

import { ArrowDown, FullScreen } from "@element-plus/icons-vue";

import { propsData } from "./CrlandLayoutTop";
const props = defineProps(propsData);

const emit = defineEmits(["handCollapse", "handDropdownItem"]);

const handCollapse = () => {
  emit("handCollapse");
};
const handDropdownItem = (value: any) => {
  emit("handDropdownItem", value);
};
</script>
