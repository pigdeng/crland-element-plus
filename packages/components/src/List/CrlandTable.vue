<template>
  <el-table row-key="index" :class="bindTableClass()" class="crland-table crland-table-hover">
    <slot></slot>
  </el-table>
</template>

<script lang="ts">
import { defineComponent, nextTick } from "vue"
export default defineComponent({
  name: "crland-table",
})
</script>

<script lang="ts" setup>
import "./style/CrlandTable.scss"
import { onMounted } from "vue"
import { ElTable } from "element-plus"
import Sortable from "sortablejs"

import { propsData } from "./type/CrlandTable"
const props = defineProps(propsData)
const domClass = props.domId

onMounted(() => {
  nextTick(() => {
    if (props.isSort) rowDrop()
  })
})

const bindTableClass = () => {
  let str = domClass
  str = str + ` crland-table-style-${props.tableStyle}`
  console.log("str:", str)
  return str
}

const rowDrop = () => {
  const str = `.${domClass} .el-table__body-wrapper tbody`
  console.log("props.sortClass:", props.sortClass)
  const tbody = document.querySelector(`.${domClass} .el-table__body-wrapper tbody`)

  console.log("tbody:", tbody)

  Sortable.create(tbody, {
    animation: 200,
    handle: props.sortClass,
    ghostClass: "ba-table-row",
    onStart: (res: any) => {
      console.log("res:", res)
    },

    onEnd: (evt: Sortable.SortableEvent) => {
      console.log("evt:", evt)
    },
  })
}
</script>
