<template>
  <el-input v-model="value" class="crland-input">
    <template #prefix>
      <el-icon>
        <img
          class="prefix-img"
          :src="require('./img/user.svg')"
          alt=""
          srcset=""
        />
      </el-icon>
    </template>
  </el-input>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "crland-input",
});
</script>
<script lang="ts" setup>
import "./style/CrlandInput.scss";
import { ref, computed, shallowRef, h } from "vue";
import { ElInput, ElImage, ElIcon } from "element-plus";
import { computedSize, deepClone } from "../utils/index";
import { propsData } from "./CrlandInput";

const props = defineProps(propsData);
const value = ref("");

const customPrefix = shallowRef({
  render() {
    // return h("stong", "@");
    return `ss`;
  },
});
</script>
