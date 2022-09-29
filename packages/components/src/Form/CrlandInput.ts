import { ExtractPropTypes } from "vue";

export const propsData = {
  value: {
    type: Array,
    default: () => {
      return [];
    },
  },
};
export type propsData = ExtractPropTypes<typeof propsData>;
