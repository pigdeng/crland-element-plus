<template>
    <div class="doc-wrap">
      <h2 class="title">CrlandTree 树形组件</h2>
      <p>用清晰的层级结构展示信息，可展开或折叠。
        <el-tag class="ml-2" type="info">crland-tree</el-tag><br />
        组件保留了 crland-tree 原有功能，并对其进行样式定制化。
      </p>
      <!-- <el-divider /> -->
      <h3>使用规则</h3>
      <p class="dot">标签引入，如下代码演示</p>
      <!-- <el-divider /> -->
  
      <h3>代码演示【基础】</h3>
      <crland-code-show fileUrl="/code/form/CrlandTree.txt">
        <Crland-Tree></Crland-Tree>
      </crland-code-show>

      <h3>代码演示【2】</h3>
      <crland-code-show fileUrl="/code/form/CrlandTreeSelect.txt">
        <crland-tree-select></crland-tree-select>
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
          <td>-</td>
          <td>-</td>
          <td><el-tag type="info">-</el-tag></td>
          <td>—</td>
          <td>-</td>
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
                <td>-</td>
                <td>-</td>
                <td><code>-</code></td>
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
          <td>-</td>
          <td>-</td>
          <td>-</td>
        </tr>
      </tbody>
    </table>
    </div>
  </template>
  
  <script lang="ts" setup>
  import CrlandCodeShow from "@/docs/components/CrlandCodeShow.vue";
  import CrlandTreeSelect from "@/demo/form/CrlandTreeSelect.vue";
  import CrlandTree from "@/demo/form/CrlandTree.vue";
  </script>
  <style scoped lang="scss"></style>
  