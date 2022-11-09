import { ExtractPropTypes } from "vue";

export const propsData = {
  // 是否编辑,是显示删除按钮还是下载按钮
  isEdit: {
    type: Boolean,
    default: false,
  },
  // 上传的链接
  action: {
    type: String,
    default: "http://localhost:3000/upload",
  },
  headers: {
    type: Object,
    default: () => {},
  },
  method: {
    type: String,
    default: "post",
  },
  data: {
    type: Object,
    default: () => {
      return {
        name: "张三",
        age: 21,
      };
    },
  },
  name: {
    type: String,
  },
  withCredentials: {
    type: Boolean,
    default: false,
  },
  drag: {
    type: Boolean,
    default: false,
  },
  accept: {
    type: String,
  },
};
export type propsData = ExtractPropTypes<typeof propsData>;
