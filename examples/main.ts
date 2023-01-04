import { createApp } from "vue";
import App from "./app.vue";
// import ElementPlus from "element-plus";
// import locale from "element-plus/lib/locale/lang/zh-cn";
import router from "./src/router";
import "element-plus/dist/index.css";
import "./src/assets/css/docs.scss";
import "./src/assets/css/theming.scss";

// import crlandElementPlus from "../packages/components/index";

import "highlight.js/scss/googlecode.scss";
import "highlight.js/lib/common";
import hljsVuePlugin from "@highlightjs/vue-plugin";

import {
  renderWithQiankun,
  qiankunWindow,
  QiankunProps,
} from 'vite-plugin-qiankun/dist/helper'


const render = (props: QiankunProps = {}) => {
  const app = createApp(App);
  const { container } = props
  const UedPcWeb: string | Element = container?.querySelector('#ued-pc-web') || '#ued-pc-web' // 避免 id 重复导致微应用挂载失败
  app.use(router);
  app.use(hljsVuePlugin);
  // app.use(crlandElementPlus);
  app.mount(UedPcWeb);
}

const initQianKun = () => {
  renderWithQiankun({
    bootstrap() {
      console.log('微应用：bootstrap')
    },
    mount(props) { // 获取主应用传入数据
      console.log('微应用：mount', props)
      render(props)
    },
    unmount(props) {
      console.log('微应用：unmount', props)
    },
    update(props) {
      console.log('微应用：update', props)
    },
  })
}

qiankunWindow.__POWERED_BY_QIANKUN__ ? initQianKun() : render() // 判断是否使用 qiankun ，保证项目可以独立运行
