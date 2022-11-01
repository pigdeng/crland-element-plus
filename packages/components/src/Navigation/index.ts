import { withInstall } from "crland-utils";

import crlandMenu from "./CrlandMenu.vue";
import crlandMenuPro from "./CrlandMenuPro.vue";
import crlandHistoryBar from "./CrlandHistoryBar.vue";
import crlandPagination from "./CrlandPagination.vue";

export const CrlandMenu = withInstall(crlandMenu);
export const CrlandMenuPro = withInstall(crlandMenuPro);
export const CrlandHistoryBar = withInstall(crlandHistoryBar);
export const CrlandPagination = withInstall(crlandPagination);
