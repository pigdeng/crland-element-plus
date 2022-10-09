<template>
  <div class="doc-wrap">
    <h2 class="title">CrlandDatePicker 日期选择器组件</h2>
    <p>
      这是一个日期选择器组件
      <el-tag class="ml-2" type="info">crland-date-picker</el-tag><br />
      组件保留了 el-date-picker 原因功能，并对其进行样式定制化。
    </p>
    <!-- <el-divider /> -->
    <h3>使用规则</h3>
    <p class="dot">标签引入，如下代码演示</p>
    <!-- <el-divider /> -->

    <h3>代码演示【基础】</h3>
    <crland-code-show fileUrl="/code/form/CrlandDatePicker.txt">
      <CrlandDatePicker></CrlandDatePicker>
    </crland-code-show>

    <h3>参数说明</h3>
    <table>
      <thead>
        <tr>
          <th>属性名</th>
          <th>说明</th>
          <th>类型</th>
          <th>可选值</th>
          <th>默认值</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>model-value / v-model</td>
          <td>绑定值，如果它是数组，长度应该是 2</td>
          <td>Date / number / string / Array</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <td>readonly</td>
          <td>只读</td>
          <td>boolean</td>
          <td>—</td>
          <td>false</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>禁用</td>
          <td>boolean</td>
          <td>—</td>
          <td>false</td>
        </tr>
        <tr>
          <td>size</td>
          <td>输入框尺寸</td>
          <td>string</td>
          <td>large/default/small</td>
          <td>default</td>
        </tr>
        <tr>
          <td>editable</td>
          <td>文本框可输入</td>
          <td>boolean</td>
          <td>—</td>
          <td>true</td>
        </tr>
        <tr>
          <td>clearable</td>
          <td>是否显示清除按钮</td>
          <td>boolean</td>
          <td>—</td>
          <td>true</td>
        </tr>
        <tr>
          <td>placeholder</td>
          <td>非范围选择时的占位内容</td>
          <td>string</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <td>start-placeholder</td>
          <td>范围选择时开始日期的占位内容</td>
          <td>string</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <td>end-placeholder</td>
          <td>范围选择时结束日期的占位内容</td>
          <td>string</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <td>type</td>
          <td>显示类型</td>
          <td>string</td>
          <td>
            year/month/date/dates/datetime/ week/datetimerange/daterange/
            monthrange
          </td>
          <td>date</td>
        </tr>
        <tr>
          <td>format</td>
          <td>显示在输入框中的格式</td>
          <td>string</td>
          <td>
            请查看
            <a
              href="https://element-plus.gitee.io/zh-CN/component/date-picker.html"
              class="vp-link"
              >date formats</a
            >
          </td>
          <td>YYYY-MM-DD</td>
        </tr>
        <tr>
          <td>popper-class</td>
          <td>DatePicker 下拉框的类名</td>
          <td>string</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <td>range-separator</td>
          <td>选择范围时的分隔符</td>
          <td>string</td>
          <td>—</td>
          <td>'-'</td>
        </tr>
        <tr>
          <td>default-value</td>
          <td>可选，选择器打开时默认显示的时间</td>
          <td>Date / [Date, Date]</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <td>default-time</td>
          <td>范围选择时选中日期所使用的当日内具体时刻</td>
          <td>Date / [Date, Date]</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <td>value-format</td>
          <td>可选，绑定值的格式。 不指定则绑定值为 Date 对象</td>
          <td>string</td>
          <td>
            请查阅
            <a
              href="https://element-plus.gitee.io/zh-CN/component/date-picker.html"
              class="vp-link"
              >date formats</a
            >
          </td>
          <td>—</td>
        </tr>
        <tr>
          <td>id</td>
          <td>等价于原生 <code>id</code> 属性</td>
          <td>string / [string, string]</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <td>name</td>
          <td>等价于原生 <code>name</code> 属性</td>
          <td>string</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <td>unlink-panels</td>
          <td>在范围选择器里取消两个日期面板之间的联动</td>
          <td>boolean</td>
          <td>—</td>
          <td>false</td>
        </tr>
        <tr>
          <td>prefix-icon</td>
          <td>自定义前缀图标</td>
          <td><code>string | Component</code></td>
          <td>—</td>
          <td>Date</td>
        </tr>
        <tr>
          <td>clear-icon</td>
          <td>自定义清除图标</td>
          <td><code>string | Component</code></td>
          <td>—</td>
          <td>CircleClose</td>
        </tr>
        <tr>
          <td>validate-event</td>
          <td>输入时是否触发表单的校验</td>
          <td>boolean</td>
          <td>—</td>
          <td>true</td>
        </tr>
        <tr>
          <td>disabled-date</td>
          <td>
            一个用来判断该日期是否被禁用的函数，接受一个 Date 对象作为参数。
            应该返回一个 Boolean 值。
          </td>
          <td>function</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <td>shortcuts</td>
          <td>设置快捷选项，需要传入数组对象</td>
          <td>Array&lt;{ text: string, value: Date \</td>
          <td>Function }&gt;</td>
          <td>—</td>
        </tr>
        <tr>
          <td>cell-class-name</td>
          <td>设置自定义类名</td>
          <td>Function(Date)</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <td>teleported</td>
          <td>是否将 date-picker 的下拉列表插入至 body 元素</td>
          <td>boolean</td>
          <td>true / false</td>
          <td>true</td>
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
          <td>用户确认选定的值时触发</td>
          <td><code>(val: typeof v-model)</code></td>
        </tr>
        <tr>
          <td>blur</td>
          <td>在组件 Input 失去焦点时触发</td>
          <td><code>(e: FocusEvent)</code></td>
        </tr>
        <tr>
          <td>focus</td>
          <td>在组件 Input 获得焦点时触发</td>
          <td><code>(e: FocusEvent)</code></td>
        </tr>
        <tr>
          <td>calendar-change</td>
          <td>
            如果用户没有选择日期，那默认展示当前日的月份。 你可以使用
            <code>default-value</code> 来设置成其他的日期。
          </td>
          <td><code>(val: [Date, Date])</code></td>
        </tr>
        <tr>
          <td>panel-change</td>
          <td>当日期面板改变时触发。</td>
          <td><code>(date, mode, view)</code></td>
        </tr>
        <tr>
          <td>visible-change</td>
          <td>当 DatePicker 的下拉列表出现/消失时触发</td>
          <td><code>(visibility: boolean)</code></td>
        </tr>
      </tbody>
    </table>

    <h3>方法</h3>
    <table>
      <thead>
        <tr>
          <th>方法名</th>
          <th>说明</th>
          <th>参数</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>focus</td>
          <td>使 input 获取焦点</td>
          <td>—</td>
        </tr>
        <tr>
          <td>handleOpen</td>
          <td>打开日期选择器弹窗</td>
          <td>—</td>
        </tr>
        <tr>
          <td>handleClose</td>
          <td>关闭日期选择器弹窗</td>
          <td>—</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts" setup>
import { CrlandCodeShow } from "crland-element-plus-base";
import CrlandDatePicker from "@/demo/form/CrlandDatePicker.vue";
</script>
<style scoped lang="scss"></style>
