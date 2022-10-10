<template>
  <div class="doc-wrap">
    <h2 class="title">BarChart 柱状图组件</h2>
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
    <crland-code-show fileUrl="/code/echarts/CrlandBarChart.txt">
      <CrlandBarChart></CrlandBarChart>
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
          <td>resData</td>
          <td>图表数据</td>
          <td><el-tag class="ml-2" type="info">Object</el-tag></td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td>resOption</td>
          <td>图表配置</td>
          <td><el-tag class="ml-2" type="info">Object</el-tag></td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td>domId</td>
          <td>图表的标签id属性名称</td>
          <td><el-tag class="ml-2" type="info">string</el-tag></td>
          <td>-</td>
          <td>随机</td>
        </tr>
        <tr>
          <td>isDivider</td>
          <td>是否开启千位分隔符</td>
          <td><el-tag class="ml-2" type="info">Boolean</el-tag></td>
          <td>-</td>
          <td>fasle</td>
        </tr>
      </tbody>
    </table>

    <h3>resData 参数说明</h3>
    <small>参考代码</small>

    <h3>resOption 参数说明</h3>
    <small>参考代码</small>

    <h3>事件</h3>
    <p>暂无</p>
  </div>
</template>

<script lang="ts" setup>
import CrlandBarChart from "@/demo/echarts/CrlandBarChart.vue";
</script>
