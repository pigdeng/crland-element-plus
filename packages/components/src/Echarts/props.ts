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
};
export type propsData = ExtractPropTypes<typeof propsData>;
