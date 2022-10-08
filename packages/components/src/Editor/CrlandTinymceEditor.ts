import { ExtractPropTypes } from "vue";

export const propsData = {
  modelValue: {
    type: String,
    default: "",
  },
  setting: {
    type: Object,
    default: () => {
      return {};
    },
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  colorScheme: {
    type: String,
    default: "light",
  },
};
export type propsData = ExtractPropTypes<typeof propsData>;
