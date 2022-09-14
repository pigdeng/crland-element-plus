<template>
  <div class="component-wrap" id="CrlandCodeShow">
    <div class="component-source">
      <slot></slot>
    </div>
    <div class="component-btn-bars" :class="openCode ? 'open-style' : ''">
      <div class="btn-right">
        <el-icon :size="16" title="复制代码" @click="copyText(code)">
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
        <el-icon :size="16" title="查看代码" @click="showCode">
          <svg
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
            width="1.2em"
            height="1.2em"
            data-v-65a7fb6c=""
          >
            <path
              fill="currentColor"
              d="m23 12l-7.071 7.071l-1.414-1.414L20.172 12l-5.657-5.657l1.414-1.414L23 12zM3.828 12l5.657 5.657l-1.414 1.414L1 12l7.071-7.071l1.414 1.414L3.828 12z"
            ></path>
          </svg>
        </el-icon>
      </div>
    </div>
    <div class="code-wrap open-style" v-show="openCode">
      <div class="code-text">
        <highlightjs
          class="highlightjs-style"
          :language="language"
          v-if="openCode"
          :code="code"
        />
      </div>
      <div class="code-footer">
        <div class="hide-code" title="隐藏源代码" @click="showCode">
          <el-icon :size="16">
            <svg
              viewBox="0 0 1024 1024"
              xmlns="http://www.w3.org/2000/svg"
              data-v-65a7fb6c=""
            >
              <path fill="currentColor" d="M512 320 192 704h639.936z"></path>
            </svg>
          </el-icon>
          <span>隐藏源代码</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "crland-code-show",
});
</script>
<script lang="ts" setup>
import "./style/index.scss";
import { propsData } from "./types";
import { ElMessage,ElIcon } from "element-plus";


import { onBeforeMount, onMounted, defineProps, ref } from "vue";


const props = defineProps(propsData);

onBeforeMount(() => {
  //2.组件挂载页面之前执行----onBeforeMount
});
onMounted(() => {
  //   getMgmtMonitorParamList("");
});

// const highlight = {
//   mounted(el, binding) {
//     console.log("binding", binding);
//     const color =
//       binding.value && binding.value.color ? binding.value.color : "#fff";
//     const bgColor =
//       binding.value && binding.value.bgColor ? binding.value.bgColor : "blue";
//     el.style.color = color;
//     el.style.backgroundColor = bgColor;
//   },
// };

// 查看源代码
const openCode = ref(false);
// 点击按钮显示或隐藏“查看源代码”
const showCode = () => {
  openCode.value = !openCode.value;
};

const code = ref("");

const getTxt = () => {
  //  更新数据devInfo.txt文件接口
  if (!props.fileUrl) {
    return;
  }
  const xhr: any = new XMLHttpRequest();
  const okStatus = document.location.protocol === "file:" ? 0 : 200;
  xhr.open("GET", props.fileUrl, false); // 文件路径
  xhr.overrideMimeType("text/plain;charset=utf-8"); // 默认为utf-8
  xhr.send(null);
  code.value = xhr.responseText;
};

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

onBeforeMount(() => {
  //   getTxt();
  // 2.组件挂载页面之前执行----onBeforeMount
});
onMounted(() => {
  getTxt();
});
</script>
