<template>
  <div class="crland-list-wrap">
    <slot name="search"></slot>
    <div class="table-header">
      <div class="table-header-left">
        <slot name="listTopLeft"></slot>
      </div>
      <div class="table-header-right">
        <slot name="listTopRight"></slot>
        <el-popover
          placement="bottom"
          trigger="hover"
          popper-class="checkout-popover"
        >
          <template #reference>
            <el-icon class="checkout-style"><Grid /></el-icon>
          </template>
          <el-checkbox-group v-model="checkoutValue" @change="checkoutChange">
            <el-checkbox
              :label="i"
              name="setItem"
              v-for="i in setItem"
              :key="i"
            />
          </el-checkbox-group>
        </el-popover>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "crland-list-combined",
});
</script>

<script lang="ts" setup>
import "./style/CrlandListCombined.scss";
import { ElTable, ElIcon, ElPopover } from "element-plus";
import { Grid } from "@element-plus/icons-vue";
import { ref, onMounted, watch } from "vue";
import { deepClone } from "../utils/index";

import { propsData } from "./type/CrlandListCombined";
const props = defineProps(propsData);

const emit = defineEmits(["update:setItemValue"]);

const checkoutValue: any = ref(deepClone(props.setItemValue));
const tableRefs: any = ref(null);

watch(
  () => [props.setItemValue],
  async (res) => {
    checkoutValue.value = deepClone(props.setItemValue);
  },
  { deep: true }
);

// 选择列变化
const checkoutChange = (value: any) => {
  emit("update:setItemValue", deepClone(checkoutValue.value));
};
</script>
