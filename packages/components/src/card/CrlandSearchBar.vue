<template>
  <el-form class="crland-search-bar" :label-width="labelWidth">
    <el-row :gutter="20">
      <slot></slot>
      <el-col :span="span" class="btn-col">
        <el-button
          type="primary"
          class="btn-submit"
          title="搜索"
          @click="submit"
        >
          <img :src="IconSearch" alt="" />
        </el-button>
        <el-button
          class="btn-reset"
          title="重置"
          native-type="reset"
          @click="reset"
        >
          <img :src="IconReset" alt="" />
        </el-button>
      </el-col>
    </el-row>
  </el-form>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "crland-search-bar",
});
</script>
<script lang="ts" setup>
import IconReset from "./img/icon-reset.svg";
import IconSearch from "./img/icon-search.svg";

import "./style/CrlandSearchBar.scss";
// import { defineEmits } from "vue";
import { ElForm, ElRow, ElCol, ElButton } from "element-plus";

import { propsData } from "./type/CrlandSearchBar";
const props = defineProps(propsData);

const emit = defineEmits(["submit", "reset"]);

const submit = () => {
  emit("submit");
};

const reset = () => {
  emit("reset");
};
</script>

<style lang="scss" scoped></style>
