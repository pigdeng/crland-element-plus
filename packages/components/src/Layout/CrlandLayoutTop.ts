import { ExtractPropTypes } from "vue";
export const propsData = {
  // 菜单数据
  height: {
    type: [Number, String],
    default: 60,
  },
  // 是否收缩菜单
  isCollapse: {
    type: Boolean,
    default: false,
  },
  // 用户信息
  userInfo: {
    type: Object,
    default: () => {
      return {
        userName: "",
        avatar: "",
      };
    },
  },
  // dropdown 下拉菜单列表
  dropdownList: {
    type: Array,
    default: () => {
      return [];
    },
  },
  // 是否展示全屏
  isFullScreen: {
    type: Boolean,
    default: true,
  },
};
export type propsData = ExtractPropTypes<typeof propsData>;
