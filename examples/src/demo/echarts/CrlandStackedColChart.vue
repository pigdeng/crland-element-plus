<template>
  <crland-stacked-col-chart
    :resOption="resOption"
    :resData="resData"
    style="height: 500px"
  ></crland-stacked-col-chart>
</template>

<script lang="ts" setup>
import { CrlandStackedColChart } from "crland-base";

const resOption = {
  unit: ["亿元", "%"],
  title: { padding: [20, 0, 0, 0] },
  grid: { left: "25.6%", right: "1%", top: "52", bottom: "3%" },
  legend: {
    icon: "circle",
    itemWidth: 14,
    itemHeight: 5,
    data: ["总部集采", "大区集采", "城市集采", "单项目"],
  },
  xAxis: [{ axisLabel: { rotate: "0", fontSize: "12" } }],
  yAxis: [
    {
      name: "采购金额 (单位:亿元)",
      axisLabel: { fontSize: "14" },
      nameTextStyle: { padding: [0, 0, 0, 36] },
    },
  ],
  series: [
    { name: "总部集采", barWidth: 10, itemStyle: { color: "#76A0F8" } },
    { name: "大区集采", itemStyle: { color: "#AED36C" }, symbol: "none" },
    { name: "城市集采", itemStyle: { color: "#FFC229" }, symbol: "none" },
    { name: "单项目", itemStyle: { color: "#FF666A" }, symbol: "none" },
  ],
};
const resData = {
  x: [
    "置地总部",
    "华北大区",
    "华东大区",
    "华南大区",
    "华西大区",
    "东北大区",
    "华中大区",
    "深圳大区",
  ],
  bar1: ["50.61", "6.34", "16.67", "4.12", "6.74", "5.42", "6.97", "4.35"],
  bar2: [
    "210.05",
    "14.01",
    "90.95",
    "18.03",
    "13.13",
    "17.48",
    "38.43",
    "18.02",
  ],
  bar3: ["69.80", "12.18", "13.65", "9.85", "9.30", "4.87", "11.32", "8.63"],
  bar4: [
    "396.07",
    "84.63",
    "117.32",
    "32.84",
    "49.00",
    "32.16",
    "28.18",
    "51.94",
  ],
  percent1: ["6.97", "5.41", "6.99", "6.35", "8.63", "9.04", "8.21", "5.25"],
  percent2: [
    "28.91",
    "11.96",
    "38.12",
    "27.81",
    "16.79",
    "29.17",
    "45.27",
    "21.73",
  ],
  percent3: [
    "9.61",
    "10.40",
    "5.72",
    "15.19",
    "11.90",
    "8.12",
    "13.33",
    "10.40",
  ],
  percent4: [
    "54.52",
    "72.23",
    "49.17",
    "50.65",
    "62.68",
    "53.67",
    "33.19",
    "62.62",
  ],
};
</script>
