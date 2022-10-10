<template>
  <crland-bar-chart
    :resOption="resOption"
    :resData="resData"
    :isDivider="true"
    style="height: 500px"
  ></crland-bar-chart>
</template>

<script lang="ts" setup>
const resOption = {
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
};
const resData = {
  currentX: "2022-11",
  barMax: null,
  lineMax: null,
  cashMonth: null,
  cashMax: null,
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
};
</script>
