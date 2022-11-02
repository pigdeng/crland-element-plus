<template>
  <div class="crland-pagination">
    <el-pagination
      :class="isCircle ? 'crland-pagination-circle' : ''"
      v-model:currentPage="currentPage"
      v-model:page-size="pageSize"
      :page-sizes="pageSizes"
      :small="small"
      background
      :layout="layout"
      :total="total"
      :disabled="disabled"
      @size-change="updatePagination"
      @current-change="updatePagination"
    ></el-pagination>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue"
export default defineComponent({
  name: "crland-pagination",
})
</script>
<script lang="ts" setup>
import "./style/CrlandPagination.scss"
import { ref } from "vue"
import { ElPagination } from "element-plus"

import { propsData } from "./CrlandPagination"
const props = defineProps(propsData)
const emit = defineEmits(["change"])

const currentPage = ref(1)
const pageSize = ref(10)

const updatePagination = () => {
  let obj = {
    pageSize: pageSize.value,
    currentPage: currentPage.value,
  }
  emit("change", obj)
}

defineExpose({
  currentPage,
  pageSize,
})
</script>
