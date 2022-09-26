<template>
  <div class="doc-wrap">
    <h2 class="title">MavonEdit 编辑器</h2>
    <p>
      这是用一个 md 编辑器<br />
      优点:固定格式<br />
      缺点:不能上传附件<br />
      <small
        ><a
          href="https://www.npmjs.com/package/mavon-editor/v/next"
          target="three"
          >插件地址</a
        ></small
      >
    </p>
    <h3>使用规则</h3>
    <p class="dot">Install mavon-editor (安装)</p>
    <p>
      <el-tag type="info">npm i mavon-editor@3.0.0-beta --save</el-tag>
    </p>
    <p class="dot">Install axios (安装) ,用于图片上传</p>
    <p>
      <el-tag type="info">npm i axios --save</el-tag>
    </p>
    <p class="dot">服务端接口支持，包含图片上传接口和文档保存接口</p>
    <h3>代码演示</h3>
    <crland-code-show fileUrl="/code/editor/mavonEdit.txt">
      <MavonEdit></MavonEdit>
    </crland-code-show>
    <h3>参数说明</h3>
    <!-- <small>可以在分割线上自定义文本内容</small> -->
    <table>
      <thead>
        <tr>
          <th>name 名称</th>
          <th>type 类型</th>
          <th>default 默认值</th>
          <th>describe 描述</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>value</td>
          <td>String</td>
          <td></td>
          <td>初始值</td>
        </tr>
        <tr>
          <td>language</td>
          <td>String</td>
          <td>zh-CN</td>
          <td>
            语言选择，暂支持 zh-CN: 简体中文, zh-TW: 正体中文 ， en: 英文 ， fr:
            法语， pt-BR: 葡萄牙语， ru: 俄语， de: 德语， ja: 日语
          </td>
        </tr>
        <tr>
          <td>fontSize</td>
          <td>String</td>
          <td>14px</td>
          <td>编辑区域文字大小</td>
        </tr>
        <tr>
          <td>scrollStyle</td>
          <td>Boolean</td>
          <td>true</td>
          <td>开启滚动条样式(暂时仅支持chrome)</td>
        </tr>
        <tr>
          <td>boxShadow</td>
          <td>Boolean</td>
          <td>true</td>
          <td>开启边框阴影</td>
        </tr>
        <tr>
          <td>boxShadowStyle</td>
          <td>String</td>
          <td>0 2px 12px 0 rgba(0, 0, 0, 0.1)</td>
          <td>边框阴影样式</td>
        </tr>
        <tr>
          <td>transition</td>
          <td>Boolean</td>
          <td>true</td>
          <td>是否开启过渡动画</td>
        </tr>
        <tr>
          <td>toolbarsBackground</td>
          <td>String</td>
          <td>#ffffff</td>
          <td>工具栏背景颜色</td>
        </tr>
        <tr>
          <td>previewBackground</td>
          <td>String</td>
          <td>#fbfbfb</td>
          <td>预览框背景颜色</td>
        </tr>
        <tr>
          <td>subfield</td>
          <td>Boolean</td>
          <td>true</td>
          <td>true： 双栏(编辑预览同屏)， false： 单栏(编辑预览分屏)</td>
        </tr>
        <tr>
          <td>defaultOpen</td>
          <td>String</td>
          <td></td>
          <td>
            edit： 默认展示编辑区域 ， preview： 默认展示预览区域 , 其他 = edit
          </td>
        </tr>
        <tr>
          <td>placeholder</td>
          <td>String</td>
          <td>开始编辑...</td>
          <td>输入框为空时默认提示文本</td>
        </tr>
        <tr>
          <td>editable</td>
          <td>Boolean</td>
          <td>true</td>
          <td>是否允许编辑</td>
        </tr>
        <tr>
          <td>codeStyle</td>
          <td>String</td>
          <td>code-github</td>
          <td>
            markdown样式： 默认github,
            <a
              href="https://github.com/hinesboy/mavonEditor/blob/HEAD/src/lib/core/hljs/lang.hljs.css.js"
              >可选配色方案</a
            >
          </td>
        </tr>
        <tr>
          <td>toolbarsFlag</td>
          <td>Boolean</td>
          <td>true</td>
          <td>工具栏是否显示</td>
        </tr>
        <tr>
          <td>navigation</td>
          <td>Boolean</td>
          <td>false</td>
          <td>默认展示目录</td>
        </tr>
        <tr>
          <td>shortCut</td>
          <td>Boolean</td>
          <td>true</td>
          <td>是否启用快捷键</td>
        </tr>
        <tr>
          <td>autofocus</td>
          <td>Boolean</td>
          <td>true</td>
          <td>自动聚焦到文本框</td>
        </tr>
        <tr>
          <td>ishljs</td>
          <td>Boolean</td>
          <td>true</td>
          <td>代码高亮</td>
        </tr>
        <tr>
          <td>imageFilter</td>
          <td>function</td>
          <td>null</td>
          <td>
            图片过滤函数，参数为一个<code>File Object</code
            >，要求返回一个<code>Boolean</code>,
            <code>true</code>表示文件合法，<code>false</code>表示文件不合法
          </td>
        </tr>
        <tr>
          <td>imageClick</td>
          <td>function</td>
          <td>null</td>
          <td>图片点击事件，默认为预览，可覆盖</td>
        </tr>
        <tr>
          <td>tabSize</td>
          <td>Number</td>
          <td>\t</td>
          <td>tab转化为几个空格，默认为\t</td>
        </tr>
        <tr>
          <td>xssOptions</td>
          <td>Object</td>
          <td>null</td>
          <td>
            xss规则配置，参考
            <a href="https://github.com/leizongmin/js-xss"
              >https://github.com/leizongmin/js-xss</a
            >
          </td>
        </tr>
        <tr>
          <td>toolbars</td>
          <td>Object</td>
          <td>如下例</td>
          <td>工具栏</td>
        </tr>
      </tbody>
    </table>
    <h3>事件</h3>
    <table>
      <thead>
        <tr>
          <th>name 方法名</th>
          <th>params 参数</th>
          <th>describe 描述</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>change</td>
          <td>String: value , String: render</td>
          <td>
            编辑区发生变化的回调事件(render: value 经过markdown解析后的结果)
          </td>
        </tr>
        <tr>
          <td>save</td>
          <td>String: value , String: render</td>
          <td>ctrl + s 的回调事件(保存按键,同样触发该回调)</td>
        </tr>
        <tr>
          <td>fullScreen</td>
          <td>Boolean: status , String: value</td>
          <td>切换全屏编辑的回调事件(boolean: 全屏开启状态)</td>
        </tr>
        <tr>
          <td>readModel</td>
          <td>Boolean: status , String: value</td>
          <td>切换沉浸式阅读的回调事件(boolean: 阅读开启状态)</td>
        </tr>
        <tr>
          <td>htmlCode</td>
          <td>Boolean: status , String: value</td>
          <td>查看html源码的回调事件(boolean: 源码开启状态)</td>
        </tr>
        <tr>
          <td>subfieldToggle</td>
          <td>Boolean: status , String: value</td>
          <td>切换单双栏编辑的回调事件(boolean: 双栏开启状态)</td>
        </tr>
        <tr>
          <td>previewToggle</td>
          <td>Boolean: status , String: value</td>
          <td>切换预览编辑的回调事件(boolean: 预览开启状态)</td>
        </tr>
        <tr>
          <td>helpToggle</td>
          <td>Boolean: status , String: value</td>
          <td>查看帮助的回调事件(boolean: 帮助开启状态)</td>
        </tr>
        <tr>
          <td>navigationToggle</td>
          <td>Boolean: status , String: value</td>
          <td>切换导航目录的回调事件(boolean: 导航开启状态)</td>
        </tr>
        <tr>
          <td>imgAdd</td>
          <td>String: filename, File: imgfile</td>
          <td>
            图片文件添加回调事件(filename: 写在md中的文件名, File: File Object)
          </td>
        </tr>
        <tr>
          <td>imgDel</td>
          <td>String: filename</td>
          <td>图片文件删除回调事件(filename: 写在md中的文件名)</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts" setup>
import { CrlandCodeShow } from "crland-element-plus";
import MavonEdit from "@/demo/editor/mavonEdit.vue";

import { reactive, onBeforeMount, onMounted, ref } from "vue";
const props = defineProps({});
const emit = defineEmits([]);
const data = reactive({});
onBeforeMount(() => {
  // 2.组件挂载页面之前执行----onBeforeMount
});
onMounted(() => {
  // 3.组件挂载到页面之后执行-------onMounted
});
</script>
<style scoped lang="scss"></style>
