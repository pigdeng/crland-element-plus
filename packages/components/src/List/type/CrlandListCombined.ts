import { ExtractPropTypes } from "vue";
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
  setItem: {
    type: Array,
    default: () => {
      return [];
    },
  },
  setItemValue: {
    type: Array,
    default: () => {
      return [];
    },
  },
};
export type propsData = ExtractPropTypes<typeof propsData>;
