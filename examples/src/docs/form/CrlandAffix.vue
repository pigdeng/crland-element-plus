<template>
    <div class="doc-wrap">
      <h2 class="title">CrlandAffix 固钉组件</h2>
      <p>将页面元素固定在特定可视区域。
        <el-tag class="ml-2" type="info">crland-affix</el-tag><br />
        组件保留了 el-affix 原有功能，并对其进行样式定制化。
      </p>
      <!-- <el-divider /> -->
      <h3>使用规则</h3>
      <p class="dot">标签引入，如下代码演示</p>
      <!-- <el-divider /> -->
  
      <h3>代码演示【基础】</h3>
      <crland-code-show fileUrl="/code/form/CrlandAffix.txt">
        <Crland-Affix></Crland-Affix>
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
          <td>offset</td>
          <td>偏移距离</td>
          <td><el-tag type="info">number</el-tag></td>
          <td>—</td>
          <td>0</td>
        </tr>
        <tr>
          <td>position</td>
          <td>位置</td>
          <td><el-tag type="info">'top' | 'bottom'</el-tag></td>
          <td>—</td>
          <td>'top'</td>
        </tr>
        <tr>
          <td>target</td>
          <td>指定容器 (CSS 选择器)</td>
          <td><el-tag type="info">string</el-tag></td>
          <td>—</td>
          <td>-</td>
        </tr>
        <tr>
          <td>z-index</td>
          <td>z-index</td>
          <td><el-tag type="info">number</el-tag></td>
          <td>—</td>
          <td>100</td>
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
                <td>change</td>
                <td>fixed 状态改变时触发的事件</td>
                <td><code>(fixed: boolean) => void</code></td>
            </tr>
            <tr>
                <td>scroll</td>
                <td>滚动时触发的事件</td>
                <td><code>(value: { scrollTop: number, fixed: boolean }) => void</code></td>
            </tr>
      </tbody>
    </table>
      <h3>Affix  插槽</h3>
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
    <h3>方法</h3>
    <table>
      <thead>
        <tr>
          <th>方法名</th>
          <th>说明</th>
          <th>类型</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>update</td>
          <td>手动更新固钉状态</td>
          <td>() => void</td>
        </tr>
      </tbody>
    </table>
    </div>
  </template>
  
  <script lang="ts" setup>
  import CrlandCodeShow from "@/docs/components/CrlandCodeShow.vue";
  import CrlandAffix from "@/demo/form/CrlandAffix.vue";
  </script>
  <style scoped lang="scss"></style>
  