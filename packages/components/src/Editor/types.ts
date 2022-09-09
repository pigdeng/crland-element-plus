import { ExtractPropTypes } from "vue";
export const propsData = {
  imgBg: {
    type: String,
    default: "./img/login-bg.png"
  },
  imgTitle: {
    type: String,
    default: "./img/logo-title.png"
  },
  loading: {
    type: Boolean,
    default: false
  }
};
export type propsData = ExtractPropTypes<typeof propsData>;
