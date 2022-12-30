<template>
    <div>
      首页
      <div
        ref="chinaMap"
        class="chinaMap"
        style="
          height: 800px;
          border: solid 1px red;
          width: 100%;
          background: #0b0873;
        "
      >
        地图1
      </div>
    </div>
  </template>
  <style scoped>
  .chinaMap {
    transform: rotate3d(1, 0, 0, 35deg);
  }
  </style>
  <script lang="ts" setup>
  import * as echarts from 'echarts'
  import chinaJson from '@/assets/mapJson/china.json'
  import { onMounted, ref } from 'vue'
  const chinaMap = ref()
  onMounted(() => {
    drawChina()
  })
  /**************************** series start ************************************/
  //中国地理坐标图
  var chinaGeoCoordMap: Object = {
    西安: [108.906866, 34.162109],
    柯桥区: [120.476075, 30.078038],
    拉萨: [91.140856, 29.645554],
    沈阳: [123.431474, 41.805698],
    新疆: [87.627704, 43.793026],
    台湾: [121.508903, 25.044319],
  }
  var chinaDatas = [
    [
      {
        name: '柯桥区',
        value: 0,
      },
    ],
    [
      {
        name: '拉萨',
        value: 2,
      },
    ],
    [
      {
        name: '沈阳',
        value: 1,
      },
    ],
    [
      {
        name: '新疆',
        value: 1,
      },
    ],
    [
      {
        name: '台湾',
        value: 1,
      },
    ],
  ]
  //设置投射点
  const scatterPos = [108.906866, 34.162109]
  
  var convertData = function (data: any) {
    var res = []
    for (var i = 0; i < data.length; i++) {
      var dataItem = data[i]
      var fromCoord = chinaGeoCoordMap[dataItem[0].name]
      var toCoord = scatterPos
      if (fromCoord && toCoord) {
        res.push([
          {
            coord: fromCoord,
            value: dataItem[0].value,
          },
          {
            coord: toCoord,
          },
        ])
      }
    }
    console.log('res', res)
    return res
  }
  
  var series: Array<any> = []
  ;[['西安', chinaDatas]].forEach(function (item, i) {
    console.log(item, item[0])
    series.push(
      {
        //绘制一个新地图
        type: 'map',
        map: 'china',
        zoom: 1,
        center: [105.194115019531, 35.582111640625],
        z: -1,
        aspectScale: 0.75, //
        itemStyle: {
          normal: {
            areaColor: '#f00',
            borderColor: '#090438',
            borderWidth: '2',
            shadowColor: '#090438',
            shadowOffsetX: 0,
            shadowOffsetY: 15,
          },
        },
      },
      //设置指向箭头信息
      {
        type: 'lines',
        zlevel: 2,
        effect: {
          show: true,
          period: 4, //箭头指向速度，值越小速度越快
          trailLength: 0.02, //特效尾迹长度[0,1]值越大，尾迹越长重
          symbol: 'arrow', //箭头图标
          symbolSize: 8, //图标大小
        },
        lineStyle: {
          normal: {
            color: '#adffd0',
            width: 1, //尾迹线条宽度
            opacity: 1, //尾迹线条透明度
            curveness: 0.3, //尾迹线条曲直度
          },
        },
        data: convertData(item[1]),
      },
      // 发射点位置涟漪等效果
      {
        type: 'effectScatter',
        coordinateSystem: 'geo',
        zlevel: 2,
        rippleEffect: {
          //涟漪特效
          period: 4, //动画时间，值越小速度越快
          brushType: 'stroke', //波纹绘制方式 stroke, fill
          scale: 4, //波纹圆环最大限制，值越大波纹越大
        },
        label: {
          normal: {
            show: true,
            position: 'right', //显示位置
            offset: [5, 0], //偏移设置
            formatter: function (params) {
              //圆环显示文字
              return params.data.name
            },
            fontSize: 13,
          },
          emphasis: {
            show: true,
          },
        },
        symbol: 'circle',
        symbolSize: function (val: Array<any>) {
          return 5 + val[2] * 5 //圆环大小
        },
        itemStyle: {
          normal: {
            show: false,
            color: '#f8f9f5',
          },
        },
        data: item[1].map(function (dataItem: any) {
          return {
            name: dataItem[0].name,
            value: chinaGeoCoordMap[dataItem[0].name].concat([dataItem[0].value]),
          }
        }),
      },
      //被攻击点
      {
        type: 'effectScatter',
        coordinateSystem: 'geo',
        zlevel: 2,
        rippleEffect: {
          //涟漪相关
          period: 2,
          brushType: 'stroke',
          scale: 5,
        },
        label: {
          normal: {
            show: true,
            position: 'right',
            // offset:[5, 0],
            color: '#0f0',
            formatter: '{b}',
            textStyle: {
              color: '#fff',
              fontSize: 12,
            },
          },
          emphasis: {
            show: true,
            color: '#f60',
          },
        },
        itemStyle: {
          normal: {
            color: '#f00',
          },
        },
        symbol: 'circle',
        symbolSize: 10, //圆圈大小
        data: [
          {
            name: item[0],
            value: chinaGeoCoordMap[item[0]].concat([10]),
          },
        ],
      },
    )
  })
  
  /****************************************************************/
  function drawChina() {
    var myChart = echarts.init(chinaMap.value)
    echarts.registerMap('china', chinaJson) //注册可用的地图
    var option = {
      tooltip: {
        trigger: 'item',
        backgroundColor: 'rgba(166, 200, 76, 0.82)',
        borderColor: 'rgb(255,255,204)',
        showDelay: 0,
        hideDelay: 0,
        enterable: true,
        transitionDuration: 0,
        extraCssText: 'z-index:100',
        formatter: function (params, ticket, callback) {
          //根据业务自己拓展要显示的内容
          var res = ''
          var name = params.name
          var value = params.value[params.seriesIndex + 1]
          res = "<span style='color:#fff;'>" + name + "</span> 数据：" + value
          return res
        },
      },
      geo: {
        show: true,
        center: [105.194115019531, 35.582111640625],
        map: 'china',
        roam: true, //是否允许缩放，拖拽
        zoom: 1, //初始化大小
        //缩放大小限制
        scaleLimit: {
          min: 0.1, //最小
          max: 12, //最大
        },
        //设置中心点
        //center: [95.97, 29.71],
        //省份地图添加背景
        //regions: regions,
        itemStyle: {
          normal: {
            areaColor: '#3352c7',
            color: 'red',
            borderColor: '#5e84fd',
            borderWidth: 2,
          },
        },
        label: {
          color: 'rgba(255,255,255,0.5)',
          show: false,
        },
        //高亮状态
        emphasis: {
          itemStyle: {
            areaColor: '#ffc601',
          },
          label: {
            show: true,
            color: '#fff',
          },
        },
        z: 10,
      },
      //配置属性
      series: series,
    }
    myChart.setOption(option)
  }
  </script>