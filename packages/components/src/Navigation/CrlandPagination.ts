import { ExtractPropTypes } from "vue"
export const DefaultActive = ["name", "path"]
export const propsData = {
  // 总记录数
  total: {
    type: Number,
    default: 0,
  },
  // 是否圆角
  isCircle: {
    type: Boolean,
    default: true,
  },
  // 是否使用小型分页样式
  small: {
    type: Boolean,
    default: true,
  },
  // 功能&布局
  layout: {
    type: String,
    default: "total, sizes, prev, pager, next, jumper",
  },
  // 每页显示条数选项
  pageSizes: {
    type: Array,
    default: () => {
      return [5, 10, 20, 50, 100]
    },
  },
  disabled: {
    type: Boolean,
    default: false,
  },
}
export type propsData = ExtractPropTypes<typeof propsData>
