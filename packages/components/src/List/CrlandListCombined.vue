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
              :label="key"
              name="setItem"
              v-for="(value, key) in setItemShow"
              :key="value"
              >{{ value }}</el-checkbox
            >
          </el-checkbox-group>
        </el-popover>
      </div>
    </div>
    <el-table
      row-key="index"
      :data="tableData"
      :class="bindTableClass()"
      class="crland-table"
      v-loading="loading"
      @selection-change="handleSelectionChange"
      ref="multipleTableRef"
      header-row-class-name="crland-th-row-class"
    >
      <slot></slot>
    </el-table>
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
import {
  ElTable,
  ElCheckboxGroup,
  ElCheckbox,
  ElIcon,
  ElPopover,
} from "element-plus";
import { Grid } from "@element-plus/icons-vue";
import { ref, onMounted, watch, nextTick } from "vue";
import { deepClone } from "../Utils/index";
import Sortable from "sortablejs";

import { propsData } from "./type/CrlandListCombined";
const props = defineProps(propsData);

const emit = defineEmits([
  "update:setItemShowValue",
  "changeIndex",
  "selectionChange",
]);

const checkoutValue: any = ref(deepClone(props.setItemShowValue));
const multipleTableRef: any = ref(null);

watch(
  () => [props.setItemShowValue],
  async (res) => {
    checkoutValue.value = deepClone(props.setItemShowValue);
  },
  { deep: true }
);

// ???????????????
const checkoutChange = (value: any) => {
  emit("update:setItemShowValue", deepClone(checkoutValue.value));
};

onMounted(() => {
  nextTick(() => {
    if (props.isSort) rowDrop();
  });
});

// ???table ???????????????class
const bindTableClass = () => {
  let str = props.domId;
  str = str + ` crland-table-style-${props.tableStyle}`;
  return str;
};

const handleSelectionChange = (res: any) => {
  emit("selectionChange", res);
};

const rowDrop = () => {
  const str = `.${props.domId} .el-table__body-wrapper tbody`;
  const tbody = document.querySelector(
    `.${props.domId} .el-table__body-wrapper tbody`
  );
  Sortable.create(tbody, {
    animation: 200,
    handle: props.sortClass,
    ghostClass: "ba-table-row", //???????????????????????????
    // onStart: (res: any) => {
    //   console.log("res:", res)
    // },

    onEnd: (evt: Sortable.SortableEvent) => {
      emit("changeIndex", evt);
    },
  });
};
</script>
