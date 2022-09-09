import { series, parallel } from "gulp";
import { removeDist, buildStyle, buildComponent, buildImg } from "./index";

export default series(
  async () => removeDist(),
  parallel(
    async () => buildStyle(),
    async () => buildComponent(),
    async () => buildImg()
  )
);
