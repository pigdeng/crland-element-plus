<template>
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

  <crland-echarts-bar
    :resOption="resOption"
    :resData="resData"
  ></crland-echarts-bar>
</template>

<script lang="ts" setup>
import { ArrowLeft, ArrowRight } from "@element-plus/icons-vue";
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

const changeData = (data: any, option: any) => {
  resData.value = data;
  resOption.value = option;
};
</script>
