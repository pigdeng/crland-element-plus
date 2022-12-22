<template>
  <div :id="id" style="width: 100%; height: 100%;pointer-events: none;"></div>
</template>

<script>
import { watch, reactive, toRefs, getCurrentInstance, onMounted } from 'vue'
import { v4 as uuid } from 'uuid'

export default {
  name: 'progressBar1',
  props: {
    resOption: Object,
    resData: Object
  },
  setup (props) {
    const { proxy } = getCurrentInstance()
    const yFixdData = 10000
    const data = reactive({
      id: uuid(),
      xData: 0,
      yData: 0,
      percent: '0',
      resOption: props.resOption,
      xDataHandel: 0,
      echartsInit: () => {
        if (data.xData && data.yData) {
          if (Number(data.xData) > Number(data.yData)) {
            data.xDataHandel = 10000
          } else if (Number(data.xData) < 0 || Number(data.yData) < 0) {
            data.xDataHandel = 0
            data.percent = '--'
          } else {
            data.xDataHandel = data.xData && data.yData ? Number(data.xData) * 100 * (yFixdData / (Number(data.yData) * 100)) : 0
          }
        } else {
          data.xDataHandel = 0
          data.percent = '--'
        }
        const myChart = proxy.$echarts.init(document.getElementById(data.id), null, { renderer: 'svg' })
        const resOption = props.resOption
        const value1 = data.xData ? proxy.$numberTo2(data.xData) : '--'
        const value2 = data.yData ? proxy.$numberTo2(data.yData) : '--'
        const option = {
          tooltip: {
            show: false,
            trigger: 'item',
            axisPointer: {
              type: 'shadow'
            }
          },
          grid: {
            containLabel: true,
            left: 5,
            right: 0,
            bottom: 0,
            top: '25px'
          },
          xAxis: {
            show: true,
            offset: 0,
            position: 'left',
            type: 'value',
            splitLine: {
              show: false // 去掉辅助线
            },
            axisLine: {
              show: false
            },
            axisLabel: {
              show: false
            },
            zlevel: 10,
            z: 10
          },
          yAxis: {
            show: false,
            type: 'category',
            data: [data.xData],

            splitLine: {
              show: false // 去掉辅助线
            },
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              inside: true,
              margin: 0,
              fontSize: 24,
              fontWeight: '500',
              verticalAlign: 'bottom',
              align: 'bottom',
              color: resOption?.yAxis?.axisLabel?.color || 'rgba(0, 0, 0, 0.85)', // 值的颜色
              padding: [10, 0, 10, 0]
            }
          },

          series: [
            // 背景底部bar
            {
              name: resOption?.series[1]?.name || '',
              type: 'bar',
              clickable: false,
              label: { // 图形上的文本标签
                show: true,
                align: 'right',
                position: 'right', // 标签的位置
                offset: [-5, -30], // 标签文字的偏移，此处表示向上偏移40
                formatter: function (params) {
                  const str = '{b|' + params.seriesName + '} ' + '{a|' + value2 + '}'
                  return str
                },
                rich: {
                  a: {
                    lineHeight: 26,
                    color: 'rgba(0, 0, 0, 0.85)',
                    fontWeight: 'bold',
                    fontSize: 16
                  },
                  b: {
                    color: '#455467',
                    fontSize: 14
                  }
                },
                color: '#000', // 标签字体颜色
                fontSize: 12 // 标签字号
              },
              itemStyle: {
                color: '#EFF4F8', // 定义柱形的背景色
                borderRadius: [10, 10, 10, 10] // 定义背景柱形的圆角
              },
              barGap: '-100%', // 设置柱形重合的重要步骤
              data: [yFixdData],
              animation: true, // 关闭动画效果
              barWidth: '16px' // 设置柱形宽度
            },
            // 当前active颜色的bar
            {
              name: resOption?.series[0]?.name || '',
              type: 'bar',
              clickable: false,
              data: [data.xDataHandel || 0],
              barWidth: '16px',
              animation: true, // 关闭动画效果
              barGap: '-100%', // 设置柱形重合的重要步骤
              itemStyle: {
                borderRadius: [10, 10, 10, 10], // 定义柱形的圆角
                color: function (params) {
                  const colorList = [resOption?.gradient]
                  return new proxy.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                    offset: 0,
                    color: colorList[params.dataIndex][0]
                  },
                  {
                    offset: 1,
                    color: colorList[params.dataIndex][1]
                  }
                  ], false)
                }
              },
              label: { // 图形上的文本标签
                show: true,
                align: 'left',
                position: 'left', // 标签的位置
                offset: [5, -32], // 标签文字的偏移，此处表示向上偏移40
                formatter: function (params) {
                  const str = '{b|' + params.seriesName + '} ' + '{a|' + value1 + '}'
                  return str
                },
                rich: {
                  a: {
                    lineHeight: 28,
                    color: resOption?.yAxis?.axisLabel?.color || '#FC9535',
                    fontWeight: '700',
                    fontSize: 20
                  },
                  b: {
                    color: '#455467',
                    fontSize: 14
                  }
                },
                color: 'black', // 标签字体颜色
                fontSize: 12 // 标签字号
              }
            },
            // 当前active颜色的bar
            {
              name: resOption?.series[2]?.name || '',
              type: 'bar',
              data: [0],
              clickable: false,
              barWidth: '16px',
              animation: true, // 关闭动画效果
              barGap: '-100%', // 设置柱形重合的重要步骤
              itemStyle: {
                borderRadius: [10, 10, 10, 10], // 定义柱形的圆角
                color: function (params) {
                  const colorList = [resOption.gradient]
                  return new proxy.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                    offset: 0,
                    color: colorList[params.dataIndex][0]
                  },
                  {
                    offset: 1,
                    color: colorList[params.dataIndex][1]
                  }
                  ], false)
                }
              },
              label: { // 图形上的文本标签
                show: true,
                align: 'left',
                position: 'left', // 标签的位置
                offset: [5, 31], // 标签文字的偏移，此处表示向上偏移40
                formatter: function (params) {
                  const str = '{a|' + params.seriesName + '} ' + '{b|' + (data.percent || '--') + '%' + '} '
                  return str
                },
                rich: {
                  a: {
                    color: '#455467',
                    fontSize: 14
                  },
                  b: {
                    color: 'rgba(0, 0, 0, 0.85)',
                    fontWeight: '700',
                    fontSize: 14
                  }
                },
                color: 'black', // 标签字体颜色
                fontSize: 12 // 标签字号
              }
            }
          ]
        }
        // 绘制图表
        myChart.setOption(option)

        window.addEventListener('resize', () => {
          myChart.resize()
        })
      }

    })

    watch(() => ([props.resData, props.resOption]), async (res) => {
      data.xData = res[0]?.xData || ''
      data.yData = res[0]?.yData || ''
      data.percent = res[0]?.percent || ''
      data.resOption = res[1].resOption
      await data.echartsInit()
    }, { deep: true })
    return {
      ...toRefs(data)
    }
  }
}
</script>

<style scoped>

</style>
