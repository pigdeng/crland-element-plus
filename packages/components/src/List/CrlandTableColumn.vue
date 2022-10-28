<template>
  <el-table-column>
    <slot name="default"></slot>
  </el-table-column>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "crland-table-column",
});
</script>

<script lang="ts" setup>
import { ElTableColumn } from "element-plus";
</script>
