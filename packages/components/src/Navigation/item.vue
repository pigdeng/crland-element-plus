<template>
  <template v-for="(i, index) in data" :key="index">
    <el-sub-menu
      :index="i.index"
      :show-timeout="0"
      :hide-timeout="0"
      :expand-close-icon="ArrowRightBold"
      :expand-open-icon="ArrowDownBold"
      v-if="i.child && i.child.length > 0"
    >
      <template #title>
        <div class="menu-item-bar">
          <img class="menu-icon" :src="i.icon" alt="" v-if="i.icon" />
          <div class="menu-icon" v-else></div>
          <div class="menu-title" :title="i.title">{{ i.title }}</div>
          <el-badge
            :value="i.tips"
            v-if="i.tips !== undefined && i.tips !== ''"
          >
            <div class="tips-wrap"></div>
          </el-badge>
        </div>
      </template>
      <CrlandMenuItem :data="i.child"></CrlandMenuItem>
    </el-sub-menu>

    <el-menu-item
      v-else
      :index="i.index"
      :disabled="i.disabled"
      @click="handMenuItem(i.index)"
    >
      <div class="menu-item-bar">
        <img class="menu-icon" :src="i.icon" alt="" v-if="i.icon" />
        <div class="menu-icon" v-else></div>
        <div class="menu-title" :title="i.title">{{ i.title }}</div>
        <el-badge :value="i.tips">
          <div class="tips-wrap"></div>
        </el-badge>
      </div>
    </el-menu-item>
  </template>
</template>

<script lang="ts" setup>
import { ElMenuItem, ElBadge } from "element-plus";
import { propsData } from "./CrlandMenuPro";
import CrlandMenuItem from "./item.vue";
import { ArrowRightBold, ArrowDownBold } from "@element-plus/icons-vue";
const props = defineProps(propsData);
const emit = defineEmits(["handMenuItem"]);

const handMenuItem = (index: string) => {
  emit("handMenuItem", index);
};
</script>
