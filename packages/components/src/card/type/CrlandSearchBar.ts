import { ExtractPropTypes } from "vue";
import { randomString } from "../../utils/index";
export const propsData = {
  labelWidth: {
    type: String,
    default: "120px",
  },
  // 搜索按钮所在容器比例
  span: {
    type: Number,
    default: 3,
  },
};
export type propsData = ExtractPropTypes<typeof propsData>;
