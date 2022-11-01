<template>
    <div class="doc-wrap">
      <h2 class="title">CrlandBacktop 回到顶部</h2>
      <p>
        这是一个空状态时的占位提示。
        <el-tag class="ml-2" type="info">crland-Backtop</el-tag><br />
        组件保留了 el-empty 原有功能，并对其进行样式定制化。
      </p>
      <!-- <el-divider /> -->
      <h3>使用规则</h3>
      <p class="dot">标签引入，如下代码演示</p>
      <!-- <el-divider /> -->
  
      <h3>代码演示【基础】</h3>
      <crland-code-show fileUrl="/code/form/CrlandBackTop.txt">
        <Crland-Back-Top></Crland-Back-Top>
      </crland-code-show>
  
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
          <td>target</td>
          <td>触发滚动的对象</td>
          <td><el-tag type="info">string</el-tag></td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <td>visibility-height</td>
          <td>滚动高度达到此参数值才出现</td>
          <td><el-tag type="info">number</el-tag></td>
          <td>—</td>
          <td>200</td>
        </tr>
        <tr>
          <td>right</td>
          <td>控制其显示位置，距离页面右边距</td>
          <td><el-tag type="info">number</el-tag></td>
          <td>—</td>
          <td>40</td>
        </tr>
        <tr>
          <td>bottom</td>
          <td>控制其显示位置，距离页面底部距离</td>
          <td><el-tag type="info">number</el-tag></td>
          <td>—</td>
          <td>40</td>
        </tr>
      </tbody>
    </table>

      <h3>事件</h3>
      <table>
      <thead>
        <tr>
          <th>事件名</th>
          <th>说明</th>
          <th>回调参数</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>click</td>
          <td>点击按钮触发的事件</td>
          <td><code>(evt: MouseEvent) => void</code></td>
        </tr>
      </tbody>
    </table>
      <h3>Backtop 插槽</h3>
      <table>
      <thead>
        <tr>
          <th>插槽名</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>default</td>
          <td>自定义默认内容</td>
        </tr>
      </tbody>
    </table>
    </div>
  </template>
  
  <script lang="ts" setup>
  import CrlandCodeShow from "@/docs/components/CrlandCodeShow.vue";
  import CrlandBackTop from "@/demo/form/CrlandBackTop.vue";
  </script>
  <style scoped lang="scss"></style>
  