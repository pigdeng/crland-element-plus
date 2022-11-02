import { ExtractPropTypes } from "vue";
import { randomString } from "../Utils/index";

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
  // 一版面显示个数
  showNum: {
    type: [Number, String],
    default: 0,
  },
  num: String,
  legend: Array,
  percent: Boolean,
  info: String,
  borderRadius: {
    type: [Number, String],
    default: 0,
  },
};
export type propsData = ExtractPropTypes<typeof propsData>;
