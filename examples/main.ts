import { createApp } from "vue";
import App from "./app.vue";
import "element-plus/dist/index.css";
import router from "./src/router";
import "./src/assets/css/docs.scss";
import "./src/assets/css/theming.scss";

import crlandElementPlus from "../packages/components/index";

import "highlight.js/scss/googlecode.scss";
import "highlight.js/lib/common";
import hljsVuePlugin from "@highlightjs/vue-plugin";

const app = createApp(App);
app.use(crlandElementPlus);
app.use(router);
app.use(hljsVuePlugin);
app.mount("#app");
