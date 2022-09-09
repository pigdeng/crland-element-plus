import { ExtractPropTypes } from "vue";
export const propsData = {
  // 是否展开抽屉
  visible: {
    type: Boolean,
    default: false,
  },
  // 抽屉标题
  title: {
    type: String,
    default: "",
  },
  // 抽屉尺寸
  size: {
    type: [String, Number],
    default: "30%",
  },
  // 是否显示取消按钮
  isColseBtn: {
    type: Boolean,
    default: true,
  },
  // 取消按钮文案
  closeText: {
    type: String,
    default: "取消",
  },
  // 确定按钮文案
  confirmText: {
    type: String,
    default: "确定",
  },
  // 确定按钮loading
  confirmLoading: {
    type: Boolean,
    default: false,
  },
};

export type propsData = ExtractPropTypes<typeof propsData>;
