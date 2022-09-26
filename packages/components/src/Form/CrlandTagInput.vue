<template>
  <el-input class="crland-tag-input" :size="size">
    <template #prefix>
      <el-tag v-for="tag in tags" :key="tag.name" class="mx-1" closable>
        {{ tag.name }}
      </el-tag>
    </template>
  </el-input>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "crland-tag-input",
});
</script>
<script lang="ts" setup>
import "./style/CrlandTagInput.scss";
import { ref } from "vue";
import { ElInput, ElTag } from "element-plus";
import { computedSize } from "../utils/index";
import { propsData } from "./CrlandTagInput";
const props = defineProps(propsData);

const tagList = ref([]);

const tags = ref([
  { name: "Tag 1", type: "" },
  { name: "Tag 2", type: "success" },
  { name: "Tag 3", type: "info" },
  { name: "Tag 4", type: "warning" },
  { name: "Tag 5", type: "danger" },
]);
</script>
