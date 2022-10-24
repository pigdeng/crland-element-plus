import { ExtractPropTypes } from "vue";

export const propsData = {
  // 代码示范 txt
  code: {
    type: String,
    default: "",
  },
  // 语言
  language: {
    type: String,
    default: "html",
  },
};

export type propsData = ExtractPropTypes<typeof propsData>;
