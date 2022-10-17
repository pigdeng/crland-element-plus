import crlandMenu from "./CrlandMenu.vue";
import crlandMenuPro from "./CrlandMenuPro.vue";
import crlandHistoryBar from "./CrlandHistoryBar.vue";
import { withInstall } from "crland-utils";
// const CrlandMenu = withInstall(crlandMenu);
// const CrlandMenuPro = withInstall(crlandMenuPro);
// export default CrlandMenu;

export const CrlandMenu = withInstall(crlandMenu);
export const CrlandMenuPro = withInstall(crlandMenuPro);
export const CrlandHistoryBar = withInstall(crlandHistoryBar);
