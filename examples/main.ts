import { createApp } from "vue";
import App from "./app.vue";
import ElementPlus from "element-plus";
import locale from "element-plus/lib/locale/lang/zh-cn";
import router from "./src/router";
import "element-plus/dist/index.css";
import "./src/assets/css/docs.scss";
import "./src/assets/css/theming.scss";

// import crlandElementPlus from "../packages/components/index";

import "highlight.js/scss/googlecode.scss";
import "highlight.js/lib/common";
import hljsVuePlugin from "@highlightjs/vue-plugin";

const app = createApp(App);
app.use(ElementPlus, { locale });
// app.use(crlandElementPlus);
app.use(router);
app.use(hljsVuePlugin);
app.mount("#app");
