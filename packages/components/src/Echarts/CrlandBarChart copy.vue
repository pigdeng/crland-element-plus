<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "crland-bar-chart",
});
</script>
<script lang="ts" setup>
import * as echarts from "echarts";
// const echarts = require("echarts");
import { computed, onMounted, ref, watch, reactive } from "vue";
import { propsData } from "./props";
const props = defineProps(propsData);
import { numFormat, getCurrentX } from "../Utils/index";

const data = reactive({
  id: props.domId,
  x: [],
  bar: [],
  line: [],
  current: {
    currentX: "",
    startValue: "",
    endValue: "",
    currentXIndex: 0,
  },
  echartsInit: () => {
    const chartDom: any = document.getElementById(data.id);
    const myChart = echarts.init(chartDom, null, {
      renderer: "svg",
    });

    const resOption = props.resOption;
    const option = {
      // 初始化配置
      textStyle: {
        fontFamily: "PingFang SC",
        color: "#455467",
      },
      grid: {
        left: "2",
        right: "2%",
        top: (resOption.grid && resOption.grid.top) || "53", // resOption.title.subtext ?  '22.6%': '16.4%' ,
        bottom: (resOption.grid && resOption.grid.bottom) || "2%",
        containLabel: true,
      },
      title: {
        text: props.num
          ? `{text|${resOption.title?.text}}{num|${props.num}}`
          : "",
        right: 0,
        top: -5,
        show: resOption.title?.show || false,
        textStyle: {
          rich: {
            text: {
              fontSize: 14,
              color: "#455467",
              padding: [0, 10, 0, 0],
            },
            num: {
              fontSize: 16,
              fontWeight: "bold",
              color: "#fc9535",
            },
          },
        },
        subtext: "", // 副标题
        subtextStyle: {
          // 副标题文本样式
          color: "#e5021d",
          fontSize: 12,
          right: 110,
          rich: {
            a: {
              color: "#F99D35",
              right: 0,
              fontSize: 16,
            },
          },
        },
        itemGap: 0,
      },
      tooltip: {
        show: true,
        trigger: "axis",
        confine: true,
        extraCssText: "z-index:10",
        axisPointer: {
          type: "shadow",
        },
        formatter: function (params: any) {
          let str = ""; // 声明一个变量用来存储数据
          let axisValue = "";
          let marker = "";
          // 图显示的数据较多时需要循环数据，这样才可以成功的给多条数据添加单位
          for (let i = 0; i < params.length; i++) {
            marker =
              "<span style='display:inline-block;margin-right:5px;border-radius:10px;width:7px;height:7px;background:" +
              params[i].color +
              "'></span>";
            axisValue =
              '<div style="font-size: 14px; font-weight:bold; color: #1D252F">' +
              params[i]?.axisValue +
              "</div>";
            const a = params[i].data;
            str +=
              marker +
              params[i]?.seriesName +
              ": " +
              "<span style='font-size: 14px; font-weight:bold; color: #1D252F'>" +
              (a ? addFormat(a) : "--") +
              "</span>" +
              " " +
              "<span style='font-size: 12px; font-weight:400'>" +
              (resOption?.unit ? resOption?.unit[params[i].seriesIndex] : "") +
              "</span>" +
              "</br>";
          }
          return !data.current.currentX ? axisValue + str : str;
        },
      },
      legend: {
        top: -3,
        left: 0,
        itemGap: 20,
        data: [
          {
            name: props.legend
              ? props.legend[0]
              : resOption.legend.data[0] || [""],
            icon: "circle",
            textStyle: {
              color: "#455467",
              fontSize: 12,
              align: "left",
              padding: [0, 0, 0, -5],
              // 文字块背景色，一定要加上，否则对齐不会生效
              backgroundColor: "transparent",
              rich: {
                b: {
                  width: 200,
                },
              },
            },
            // itemHeight: 6, //修改icon图形大小
          },
          {
            name: props.legend
              ? props.legend[1]
              : resOption.legend.data[1] || [""],
            icon: "",
            textStyle: {
              color: "#455467",
              fontSize: 12,
              align: "left",
              padding: [3, 0, 0, 0],
              // 文字块背景色，一定要加上，否则对齐不会生效
              backgroundColor: "transparent",
              rich: {
                b: {
                  width: 200,
                },
              },
            },
          },
        ],

        itemWidth: 14,
        itemHeight: 8,
      },
      graphic: [
        {
          type: "text",
          left: "left",
          top: resOption.graphic?.top || 20,
          style: {
            text: resOption.yAxis[0].name || "",
            fill: "#8D9EAE",
            width: 51,
            height: 32,
            fontSize: 12,
            lineHeight: 32,
          },
        },
      ],
      dataZoom: [
        // 给x轴设置滚动条
        {
          type: "slider",
          zoomLock: false,
          brushSelect: false, // 滚动条只允许滑动，不允许框选范围
          show: data.x?.length > 5,
          xAxisIndex: [0],
          moveHandleSize: 0,
          startValue: data.current.startValue,
          endValue: data.current.endValue,
          maxValueSpan: 4,
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
        /* {
              type: 'slider',
              zoomLock: false,
              brushSelect: false, //滚动条只允许滑动，不允许框选范围
              show: data.x?.length > 5,
              xAxisIndex: [0],
              moveHandleSize: 0,
              startValue: data.current.startValue,
              endValue: data.current.endValue,
              maxValueSpan: data.x?.length > 5 ? 4 : 5,
              handleSize: 0,//滑动条的 左右2个滑动条的大小
              height: 6,//组件高度
              left: '10%', //左边的距离
              right: '10%',//右边的距离
              bottom: '0%',//下边的距离
              fillerColor: '#455467', //选中滑条颜色
              borderRadius: 5,
              dataBackground: '#ffffff',
              borderColor: "#455467",
              backgroundColor: '#ffffff',//两边未选中的滑动条区域的颜色
              showDataShadow: false,//是否显示数据阴影 默认auto
              showDetail: false,//即拖拽时候是否显示详细数值信息 默认true
              realtime: false, //是否实时更新
              filterMode: 'filter',
            }, */
        {
          type: "inside",
          show: true,
          xAxisIndex: [0],
          start: 0, // 默认为1
          end: 100, // data.x.length <= 6 ? 100 : 50 - data.x.length + 50 / data.x.length,  //100-1500/31,//默认为100
        },
      ],
      xAxis: [
        {
          type: "category",
          padding: [2, 6, 0, 0],
          splitLine: {
            show: false, // 去掉网格线
          },
          axisTick: {
            show: false, // 隐藏刻度线
          },
          axisLine: {
            // show: data.x && data.x.length > 0,
            lineStyle: {
              type: "solid",
              color: "#E9EFF3", // 坐标线的颜色
              width: "1", // 坐标线的宽度
            },
          },
          show: data.x && data.x.length > 0,
          axisPointer: {
            type: "shadow",
          },
          axisLabel: {
            interval: 0,
            rotate: 0, // resOption.xAxis && resOption.xAxis[0].axisLabel.rotate || 0,
            margin: 6,
            fontSize: 12,
            lineHeight: 16,
            axisName: {
              fontSize: 12, // 字体大小
            },
            formatter: (value: any) => {
              let ret = ""; // 拼接加\n返回的类目项
              const maxLength = 4; // 每项显示文字个数
              const valLength = value.length; // X轴类目项的文字个数
              const rowN = Math.ceil(valLength / maxLength); // 类目项需要换行的行数
              if (!resOption.isTime) {
                for (let i = 0; i < rowN; i++) {
                  if (i < 1) {
                    let temp = ""; // 每次截取的字符串
                    const start = i * maxLength; // 开始截取的位置
                    const end = start + maxLength; // 结束截取的位置
                    // 这里也可以加一个是否是最后一行的判断，但是不加也没有影响，那就不加吧
                    temp = value.substring(start, end) + "\n";
                    ret += temp; // 凭借最终的字符串
                  } else if (i < 2) {
                    let temp = ""; // 每次截取的字符串
                    const start = i * maxLength; // 开始截取的位置
                    const end = start + maxLength; // 结束截取的位置
                    // 这里也可以加一个是否是最后一行的判断，但是不加也没有影响，那就不加吧
                    temp =
                      value.substring(start, end) +
                      (end < value.length ? "..." : "");
                    ret += temp; // 凭借最终的字符串
                  }
                }
                return ret;
              } else {
                return value;
              }
            },
          },

          data: data.x || [],
        },
      ],
      yAxis: [
        {
          type: "value",
          // name: resOption.yAxis[0].name || '',
          nameTextStyle: {
            padding: resOption.yAxis[0]?.nameTextStyle?.padding || [
              0, 21, 0, 0,
            ],
          },
          // scale: true,
          position: "left",
          splitLine: {
            // 分割线配置
            show: true,
            lineStyle: {
              color: "#E9EFF3",
            },
          },
          // max: Math.ceil(Math.max(...data.bar) * 1.05 / 5) * 5,
          // interval:500,
          // minInterval: 1,
          splitNumber: 4, // 设置坐标轴的分割段
          minInterval: 10,
          axisLabel: {
            interval: 0,
            fontSize: 12, // 字体大小
          },
        },
        {
          type: "value",
          splitLine: {
            // 分割线配置
            show: false,
            lineStyle: {
              color: "#E9EFF3",
            },
          },
          splitNumber: 4, // 设置坐标轴的分割段
          /// max: Math.ceil(Math.max(...data.line) * 1.05 / 5) * 5,
          // interval: Math.ceil(Math.max(...data.line) * 1.05 / 5),
          // interval:10,
          minInterval: 10,
          axisLabel: {
            fontSize: 12, // 字体大小
            formatter: "{value} %",
          },
        },
      ],
      series: [
        {
          name: props.legend
            ? props.legend[0]
            : (resOption.series && resOption.series[0].name) || "",
          type: "bar",
          barWidth: (resOption.series && resOption.series[0].barWidth) || 10, // 柱状条宽度
          itemStyle: {
            color:
              (resOption.series && resOption.series[0].itemStyle?.color) ||
              "#76A0F8", // 柱状条的颜色
            borderRadius: [5, 5, 0, 0], // 设置柱状条的边框圆角
          },
          data: data.bar,
          label: {
            color: "rgba(141, 158, 174, 1)",
            show: resOption?.series[0]?.label?.show || true,
            position: resOption?.series[0]?.label?.position || "top",
            formatter: function (a: any) {
              return addFormat(a.data);
            },
          },
        },
        {
          name: props.legend
            ? props.legend[1]
            : (resOption.series && resOption.series[1]?.name) || "",
          type: "line",
          yAxisIndex: 1,
          itemStyle: {
            color:
              (resOption.series && resOption.series[1]?.itemStyle?.color) ||
              "#76A0F8", // 折线的颜色
            borderRadius: [5, 5, 0, 0], // 设置折线的边框圆角
          },
          symbol: "none", // 取消折点圆圈
          smooth: false, // 设置曲率
          data: data.line,
          label: {
            show: resOption?.series[1]?.label?.show || false,
            position: resOption?.series[1]?.label?.position || "top",
          },
        },
      ],
    };

    // 绘制图表

    myChart.setOption(option);

    window.addEventListener("resize", () => {
      myChart.resize();
    });

    myChart.dispatchAction({
      type: "hideTip",
    });
    setTimeout(() => {
      myChart.dispatchAction({
        type: "showTip",
        // 屏幕上的y坐标
        position: ["30%", "30%"], // 调整位置
        seriesIndex: 0, // 第几条series
        dataIndex: data.current.currentXIndex, // 第几个tooltip
      });
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

const addFormat = (num: any) => {
  return props.isDivider ? numFormat(num) : num;
};

// 计算并渲染
const computedInit = async (res: any) => {
  data.resOption = res[1];
  await Promise.all([
    (data.cashMonth = res[0]?.cashMonth),
    (data.cashMax = res[0]?.cashMax),
    (data.x = res[0]?.x),
    (data.bar = res[0]?.bar1 || []),
    (data.line = res[0]?.line1 || []),
    (data.current.currentX = res[0]?.currentX),
  ]);
  data.current = await getCurrentX(res[0]?.x, data.current.currentX);
  if (props.resData) await data.echartsInit();
};

onMounted(() => {
  computedInit([{ ...props.resData }, { ...props.resOption }]);
});
</script>

<template>
  <div :id="domId" style="width: 100%; height: 100%"></div>
</template>
