import { ExtractPropTypes } from "vue";
import { randomString } from "../../Utils/index";
export const tableStyle = ["table", "bar"];
export const propsData = {
  loading: {
    type: Boolean,
    default: false,
  },
  tableData: {
    type: [Array, Object],
    default: () => {
      return [];
    },
  },
  // 设置显示列
  setItemShow: {
    type: Object,
    default: () => {
      return {};
    },
  },
  setItemShowValue: {
    type: Array,
    default: () => {
      return [];
    },
  },
  // table Id
  domId: {
    type: String,
    default: randomString(6),
  },
  // 是否可拖动
  isSort: {
    type: Boolean,
    default: false,
  },
  // 拖动按钮class
  sortClass: {
    type: String,
    default: ".el-table__row",
  },
  // 是否启用十字聚焦
  tableHover: {
    type: Boolean,
    default: false,
  },
  // 列表样式
  tableStyle: {
    type: String,
    validator(value: string) {
      return tableStyle.includes(value);
    },
    default: "table",
  },
};
export type propsData = ExtractPropTypes<typeof propsData>;
