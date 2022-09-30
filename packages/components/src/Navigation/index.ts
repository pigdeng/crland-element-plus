import crlandMenu from "./CrlandMenu.vue";
import crlandMenuPro from "./CrlandMenuPro.vue";
import crlandMenuTop from "./CrlandMenuTop.vue";
import cralndSteps from "./CrlandSteps.vue";
import crlandBreadcrumb from "./CrlandBreadcrumb.vue";
import crlandPagination from "./CrlandPagination.vue";
import crlandDropdown from "./CrlandDropdown.vue";
import { withInstall } from "crland-utils";
// const CrlandMenu = withInstall(crlandMenu);
// const CrlandMenuPro = withInstall(crlandMenuPro);
// export default CrlandMenu;

export const CrlandMenu = withInstall(crlandMenu);
export const CrlandMenuPro = withInstall(crlandMenuPro);
export const CrlandMenuTop = withInstall(crlandMenuTop);
export const CrlandSteps = withInstall(cralndSteps);
export const CrlandBreadcrumb = withInstall(crlandBreadcrumb);
export const CrlandPagination = withInstall(crlandPagination);
export const CrlandDropdown = withInstall(crlandDropdown);


