<template>
  <crland-layout-top
    @handCollapse="handCollapse"
    @handDropdownItem="handDropdownItem"
    :isCollapse="isCollapse"
    :dropdownList="dropdownList"
    :userInfo="userInfo"
  >
    <!-- 右侧插槽 -->
    <template #right>
      <el-badge is-dot class="solt-right-badge">
        <el-icon :size="18"><Bell /></el-icon>
      </el-badge>
      <div style="width: 10px"></div>
      <el-badge is-dot class="solt-right-badge">
        <el-icon :size="18"><Message /></el-icon>
      </el-badge>
      <div style="width: 3px"></div>
      <el-divider direction="vertical" style="height: 26px" />
    </template>
  </crland-layout-top>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { ElDivider, ElMessage } from "element-plus";
import { Bell, Message } from "@element-plus/icons-vue";
// import { CrlandLayoutTop } from "crland-element-plus";

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
<style lang="scss" scoped>
.solt-right-badge {
  cursor: pointer;
  margin-top: 8px;
  :deep(.el-badge__content.is-dot) {
    width: 6px;
    height: 6px;
  }
}
</style>
