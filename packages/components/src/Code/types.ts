import { ExtractPropTypes } from "vue";

export const propsData = {
  // 代码示范 txt
  fileUrl: {
    type: String,
    default: "",
  },
  // 语言
  language: {
    type: String,
    default: "html",
  },
  bgTable: {
    type: Boolean,
    default: false,
  },
};

export type propsData = ExtractPropTypes<typeof propsData>;
