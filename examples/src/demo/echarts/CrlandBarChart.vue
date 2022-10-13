<template>
  <el-form>
    <el-form-item label="类型">
      <el-radio-group v-model="active">
        <el-radio v-for="(i, index) in BarChartType" :label="index" :key="index"
          >类型{{ index + 1 }}</el-radio
        >
      </el-radio-group>
    </el-form-item>
  </el-form>
  <crland-bar-chart
    :resOption="BarChartType[active].resOption"
    :resData="BarChartType[active].resData"
    :isDivider="true"
    style="height: 500px"
  ></crland-bar-chart>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import {CrlandBarChart} from "crland-element-plus-base"
const active = ref(0);
const BarChartType = [
  {
    resOption: {
      unit: ["亿元"],
      isTime: true,
      legend: { data: ["月度预计签约额"] },
      grid: { left: "10.6%", right: "1%", bottom: "5%" },
      xAxis: [{ axisLabel: { rotate: "30" } }],
      yAxis: [{ name: "(单位:亿元)" }],
      series: [
        {
          name: "月度预计签约额",
          stack: "广告",
          barWidth: 10,
          itemStyle: { color: "#76A0F8" },
          label: { show: true, position: "top" },
        },
      ],
    },
    resData: {
      currentX: "2022-11",
      x: [
        "2022-11",
        "2022-12",
        "2023-01",
        "2023-02",
        "2023-03",
        "2023-04",
        "2023-05",
        "2023-06",
        "2023-07",
        "2023-08",
        "2023-09",
        "2023-10",
      ],
      bar1: [
        "305.05",
        "506.81",
        "187.00",
        "192.23",
        "218.34",
        "254.40",
        "162.59",
        "307.79",
        "171.02",
        "128.63",
        "174.56",
        "274.86",
      ],
    },
  },
  {
    resOption: {
      unit: ["", "%"],
      legend: { data: ["当前在建面积", "占比"] },
      grid: { left: "16.6%", right: "1%", top: "52", bottom: "1%" },
      xAxis: [{ axisLabel: { rotate: "30" } }],
      yAxis: [{ name: "(单位:万㎡)" }],
      series: [
        {
          name: "当前在建面积",
          barWidth: 10,
          itemStyle: { color: "#76A0F8" },
          label: { show: true, position: "top" },
        },
        { name: "占比", itemStyle: { color: "#FFC229" }, symbol: "none" },
      ],
    },
    resData: {
      x: [
        "住宅",
        "写字楼",
        "公寓",
        "商铺",
        "车位",
        "储藏室",
        "配套",
        "购物中心",
        "酒店",
      ],
      bar1: [
        "3423.42",
        "621.54",
        "332.60",
        "204.34",
        "1849.22",
        "31.48",
        "197.91",
        "524.56",
        "56.33",
      ],
      line1: [
        "47.28",
        "8.58",
        "4.59",
        "2.82",
        "25.54",
        "0.43",
        "2.73",
        "7.24",
        "0.78",
      ],
    },
  },
];
</script>
