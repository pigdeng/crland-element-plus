<template>
  <el-row class="row-bg" justify="space-between">
    <el-col :span="12">
      <el-form>
        <el-form-item label="千位数分割符">
          <el-radio-group v-model="isDivider">
            <el-radio :label="true">true</el-radio>
            <el-radio :label="false">false</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
    </el-col>
    <el-col :span="12" class="header-right">
      <el-button-group>
        <el-button
          type="primary"
          :icon="ArrowLeft"
          @click="changeData(resData1, resOption1)"
          >月度目标</el-button
        >
        <el-button type="primary" @click="changeData(resData2, resOption2)">
          年度目标<el-icon class="el-icon--right"><ArrowRight /></el-icon>
        </el-button>
      </el-button-group>
    </el-col>
  </el-row>
  <br />

  <crland-progress-bar
    :resOption="resOption"
    :resData="resData"
    :isDivider="isDivider"
    :key="isDivider"
  ></crland-progress-bar>
</template>

<script lang="ts" setup>
import { ArrowLeft, ArrowRight } from "@element-plus/icons-vue";
import { CrlandProgressBar } from "crland-element-plus-base";

import { ref } from "vue";
const resData1 = { percent: 30, xData: 300000, yData: 1000000 };
const resData2 = { percent: 83, xData: 1000000, yData: 1200000 };
const resOption1 = {
  gradient: ["#FFAC00", "#FFAC00"],
  series: [
    { name: "本月签约额" },
    { name: "月度目标" },
    { name: "月度目标完成率" },
  ],
  yAxis: { axisLabel: { color: "#FC9535" } },
};

const resOption2 = {
  gradient: ["#FFAC00", "#FFAC00"],
  series: [
    { name: "本年签约额" },
    { name: "年度目标" },
    { name: "年度目标完成率" },
  ],
  yAxis: { axisLabel: { color: "#FC9535" } },
};
const resOption = ref(resOption1);
const resData = ref(resData1);
const isDivider = ref(true);

const changeData = (data: any, option: any) => {
  resData.value = data;
  resOption.value = option;
};
</script>
<style lang="scss" scoped>
.header-right {
  display: flex;
  justify-content: flex-end;
}
</style>
