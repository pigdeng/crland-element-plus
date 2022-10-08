<template>
  <div class="doc-wrap">
    <h2 class="title">TinymceEditor 富文本编辑器</h2>
    <p>
      这是用一个 富文本编辑器<br />
      优点:自由度高<br />
      <small
        ><a href="https://www.tiny.cloud" target="three">插件地址</a></small
      >
    </p>
    <h3>使用规则</h3>
    <p class="dot">Install @tinymce/tinymce-vue (安装)</p>
    <p>
      <el-tag type="info">npm i @tinymce/tinymce-vue --save</el-tag>
    </p>
    <p class="dot">Install tinymce（安装)</p>
    <p>
      <el-tag type="info">npm i tinymce --save</el-tag>
    </p>
    <p class="dot">服务端接口支持，包含图片上传接口和文档保存接口</p>
    <h3>资源持久化【重要】</h3>
    <p>
      插件默认使用远程静态资源如 css、js、icon等，为确保
      “护网”、“重保”期间可用需将资源本地持久化。操作步骤如下：
    </p>
    <p class="dot">下载静态资源 <a href="/tinymce.zip">[下载]</a></p>
    <p class="dot">
      解压静态资源并将解压后的文件夹放到项目 public文件夹 根目录
    </p>

    <h3>代码演示</h3>
    <crland-code-show fileUrl="/code/editor/tinymceEdit.txt">
      <TinymceEdit></TinymceEdit>
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
          <td>value/v-model</td>
          <td>String</td>
          <td>-</td>
          <td>初始值</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>Boolean</td>
          <td>false</td>
          <td>编辑器是否可编辑</td>
        </tr>
        <tr>
          <td>setting</td>
          <td>Object</td>
          <td>-</td>
          <td>初始化配置参数详情如下参数说明</td>
        </tr>
      </tbody>
    </table>
    <h3>setting 参数说明</h3>
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
import TinymceEdit from "@/demo/editor/tinymceEdit.vue";

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
