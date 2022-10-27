<template>
  <div class="crland-code-bar-wrap">
    <el-icon
      class="icon-copy"
      :size="16"
      title="复制代码"
      @click="copyText(code)"
    >
      <svg
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 24 24"
        width="1.2em"
        height="1.2em"
        data-v-65a7fb6c=""
      >
        <path
          fill="currentColor"
          d="M7 6V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-3v3c0 .552-.45 1-1.007 1H4.007A1.001 1.001 0 0 1 3 21l.003-14c0-.552.45-1 1.007-1H7zM5.003 8L5 20h10V8H5.003zM9 6h8v10h2V4H9v2z"
        ></path>
      </svg>
    </el-icon>
    <highlightjs
      class="highlightjs-style"
      :language="language"
      :code="code"
    ></highlightjs>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "crland-code-bar",
});
</script>
<script lang="ts" setup>
import "./style/CrlandCodeBar.scss";
import { ElMessage, ElIcon } from "element-plus";
import { onBeforeMount, onMounted, ref } from "vue";

import { propsData } from "./CrlandCodeBar";
const props = defineProps(propsData);

const copyText = (text: string) => {
  const textareaElement: any = document.createElement("textarea");
  textareaElement.setAttribute("readonly", "readonly"); // 防止弹出输入编辑
  textareaElement.value = text; // 将需要拷贝的内容设置到textarea元素中。
  document.body.appendChild(textareaElement);
  textareaElement.select(); // 选中textarea元素，以备调用系统copy函数复制其中的内容。
  const isSuccess = document.execCommand("copy"); // 调用操作系统复制api，返回是否复制成功。true或false！
  document.body.removeChild(textareaElement);
  ElMessage.success("复制成功");
};
</script>
