<template>
    <div class="doc-wrap">
      <h2 class="title">ChinaMap 中国地图</h2>
      <p>
        来自 Echarts ，更多使用技巧请查看
        <a href="https://echarts.apache.org/zh/index.html" target="three"
          >Echarts 官网</a
        >
      </p>
      <!-- <el-divider /> -->
      <h3>使用规则</h3>
      <p class="dot">标签引入，如下代码演示。</p>
      <!-- <el-divider /> -->
  
      <h3>代码演示</h3>
      <crland-code-show fileUrl="/code/echarts/CrlandChinaMap.txt">
        <CrlandChinaMap></CrlandChinaMap>
      </crland-code-show>
  
      <!-- <el-divider /> -->
  
      <h3>参数说明</h3>
      <table>
        <thead>
          <tr>
            <th>Props</th>
            <th>说明</th>
            <th>类型</th>
            <th>可选值</th>
            <th>默认值</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>-</td>
            <td>-</td>
            <td><el-tag class="ml-2" type="info">-</el-tag></td>
            <td>-</td>
            <td>0</td>
          </tr>
        </tbody>
      </table>
  
      
  
      <h3>事件</h3>
      <p>暂无</p>
    </div>
  </template>
  
  <script lang="ts" setup>
  import CrlandCodeShow from "@/docs/components/CrlandCodeShow.vue";
  import CrlandChinaMap from "@/demo/echarts/CrlandChinaMap.vue";
  </script>
  