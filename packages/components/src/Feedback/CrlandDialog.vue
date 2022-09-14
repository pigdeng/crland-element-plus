<template>
  <el-dialog
    v-model="visible"
    custom-class="crland-dialog"
    :before-close="handleClose"
    :show-close="false"
  >
    <template #header="{ close, titleId, titleClass }">
      <div class="dialog-header">
        <div class="dialog-header-title" :id="titleId" :class="titleClass">
          {{ title }}
        </div>
        <el-icon class="dialog-header-close" @click="close" title="关闭"
          ><Close
        /></el-icon>
      </div>
    </template>

    <slot name="body"></slot>

    <template #footer>
      <span class="dialog-footer dialog-bottom">
        <slot name="footer"></slot>
        <div class="default-btn">
          <el-button @click="handleClose" v-if="isColseBtn">{{
            closeText
          }}</el-button>
          <el-button
            :loading="confirmLoading"
            type="primary"
            @click="emit('confirm')"
            >{{ confirmText }}</el-button
          >
        </div>
      </span>
    </template>
  </el-dialog>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "crland-dialog",
});
</script>

<script lang="ts" setup>
import "./style/crland-dialog.scss";
import { ref } from "vue";
import { ElButton, ElMessageBox, ElDialog, ElIcon } from "element-plus";
import { Close } from "@element-plus/icons-vue";
import { propsData } from "./types";
const props = defineProps(propsData);

const emit = defineEmits(["update:visible", "confirm", "close"]);

const handleClose = (done: any, action: any) => {
  if (props.closePopconfirm && !action) {
    ElMessageBox.confirm("确认关闭?", {
      confirmButtonText: "确定",
      cancelButtonText: "取消",
    }).then(() => {
      handleClose(done, true);
    });
    return;
  }
  emit("update:visible", false);
  emit("close", false);
  try {
    done();
  } catch (error) {}
};
</script>
