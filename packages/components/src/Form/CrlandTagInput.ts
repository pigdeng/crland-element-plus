import { ExtractPropTypes } from "vue";
export const size = ["large", "default", "small"];
export const tagType = [
  "primary",
  "success",
  "info",
  "warning",
  "danger",
  "text",
];
export const tagEffect = ["darkdark", "light", "plain"];
export const propsData = {
  value: {
    type: Array,
    default: () => {
      return [];
    },
  },
  size: {
    type: String,
    validator(value: string) {
      return size.includes(value);
    },
  },
  tagType: {
    type: [String, undefined],
    validator(value: string) {
      return tagType.includes(value);
    },
    default: "info",
  },
  tagEffect: {
    type: [String, undefined],
    validator(value: string) {
      return tagEffect.includes(value);
    },
    default: "light",
  },
  tagRound: {
    type: Boolean,
    default: false,
  },
};
export type propsData = ExtractPropTypes<typeof propsData>;
