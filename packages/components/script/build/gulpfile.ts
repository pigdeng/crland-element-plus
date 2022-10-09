import { series, parallel } from "gulp";
import {
  removeDist,
  buildStyle,
  buildComponent,
  buildImg,
  buildMavonEdit,
  buildTinymce,
} from "./index";

export default series(
  async () => removeDist(),
  parallel(
    async () => buildStyle(),
    async () => buildComponent(),
    async () => buildImg(),
    async () => buildMavonEdit(),
    async () => buildTinymce()
  )
);
