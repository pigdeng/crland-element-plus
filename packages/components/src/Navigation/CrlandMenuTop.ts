import { ExtractPropTypes } from "vue";
export const DefaultActive = ["name", "path"];
export const propsData = {
  // 路由跳转方式
  defaultActive: {
    type: String,
    default: "path",
    validator(value: string) {
      return DefaultActive.includes(value);
    },
  },
};
export type propsData = ExtractPropTypes<typeof propsData>;
