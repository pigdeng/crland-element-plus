<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "crland-line-chart",
});
</script>
<script lang="ts" setup>
import * as echarts from "echarts";
// const echarts = require("echarts");
import { computed, onMounted, ref, watch, reactive } from "vue";
import { propsData } from "./props";
const props = defineProps(propsData);
import { numFormat, getCurrentXIpad } from "../Utils/index";

const data = reactive({
  id: props.domId,
  x: [],
  bar1: [],
  line1: [],
  bar2: [],
  line2: [],
  resOption: props.resOption,
  current: {
    currentX: "",
    startValue: "",
    endValue: "",
    currentXIndex: 0,
  },
  echartsInit: () => {
    const chartDom: any = document.getElementById(data.id);
    const myChart = echarts.init(chartDom, null, {
      renderer: "canvs",
    });
    const resOption = data.resOption;
    const option = {
      // 初始化配置
      textStyle: {
        fontFamily: "PingFang SC",
        color: "#455467",
      },
      grid: {
        left: "5",
        right: (resOption.grid && resOption.grid.right) || "5%",
        top: (resOption.grid && resOption.grid.top) || "48", // resOption.title.subtext ?  '22.6%': '16.4%' ,
        bottom: (resOption.grid && resOption.grid.bottom) || "10%",
        containLabel: true,
      },
      title: {
        text: resOption.yAxis[0].name || "",
        padding: [25, 0, 0, 0],
        show: true,
        textStyle: {
          fontSize: 14,
          color: "#818D99",
          fontWeight: "400",
        },
        subtext: "", // 副标题
        subtextStyle: {
          // 副标题文本样式
          color: "#455467",
          fontSize: 14,
          rich: {
            a: {
              color: "#F99D35",
              fontSize: 16,
            },
          },
        },
        itemGap: 0,
      },
      tooltip: {
        trigger: "axis", // 'axis',
        show: true,
        extraCssText: "z-index:10",
        confine: true,
        point: [20, 20],
        // handle: true, //移动端手柄模式
        /* axisPointer: {
              type: 'cross',
            }, */
        formatter: function (params: any) {
          let str = ""; // 声明一个变量用来存储数据
          // 图显示的数据较多时需要循环数据，这样才可以成功的给多条数据添加单位
          if (params.length > 0) {
            for (let i = 0; i < params.length; i++) {
              const m1 = params[i]?.marker;
              const m2 = params[i]?.seriesName;
              const m3 = params[i]?.value ? addFormat(params[i]?.value) : "--";
              const m4 = resOption?.unit ? resOption?.unit[i] : "";
              str = str + m1 + m2 + ": " + m3 + m4 + "</br>";
            }
          }
          return str;
        },
      },
      legend: {
        type: "plain",
        data: resOption?.legend?.data || ["", "", "", ""],
        show: resOption?.legend?.show || true,
        left: resOption?.legend?.left || "left",
        itemWidth: 14, // 修改icon图形大小
        itemHeight: 2, // 修改icon图形大小
        itemGap: 30, // 设置间距，
        textStyle: {
          fontSize: 14, // 字体大小
          color: "#455467",
        },
        padding: [2, 20, 10, 2],
      },
      xAxis: [
        {
          type: "category",
          padding: [2, 6, 0, 0],
          splitLine: {
            show: false, // 去掉网格线
          },
          boundaryGap: false,
          axisTick: {
            show: false, // 隐藏刻度线
          },
          axisLine: {
            lineStyle: {
              type: "solid",
              color: "#FFC229", // 坐标线的颜色
              width: "0", // 坐标线的宽度
            },
          },

          axisLabel: {
            interval: 0,
            rotate: 0,
            showMaxLabel: true,
            showMinLabel: true,
            margin: 8,
            padding: [0, 0, 0, 10],
            axisName: {
              fontSize: 9, // 字体大小
            },
          },
          data: data.x || [],
        },
      ],
      yAxis: [
        {
          type: "value",
          // name: resOption.yAxis[0]?.name || '',
          nameTextStyle: {
            padding: [0, 16, 0, 0],
          },
          // scale: true,
          splitLine: {
            // 分割线配置
            show: true,
            lineStyle: {
              color: "#E9EFF3",
            },
          },
          axisLine: {
            lineStyle: {
              type: "solid",
              color: "#FFC229", // 坐标线的颜色
              width: "0", // 坐标线的宽度
            },
          },
          position: "left",
          alignTicks: true,
          axisLabel: {
            interval: 0,
            axisName: {
              fontSize: 9, // 字体大小
            },
          },
        },
      ],
      series: [
        {
          name: resOption.series[0]?.name || "",
          type: "line",
          itemStyle: {
            color: resOption.series[0].itemStyle.color || "#FFC229", // 折线的颜色
            borderRadius: [5, 5, 0, 0], // 设置折线的边框圆角
          },
          // 设置面积区域为渐变效果
          areaStyle: {
            color: echarts.graphic.LinearGradient(0, 1, 0, 0, [
              {
                offset: 1,
                color: "rgba(249, 157, 53, 0.3)",
              },
              {
                offset: 0,
                color: "rgba(249, 157, 53, 0)",
              },
            ]),
          },
          symbol: "circle", // 取消折点圆圈
          smooth: false, // 设置曲率
          data: data.line1 || [],
        },
      ],
      graphic: [
        {
          type: "text",
          left: "center",
          top: "35%",
          invisible: data.x && data.x.length > 0,
          style: {
            text: resOption.sub,
            fill: "#9AA1A9",
            width: 51,
            height: 32,
            fontSize: 14,
            lineHeight: 32,
          },
        },
      ],
    };

    if (!resOption?.dataZoom?.hidden) {
      option.dataZoom = [
        // 给x轴设置滚动条
        {
          type: "slider",
          zoomLock: false,
          brushSelect: false, // 滚动条只允许滑动，不允许框选范围
          show: data.x?.length > 12,
          xAxisIndex: [0],
          moveHandleSize: 0,
          startValue: data.current.startValue,
          endValue: data.current.endValue,
          maxValueSpan: 11,
          handleSize: 0, // 滑动条的 左右2个滑动条的大小
          height: 10, // 组件高度
          left: "13%", // 左边的距离
          right: "12%", // 右边的距离
          bottom: "0%", // 下边的距离
          // fillerColor: '#455467', //选中滑条颜色
          borderRadius: 0,
          // dataBackground: '#ffffff',
          // borderColor: "#455467",
          // backgroundColor: '#ffffff',//两边未选中的滑动条区域的颜色
          // showDataShadow: false,//是否显示数据阴影 默认auto
          showDetail: false, // 即拖拽时候是否显示详细数值信息 默认true
          realtime: false, // 是否实时更新
          filterMode: "filter",
        },
        {
          type: "inside",
          zoomLock: true,
          xAxisIndex: [0],
          startValue: data.startValue,
          endValue: data.endValue,
        },
      ];
    }

    // 绘制图表
    myChart.setOption(option);
    myChart.dispatchAction({
      type: "hideTip",
    });
    myChart.dispatchAction({
      type: "showTip",
      // 屏幕上的y坐标
      position: ["30%", "30%"], // 调整位置
      seriesIndex: 0, // 第几条series
      dataIndex: data.current.currentXIndex, // 第几个tooltip
    });

    window.addEventListener("resize", () => {
      myChart.resize();
    });
  },
});

watch(
  () => [{ ...props.resData }, { ...props.resOption }],
  async (res) => {
    computedInit(res);
  },
  { deep: true }
);

// 计算并渲染
const computedInit = async (res: any) => {
  data.resOption = res[1];
  const currentBefore = res[1]?.currentBefore;
  await Promise.all([
    (data.cashMonth = res[0]?.cashMonth),
    (data.cashMax = res[0]?.cashMax),
    (data.x = res[0]?.x),
    (data.line1 = res[0]?.line1),
    (data.current.currentX = res[0]?.currentX),
  ]);
  data.current = await getCurrentXIpad(res[0]?.x, data.current.currentX);
  if (props.resData) await data.echartsInit();
};

const addFormat = (num: any) => {
  return props.isDivider ? numFormat(num) : num;
};

onMounted(() => {
  computedInit([{ ...props.resData }, { ...props.resOption }]);
});
</script>

<template>
  <div :id="domId" style="width: 100%; height: 100%"></div>
</template>
