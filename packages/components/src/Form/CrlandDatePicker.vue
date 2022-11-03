<template>
  <el-date-picker
    class="crland-date-picker"
    popper-class="crland-date-picker-popper"
    v-model="value"
    type="date"
    placeholder="请选择时间"
  >
  </el-date-picker>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "crland-date-picker",
});
</script>
<script lang="ts" setup>
import "./style/CrlandDatePicker.scss";
import { ref, computed } from "vue";
import { ElDatePicker } from "element-plus";
import { computedSize, deepClone } from "../Utils/index";
const value = ref("");
</script>
