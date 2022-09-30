<template>
  <el-input
    class="crland-tag-input"
    :size="size"
    v-model="inputValue"
    @keyup.enter.native="addTag"
    @keyup.delete.native="deleteInputValue"
    @input="inputValueChange"
    placeholder="按回车键生成标签"
  >
    <template #prefix>
      <el-tag
        v-for="(tag, index) in value"
        :key="index"
        :type="tagType"
        :effect="tagEffect"
        :round="tagRound"
        :size="size"
        closable
        :hit="soonDeleteIndex === index"
        @close="removeTag(index)"
      >
        {{ tag }}
      </el-tag>
    </template>
  </el-input>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { any } from "expect";
export default defineComponent({
  name: "crland-tag-input",
});
</script>
<script lang="ts" setup>
import "./style/CrlandTagInput.scss";
import { ref, computed } from "vue";
import { ElInput, ElTag, ElMessage } from "element-plus";
import { computedSize, deepClone } from "../utils/index";

import { propsData } from "./CrlandTagInput";
const props = defineProps(propsData);
const emit = defineEmits(["update:value"]);
const tagList = ref([]);

// 即将要删除的标签 index
const soonDeleteIndex: any = ref(null);

// 输入框的输入值
const inputValue = ref("");

// 添加标签
const addTag = () => {
  // 不为空校验
  if (inputValue.value === "") {
    ElMessage.warning("请输入标签内容");
    return;
  }

  // 标签重名校验
  if (props.value.indexOf(inputValue.value) !== -1) {
    ElMessage.warning("当前标签已存在");
    return;
  }
  let newValue = deepClone(props.value);
  newValue.push(inputValue.value);
  emit("update:value", newValue);
  inputValue.value = "";
  soonDeleteIndex.value = null;
};

// 点击标签删除按钮删除标签
const removeTag = (index: number) => {
  let newValue = deepClone(props.value);
  newValue.splice(index, 1);
  emit("update:value", newValue);
  soonDeleteIndex.value = null;
};

// 通过输入框删除键删除标签
const deleteInputValue = () => {
  if (!inputValue.value && soonDeleteIndex.value !== null) {
    removeTag(soonDeleteIndex.value);
  } else if (!inputValue.value) {
    soonDeleteIndex.value = props.value.length - 1;
  } else {
    soonDeleteIndex.value = null;
  }
};

const inputValueChange = (value: string) => {
  if (value) {
    soonDeleteIndex.value = null;
  }
};
</script>
