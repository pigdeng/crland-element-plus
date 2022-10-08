<template>
  <crland-layout-top
    @handCollapse="handCollapse"
    @handDropdownItem="handDropdownItem"
    :isCollapse="isCollapse"
    :dropdownList="dropdownList"
    :userInfo="userInfo"
  >
  </crland-layout-top>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { ElDivider, ElMessage } from "element-plus";
import { Bell, Message } from "@element-plus/icons-vue";
import { CrlandLayoutTop } from "crland-element-plus";

const userInfo = {
  userName: "华小润",
  avatar: "",
};

const isCollapse = ref(localStorage.getItem("isCollapse") === "true");
const handCollapse = () => {
  isCollapse.value = !isCollapse.value;
  localStorage.setItem("isCollapse", isCollapse.value + "");
};

const dropdownList = [{ title: "个人中心" }, { title: "退出登录" }];
const handDropdownItem = (value: any) => {
  ElMessage.success(`你点击了 "${value.title}"`);
};
</script>
