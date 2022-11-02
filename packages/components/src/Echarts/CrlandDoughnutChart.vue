<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "crland-doughnut-chart",
});
</script>
<script lang="ts" setup>
import * as echarts from "echarts";
import { computed, onMounted, ref, watch, reactive } from "vue";
import { propsData } from "./props";
const props = defineProps(propsData);
import { numFormat } from "../Utils/index";

const data = reactive({
  id: props.domId,
  pieData: [],
  total: "",
  tableData: {},
  head: {
    column: [],
  },
  a1: [],
  a2: [],
  width: "",
  stateDom: null,
  dataIndex: 0,
  echartsInit: () => {
    const chartDom: any = document.getElementById(data.id);
    const myChart = echarts.init(chartDom, null, {
      renderer: "svg",
    });
    const resOption = props.resOption;
    data.head = props.resOption.head;
    data.width = props.resOption.width;
    const option: any = {
      title: {
        text:
          `{total|${data.total ? addFormat(data.total) : ""}}{unit|${
            resOption.unit
          }}` || "--",
        left: "center", // 主副标题的水平位置
        top: resOption.title.top, // 主副标题的垂直位置
        textStyle: {
          rich: {
            total: {
              fontSize: 20,
              color: "#1D252F",
              fontWeight: 700,
              padding: [0, 0, 1, 0],
            },

            unit: {
              fontSize: 10,
              color: "#333",
            },
          },
        },
      },

      tooltip: {
        trigger: "item",
        confine: true,
        show: true,
        extraCssText: "z-index:10",
        textStyle: {
          fontSize: 14,
        },
        // formatter: '{b} : {c} {d}%',//默认值null，
        formatter: (params: any) => {
          data.dataIndex = params.params;
          let str = "";
          let marker = "";
          marker =
            "<span style='display:inline-block;margin-right:3px;border-radius:10px;width:8px;height:8px;background:" +
            params.color +
            "'></span>";
          str +=
            marker +
            params.name +
            ": " +
            addFormat(params.value) +
            " (" +
            addFormat(params.data.percent) +
            "%)";
          return str;
        },
      },
      graphic: [
        {
          type: "text",
          left: "center",
          top: resOption?.graphic.top || "44%",
          style: {
            text: resOption?.sub,
            fill: "#9AA1A9",
            width: 51,
            height: 32,
            fontSize: 14,
            lineHeight: 32,
          },
        },
      ],

      series: [
        {
          // name: '访问来源',
          type: "pie",
          radius: resOption.series.radius || ["45%", "85%"],
          center: resOption.series.center || ["22%", "56%"], // 环形图--显示位置
          avoidLabelOverlap: false,
          // itemStyle: {
          //   borderColor: "#fff",
          //   borderWidth: 3,
          // },

          itemStyle: {
            borderRadius: props.borderRadius,
            borderColor: "#fff",
            borderWidth: 2,
          },

          labelLine: {
            show: false,
          },
          label: {
            formatter: "{per|{d}%}",
            position: "outer",
            show: false,
            // alignTo:'edge',
            margin: 20,
            // backgroundColor: '#F6F8FC',
            // borderColor: '#8C8D8E',

            rich: {
              c: {
                color: "#f89d1d",
                fontSize: 14,
                fontWeight: "bold",
              },
              d: {
                color: "#f89d1d",
                fontSize: 14,
                fontWeight: "bold",
              },
              per: {
                color: "#4e4d4d",
                fontSize: 14,
                // fontWeight: 'bold',
                // backgroundColor: '#f9f0e2',
                padding: [5, 6, 2, 6],

                borderRadius: 4,
              },
            },
          },
          data: data.pieData,
        },
      ],
    };

    if (resOption.color) {
      option.background = resOption.color;
      option.color = resOption.color;
    } else {
      delete option.background;
      delete option.color;
    }

    // 绘制图表
    myChart.setOption(option);
    window.addEventListener("resize", () => {
      myChart.resize();
    });
  },
});

watch(
  () => [props.resData],
  async (res) => {
    computedInit(res);
  },
  { deep: true }
);

// 计算并渲染
const computedInit = async (res: any) => {
  data.total = res[0]?.total;
  data.a1 = [];
  data.a2 = [];
  data.pieData = res[0]?.pieData;
  if (res[1] !== 1) {
    data.a1 = res[0]?.tableData;
  } else {
    res[0]?.tableData.forEach((item: any, i: any) => {
      if (i === 0) {
        data.a1.push(item);
      } else {
        data.a2.push(item);
      }
    });
  }
  if (props.resData) await data.echartsInit();
};

const addFormat = (num: any) => {
  return props.isDivider ? numFormat(num) : num;
};

onMounted(() => {
  computedInit([props.resData]);
});

// 暴露给父组件，数据变化时再次渲染图表
const againInit = () => {
  computedInit([props.resData]);
};

defineExpose({
  againInit,
});
</script>

<template>
  <div :id="domId" style="width: 100%; height: 100%"></div>
</template>
