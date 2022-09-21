import { ExtractPropTypes } from "vue";
export const DefaultActive = ["name", "path"];
export const propsData = {
  // 菜单数据
  data: {
    type: [Array, Object],
    default: () => [],
  },
  // 是否收缩菜单
  isCollapse: {
    type: Boolean,
    default: false,
  },
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
