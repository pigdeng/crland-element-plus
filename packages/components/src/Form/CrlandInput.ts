import { ExtractPropTypes } from "vue";
export const inputType = [
  "user",
  "pass",
  "email",
  "visa",
  "phone",
  "rmb",
  "http",
];

export const propsData = {
  value: {
    type: Array,
    default: () => {
      return [];
    },
  },
  // 输入框类型
  inputType: {
    type: [String, undefined],
    validator(value: string) {
      return inputType.includes(value);
    },
  },
};
export type propsData = ExtractPropTypes<typeof propsData>;
