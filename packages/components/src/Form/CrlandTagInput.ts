import { ExtractPropTypes } from "vue";
export const size = ["large", "default", "small"];
export const propsData = {
  size: {
    type: String,
    validator(value: string) {
      return size.includes(value);
    },
    default: "default",
  },
};
export type propsData = ExtractPropTypes<typeof propsData>;
