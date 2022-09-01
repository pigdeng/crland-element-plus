<template>
  <el-row class="login-wrap">
    <el-col :span="16">
      <el-image class="login-bg" :src="imgBg" fit="fill" alt="" />
    </el-col>
    <el-col :span="8">
      <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        :rules="rules"
        class="login-form"
      >
        <el-image class="login-title" :src="imgTitle" fit="fill" />
        <div class="h-100"></div>
        <el-form-item label="用户名" prop="loginName">
          <el-input
            v-model="ruleForm.loginName"
            clearable
            type="text"
            autocomplete="off"
            size="large"
          />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            show-password
            v-model="ruleForm.password"
            type="password"
            autocomplete="off"
            size="large"
          />
        </el-form-item>
        <div class="h-50"></div>

        <div class="submit-wrap">
          <crland-button
            :loading="loading"
            shadow
            type="primary"
            class="submit-login"
            size="large"
            @click="submitForm(ruleFormRef)"
          >
            <span>登&nbsp;录</span>
            &nbsp;&nbsp;
            <el-icon>
              <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-029747aa=""><path fill="currentColor" d="M754.752 480H160a32 32 0 1 0 0 64h594.752L521.344 777.344a32 32 0 0 0 45.312 45.312l288-288a32 32 0 0 0 0-45.312l-288-288a32 32 0 1 0-45.312 45.312L754.752 480z"></path></svg>
            </el-icon>
          </crland-button>
        </div>
      </el-form>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "crland-login",
});
</script>

<script lang="ts" setup>
import './style/index.scss';
import { reactive,ref } from "vue";
import type { FormInstance } from "element-plus";

const ruleFormRef = ref<FormInstance>();
const props = defineProps({
  imgBg: {
    type: String,
    default: './img/login-bg.png'
  },
  imgTitle: {
    type: String,
    default: './img/logo-title.png'
  },
  loading: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits(["formSubmit"]);

const ruleForm = reactive({
  loginName: "",
  password: "",
});

const rules = reactive({
  loginName: [
    { required: true, message: "请输入用户名", trigger: ["blur", "change"] },
  ],
  password: [
    { required: true, message: "请输入密码", trigger: ["blur", "change"] },
  ],
});

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate((valid) => {
    if (valid) {
      emit("formSubmit", ruleForm);
    } else {
      console.log("error submit!");
      return false;
    }
  });
};

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};
</script>
