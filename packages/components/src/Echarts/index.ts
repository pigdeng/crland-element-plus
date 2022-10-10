import { withInstall } from "crland-utils";

import crlandProgressBar from "./CrlandProgressBar.vue";
import crlandBarChart from "./CrlandBarChart.vue";
import crlandLineChart from "./CrlandLineChart.vue";

export const CrlandProgressBar = withInstall(crlandProgressBar);
export const CrlandBarChart = withInstall(crlandBarChart);
export const CrlandLineChart = withInstall(crlandLineChart);
