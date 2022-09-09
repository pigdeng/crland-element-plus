<template>
  <el-drawer
  v-model="visible"
    custom-class="crland-drawer"
    :show-close="false"
    :before-close="handleClose"
    :size="size"
  >
    <template #header="{ close }">
      <div class="drawer-header">
        <div class="close-bar" title="关闭" @click="close">
          <el-icon><ArrowRightBold></ArrowRightBold></el-icon>
        </div>
        <div class="drawer-title">{{ title }}</div>
      </div>
      </template>
    <slot name="body"></slot>

    <template #footer>
      
      <div class="drawer-bottom" >
        <slot name="footer"></slot>
        <div class="default-btn">
          <el-button @click="handleClose" v-if="isColseBtn">{{
          closeText
        }}</el-button>
        <el-button
          :loading="confirmLoading"
          type="primary"
          @click="emit('confirm')"
          >确定</el-button
        >
        </div>
        
      </div>
    </template>

    
  </el-drawer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "crland-drawer",
});
</script>

<script lang="ts" setup>
import "./style/crland-drawer.scss";
import { defineProps,ref,defineEmits } from "vue";
import { ElButton, ElMessageBox, ElDrawer, ElIcon } from "element-plus";
import { ArrowRightBold } from "@element-plus/icons-vue";
import { propsData } from "./types";

const props = defineProps(propsData);
const drawer = ref(true)


const emit = defineEmits(["update:visible", "confirm", "close"]);

const handleClose = (done: any) => {
  emit("update:visible", false);
  emit("close", false);
  try {
    done();
  } catch (error) {
  }
};
</script>
