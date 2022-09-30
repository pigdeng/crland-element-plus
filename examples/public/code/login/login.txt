<template>
  <crland-login @formSubmit="formSubmit" :loading="loading"></crland-login>

  <!-- <crland-login :imgBg="imgBg" :imgTitle="imgTitle" @formSubmit="formSubmit" :loading="loading"></crland-login> -->
</template>

<script lang="ts" setup>
import { CrlandLogin } from "crland-element-plus";
import { ref } from "vue";

const loading = ref(false);

const imgBg = ref("//ued-dev.crland.com.cn/ued-pc-web/img/login-bg.png");
const imgTitle = ref("//ued-dev.crland.com.cn/ued-pc-web/img/logo-title.png");

const formSubmit = (from: any) => {
  console.log("from:", from);
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
  }, 1500);
};
</script>
