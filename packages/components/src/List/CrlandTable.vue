<template>
  <el-table>
    <slot></slot>
  </el-table>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "crland-table",
});
</script>

<script lang="ts" setup>
import { ElTable } from "element-plus";
</script>
