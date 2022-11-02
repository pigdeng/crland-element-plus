<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "crland-progress-bar",
});
</script>
<script lang="ts" setup>
import * as echarts from "echarts";
// const echarts = require("echarts");
import { computed, onMounted, ref, watch, reactive } from "vue";
import { propsData } from "./props";
const props = defineProps(propsData);
import { numFormat } from "../Utils/index";

const yFixdData = 10000;

const data = reactive({
  id: props.domId,
  xData: 0,
  yData: 0,
  percent: "",
  resOption: props.resOption,
  xDataHandel: 0,
  echartsInit: () => {
    if (data.xData && data.xData) {
      if (Number(data.xData) > Number(data.yData)) {
        data.xDataHandel = 10000;
      } else if (Number(data.xData) < 0 || Number(data.yData) < 0) {
        data.xDataHandel = 0;
        data.percent = "--";
      } else {
        data.xDataHandel =
          data.xData && data.yData
            ? Number(data.xData) *
              100 *
              (yFixdData / (Number(data.yData) * 100))
            : 0;
      }
    } else {
      data.xDataHandel = 0;
      data.percent = "--";
    }
    const chartDom: any = document.getElementById(data.id);
    const myChart = echarts.init(chartDom, null, {
      renderer: "svg",
    });
    const resOption = props.resOption;
    const value1 = data.xData ? addFormat(data.xData) : "--";
    const value2 = data.yData ? addFormat(data.yData) : "--";
    // const value1 = data.xData ;
    // const value2 = data.yData;
    const option = {
      tooltip: {
        show: false,
        trigger: "item",
        axisPointer: {
          type: "shadow",
        },
      },
      grid: {
        containLabel: true,
        left: 5,
        right: 0,
        bottom: 0,
        top: "25px",
      },
      xAxis: {
        show: true,
        offset: 0,
        position: "left",
        type: "value",
        splitLine: {
          show: false, // 去掉辅助线
        },
        axisLine: {
          show: false,
        },
        axisLabel: {
          show: false,
        },
        zlevel: 10,
        z: 10,
      },
      yAxis: {
        show: false,
        type: "category",
        data: [data.xData],

        splitLine: {
          show: false, // 去掉辅助线
        },
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          inside: true,
          margin: 0,
          fontSize: 24,
          fontWeight: "500",
          verticalAlign: "bottom",
          align: "bottom",
          color: resOption?.yAxis?.axisLabel?.color || "red", // 值的颜色
          padding: [10, 0, 10, 0],
        },
      },

      series: [
        // 背景底部bar
        {
          name: resOption?.series[1]?.name || "",
          type: "bar",
          clickable: false,
          label: {
            // 图形上的文本标签
            show: true,
            align: "right",
            position: "right", // 标签的位置
            offset: [-5, -30], // 标签文字的偏移，此处表示向上偏移40
            formatter: function (params: any) {
              const str =
                "{a|" + value2 + "}" + "\n{b|" + params.seriesName + "} ";
              return str;
            },
            rich: {
              a: {
                lineHeight: 26,
                color: "#000000",
                fontWeight: "bold",
                fontSize: 16,
              },
              b: {
                color: "#455467",
                fontSize: 14,
              },
            },
            color: "#000", // 标签字体颜色
            fontSize: 12, // 标签字号
          },
          itemStyle: {
            color: "#EFF4F8", // 定义柱形的背景色
            borderRadius: [10, 10, 10, 10], // 定义背景柱形的圆角
          },
          barGap: "-100%", // 设置柱形重合的重要步骤
          data: [yFixdData],
          animation: true, // 关闭动画效果
          barWidth: "8px", // 设置柱形宽度
        },
        // 当前active颜色的bar
        {
          name: resOption?.series[0]?.name || "",
          type: "bar",
          clickable: false,
          data: [data.xDataHandel || 0],
          barWidth: "8px",
          animation: true, // 关闭动画效果
          barGap: "-100%", // 设置柱形重合的重要步骤
          itemStyle: {
            borderRadius: [10, 10, 10, 10], // 定义柱形的圆角
            color: function (params: any) {
              const colorList = [resOption?.gradient];
              return new echarts.graphic.LinearGradient(
                0,
                0,
                1,
                0,
                [
                  {
                    offset: 0,
                    color: colorList[params.dataIndex][0],
                  },
                  {
                    offset: 1,
                    color: colorList[params.dataIndex][1],
                  },
                ],
                false
              );
            },
          },
          label: {
            // 图形上的文本标签
            show: true,
            align: "left",
            position: "left", // 标签的位置
            offset: [5, -32], // 标签文字的偏移，此处表示向上偏移40
            formatter: function (params: any) {
              const str =
                "{a|" + value1 + "}" + "\n{b|" + params.seriesName + "} ";
              return str;
            },
            rich: {
              a: {
                lineHeight: 28,
                color: resOption?.yAxis?.axisLabel?.color || "#FC9535",
                fontWeight: "700",
                fontSize: 20,
              },
              b: {
                color: "#455467",
                fontSize: 14,
              },
            },
            color: "black", // 标签字体颜色
            fontSize: 12, // 标签字号
          },
        },
        // 当前active颜色的bar
        {
          name: resOption?.series[2]?.name || "",
          type: "bar",
          data: [0],
          clickable: false,
          barWidth: "8px",
          animation: true, // 关闭动画效果
          barGap: "-100%", // 设置柱形重合的重要步骤
          itemStyle: {
            borderRadius: [10, 10, 10, 10], // 定义柱形的圆角
            color: function (params: any) {
              const colorList = [resOption.gradient];
              return new echarts.graphic.LinearGradient(
                0,
                0,
                1,
                0,
                [
                  {
                    offset: 0,
                    color: colorList[params.dataIndex][0],
                  },
                  {
                    offset: 1,
                    color: colorList[params.dataIndex][1],
                  },
                ],
                false
              );
            },
          },
          label: {
            // 图形上的文本标签
            show: true,
            align: "left",
            position: "left", // 标签的位置
            offset: [5, 19], // 标签文字的偏移，此处表示向上偏移40
            formatter: function (params: any) {
              const str =
                "{a|" +
                params.seriesName +
                "} " +
                "{b|" +
                (data.percent || "--") +
                "%" +
                "} ";
              return str;
            },
            rich: {
              a: {
                color: "#455467",
                fontSize: 14,
              },
              b: {
                color: "rgba(0, 0, 0, 0.85)",
                fontWeight: "700",
                fontSize: 14,
              },
            },
            color: "black", // 标签字体颜色
            fontSize: 12, // 标签字号
          },
        },
      ],
    };
    // 绘制图表
    console.log("option:", option);
    myChart.setOption(option);

    window.addEventListener("resize", () => {
      myChart.resize();
    });
  },
});

watch(
  () => [props.resData, props.resOption],
  async (res) => {
    computedInit(res);
  },
  { deep: true }
);

const addFormat = (num: any) => {
  return props.isDivider ? numFormat(num) : num;
};

// 计算并渲染
const computedInit = async (res: any) => {
  data.xData = res[0]?.xData || "";
  data.yData = res[0]?.yData || "";
  data.percent = res[0]?.percent || "";
  data.resOption = res[1].resOption;
  await data.echartsInit();
};

onMounted(() => {
  computedInit([props.resData, props.resOption]);
});
</script>

<template>
  <div
    :id="domId"
    style="width: 100%; height: 100%; pointer-events: none"
  ></div>
</template>
