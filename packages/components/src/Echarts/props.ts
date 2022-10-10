import { ExtractPropTypes } from "vue";
import { randomString } from "../utils/index";

export const propsData = {
  // 图表id
  domId: {
    type: String,
    default: randomString(6),
  },
  resOption: {
    type: Object,
    default: () => {
      return {};
    },
  },
  resData: {
    type: Object,
    default: () => {
      return {};
    },
  },
  isDivider: {
    type: Boolean,
    default: false,
  },
  num: String,
  legend: Array,
  percent: Boolean,
  info: String,
};
export type propsData = ExtractPropTypes<typeof propsData>;
