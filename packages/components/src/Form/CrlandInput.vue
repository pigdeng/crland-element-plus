<template>
  <el-input
    v-model="CrlandInputValue"
    class="crland-input"
    @input="handInput"
    @blur="blurInput"
    :type="inputType === 'pass' ? 'password' : ''"
    clearable
  >
    <template #prefix>
      <slot name="prefix"></slot>
      <el-icon v-if="inputType">
        <img
          class="prefix-img"
          :src="icons[inputType] || ''"
          alt=""
          srcset=""
        />
      </el-icon>
    </template>
  </el-input>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { assertLVal } from "@babel/types";
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
const emit = defineEmits(["update:value"]);

import user from "./img/user.svg";
import http from "./img/http.svg";
import pass from "./img/pass.svg";
import phone from "./img/phone.svg";
import rmb from "./img/rmb.svg";
import visa from "./img/visa.svg";
import email from "./img/email.svg";

const icons = {
  email,
  http,
  pass,
  phone,
  rmb,
  user,
  visa,
};

const CrlandInputValue = ref("");

// 输入框输入事件
const handInput = (val: any) => {
  if (props.inputType === "phone") {
    formatPhone(val);
  } else if (props.inputType === "visa") {
    formatVisa(val);
  } else if (props.inputType === "rmb") {
    // formatRmb(val);
  }
};

// 失去焦点时
const blurInput = () => {
  if (props.inputType === "rmb") {
    blusRmb();
  }
};

// 自动填充手机号分隔符
const formatPhone = (val: any) => {
  CrlandInputValue.value = val.replace(/\s/g, "").replace(/[^\d]/g, "");
  if (val.length <= 13) {
    if (val.length > 3 && val.length < 7) {
      CrlandInputValue.value = val
        .replace(/\D/g, "")
        .replace(/(\d{3})(?=\d)/g, "$1 ");
    } else if (val.length >= 7) {
      CrlandInputValue.value = val
        .replace(/\s/g, "-")
        .replace(/[^\d]/g, " ")
        .replace(/(\d{4})(?=\d)/g, "$1 ");
    }
  } else {
    CrlandInputValue.value = val.substring(0, 13);
  }

  // 父组件传值
  sendFather();
};

// 自动填充银行卡分隔符
const formatVisa = (val: any) => {
  CrlandInputValue.value = val
    .replace(/\s/g, "")
    .replace(/[^\d]/g, "")
    .replace(/(\d{4})(?=\d)/g, "$1 ");
  sendFather();
};

// 千位数加分隔符号
const numFormat = (num: any) => {
  var res = num.toString().replace(/\d+/, function (n) {
    // 先提取整数部分
    return n.replace(/(\d)(?=(\d{3})+$)/g, function ($1) {
      return $1 + ",";
    });
  });
  return res;
};

// 自动自动校验rmb,千位分隔符号
const formatRmb = (val: any) => {
  let numberVal = val.replace(/,/g, "");
  if (
    numberVal.split(".").length < 3 &&
    numberVal.substr(numberVal.length - 1) === "."
  ) {
    return;
  }

  numberVal = parseFloat(numberVal) || "";
  CrlandInputValue.value = numFormat(numberVal);
};

const blusRmb = () => {
  let numberVal: any = CrlandInputValue.value;
  numberVal = numberVal.replace(/,/g, "");
  numberVal = parseFloat(numberVal);
  if (isNaN(numberVal)) {
    return;
  }

  numberVal = numberVal.toFixed(2);
  numberVal = numFormat(numberVal);
  CrlandInputValue.value = numberVal;
  emit("update:value", CrlandInputValue.value.replace(/,/g, ""));
};

// 给父组件传value值
const sendFather = () => {
  let newValue = CrlandInputValue.value.replace(/\s*/g, "");
  emit("update:value", newValue);
};
</script>
