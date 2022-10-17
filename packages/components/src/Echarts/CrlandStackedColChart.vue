<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "CrlandStackedColChart",
});
</script>
<script lang="ts" setup>
import * as echarts from "echarts";
// const echarts = require("echarts");
import { computed, onMounted, ref, watch, reactive } from "vue";
import { propsData } from "./props";
const props = defineProps(propsData);
import { numFormat, getCurrentX } from "../utils/index";

const data = reactive({
  id: props.domId,
  x: [],
  bar1: [],
  bar2: [],
  bar3: [],
  bar4: [],
  totalBar: [],
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
        left: "5",
        right: "0",
        top: (resOption.grid && resOption.grid.top) || "48", // resOption.title.subtext ?  '22.6%': '16.4%' ,
        bottom: (resOption.grid && resOption.grid.bottom) || "5%",
        containLabel: true,
      },
      title: {
        text: resOption.yAxis[0].name || "",
        padding: resOption.title?.padding || [30, 0, 0, 0],
        show: true,
        textStyle: {
          fontSize: 12,
          color: "#455467",
        },
        subtext: "", // 副标题
        subtextStyle: {
          // 副标题文本样式
          color: "#455467",
          fontSize: 12,
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
        trigger: "axis",
        extraCssText: "z-index:10",
        confine: true,
        axisPointer: {
          type: "shadow",
        },
        formatter: function (params: any) {
          let str = ""; // 声明一个变量用来存储数据
          let marker = "";
          const axisValue = "";
          let percent = "";
          // 图显示的数据较多时需要循环数据，这样才可以成功的给多条数据添加单位
          for (let i = 0; i < params.length; i++) {
            marker =
              "<span style='display:inline-block;margin-right:5px;border-radius:10px;width:7px;height:7px;background:" +
              params[i].color +
              "'></span>";
            percent = props.percent
              ? "(" +
                addFormat(
                  data.percent[params[i].componentIndex][params[i].dataIndex]
                ) +
                "%)"
              : "";
            const a = params[i].data;
            if (i < 2 && params[i].data !== "") {
              str +=
                marker +
                params[i].seriesName +
                ": " +
                (a
                  ? "<span style='font-size: 14px; font-weight:bold; color: #1D252F'>" +
                    addFormat(a) +
                    "</span>"
                  : "--") +
                percent +
                "</br>";
            } else if (i >= 2 && params[i].data !== "") {
              str +=
                marker +
                params[i].seriesName +
                ": " +
                (a
                  ? "<span style='font-size: 14px; font-weight:bold; color: #1D252F'>" +
                    addFormat(a) +
                    "</span>"
                  : "--") +
                percent +
                "</br>";
            }
          }
          return data.current.currentX ? axisValue + str : str;
        },
      },
      legend: {
        data: props.legend ? props.legend : resOption.legend.data || ["", ""],
        show: true,
        itemGap: 6,
        top: resOption.legend ? resOption.legend?.top : 0,
        left: "left",
        icon: "circle",
        itemWidth: 8, // 设置宽度
        itemHeight: 8, // 设置高度
        textStyle: {
          fontSize: 12, // 字体大小
          color: "#455467",
        },
        padding: [0, 0, 0, 0], // 可
      },
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
          bottom: "2", // 下边的距离
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
          show: true,
          xAxisIndex: [0],
          start: 0, // 默认为1
          end: 100, // data.x.length <= 6 ? 100 : 50 - data.x.length + 50 / data.x.length,  //100-1500/31,//默认为100
        },
      ],
      xAxis: [
        {
          type: "category",
          padding: [2, 0, 0, 0],
          splitLine: {
            show: false, // 去掉网格线
          },
          axisTick: {
            show: false, // 隐藏刻度线
          },
          axisLine: {
            lineStyle: {
              type: "solid",
              color: "#E9EFF3", // 坐标线的颜色
              width: "1", // 坐标线的宽度
            },
          },
          axisPointer: {
            type: "shadow",
          },
          axisLabel: {
            interval: 0,
            rotate: 0, // resOption.xAxis[0].axisLabel.rotate || 0,
            margin: 8,
            lineHeight: 14,
            fontSize: 12, // 字体大小
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
          // name: resOption.yAxis[0] && resOption.yAxis[0].name || '',
          // scale: true,
          nameTextStyle: {
            padding: (resOption.yAxis[0] &&
              resOption.yAxis[0]?.nameTextStyle?.padding) || [0, 40, 0, 0],
          },
          /* max:function (res) {
              console.log(res,1111111);
              return 500
            },
            min:function (res) {
              console.log(res,1111111);
              return res.min
            }, */
          // min:50,
          position: "left",
          alignTicks: true,
          axisLabel: {
            interval: 0,
            fontSize: 12, // 字体大小
          },
        },
      ],
      series: [
        {
          name: props.legend
            ? props.legend[0]
            : (resOption.series && resOption.series[0].name) || "",
          type: "bar",
          stack: (resOption.series[0] && resOption.series[0].stack) || "stack",
          barWidth: (resOption.series && resOption.series[0].barWidth) || 10, // 柱状条宽度
          itemStyle: {
            color:
              (resOption.series && resOption.series[0].itemStyle.color) ||
              "#AED36C", // 柱状条的颜色
          },
          label: {
            show: resOption.series[0].label?.show,
            position: "top",
            formatter: function (a: any) {
              return addFormat(a.data);
            },
          },
          data: data.bar1 || [],
        },
        {
          name: props.legend
            ? props.legend[1]
            : (resOption.series[1] && resOption.series[1].name) || "",
          type: "bar",
          stack: (resOption.series[1] && resOption.series[1].stack) || "stack",
          barWidth: (resOption.series[1] && resOption.series[1].barWidth) || 10, // 柱状条宽度
          itemStyle: {
            color:
              (resOption.series[1] && resOption.series[1].itemStyle.color) ||
              "#76A0F8", // 柱状条的颜色
          },
          data: data.bar2 || [],
        },
        {
          name: props.legend
            ? props.legend[2]
            : (resOption.series[2] && resOption.series[2].name) || "",
          type: "bar",
          stack: (resOption.series[2] && resOption.series[2].stack) || "stack",
          barWidth: (resOption.series[2] && resOption.series[2].barWidth) || 10, // 柱状条宽度
          itemStyle: {
            color:
              (resOption.series[2] && resOption.series[2].itemStyle.color) ||
              "#76A0F8", // 柱状条的颜色
          },
          data: data.bar3 || [],
        },
        {
          name: props.legend
            ? props.legend[3]
            : (resOption.series[3] && resOption.series[3].name) || "",
          type: "bar",
          stack: (resOption.series[3] && resOption.series[3].stack) || "stack",
          barWidth: (resOption.series[3] && resOption.series[3].barWidth) || 10, // 柱状条宽度
          itemStyle: {
            color:
              (resOption.series[3] && resOption.series[3].itemStyle.color) ||
              "#76A0F8", // 柱状条的颜色
          },
          data: data.bar4 || [],
        },

        /* {
              name: '',    // 总数显示，生成一个总数的柱状图，将颜色设为透明，
              type: 'bar',     // label将位置设备内部底部，造成一个总数显示在
              stack: resOption.series[4] && resOption.series[4].stack || 'stack',    // 柱状图上方的假象

              label: {
                normal: {

                  show: true,
                  position: 'insideBottom',
                  formatter: '{c}',         // 显示的总数
                  textStyle: {
                    color: 'rgba(141, 158, 174, 1)',
                  }
                }
              },
              itemStyle: {
                normal: {
                  color: 'rgba(128, 128, 128, 100)'      // 柱状图颜色设为透明
                }
              },
              data: data.totalBar
            } */
      ],
    };

    // 绘制图表
    myChart.setOption(option);

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

    window.addEventListener("resize", () => {
      myChart.resize();
    });
  },
});

watch(
  () => ({ ...props.resData }),
  async (res) => {
    computedInit(res);
  },
  { deep: true }
);

// 计算并渲染
const computedInit = async (res: any) => {
  data.percent = [];
  await Promise.all([
    (data.x = res?.x),
    (data.bar1 = res?.bar1),
    (data.bar2 = res?.bar2),
    (data.bar3 = res?.bar3),
    (data.bar4 = res?.bar4),
    (data.totalBar = res?.totalBar),
    data.percent.push(
      res?.percent1 || [],
      res?.percent2 || [],
      res?.percent3 || [],
      res?.percent4 || []
    ),
    (data.current.currentX = res?.currentX),
  ]);
  data.current = await getCurrentX(res?.x, data.current.currentX);

  if (props.resData) await data.echartsInit();
};

const addFormat = (num: any) => {
  return props.isDivider ? numFormat(num) : num;
};

onMounted(() => {
  computedInit({ ...props.resData });
});
</script>

<template>
  <div :id="domId" style="width: 100%; height: 100%"></div>
</template>
