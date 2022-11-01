import { withInstall } from "crland-utils"

import crlandListCombined from "./CrlandListCombined.vue"
// import crlandTable from "./CrlandTable.vue"
import crlandTableColumn from "./CrlandTableColumn.vue"

export const CrlandListCombined = withInstall(crlandListCombined)
// export const CrlandTable = withInstall(crlandTable);
export const CrlandTableColumn = withInstall(crlandTableColumn)
