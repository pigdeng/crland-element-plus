import { withInstall } from "crland-utils";

import crlandProgressBar from "./CrlandProgressBar.vue";
import crlandBarChart from "./CrlandBarChart.vue";
import crlandLineChart from "./CrlandLineChart.vue";
import crlandStackedColChart from "./CrlandStackedColChart.vue";
import crlandDoughnutChart from "./CrlandDoughnutChart.vue";
import crlandChinaMap from "./CrlandChinaMap.vue";

export const CrlandProgressBar = withInstall(crlandProgressBar);
export const CrlandBarChart = withInstall(crlandBarChart);
export const CrlandLineChart = withInstall(crlandLineChart);
export const CrlandStackedColChart = withInstall(crlandStackedColChart);
export const CrlandDoughnutChart = withInstall(crlandDoughnutChart);
export const CrlandChinaMap = withInstall(crlandChinaMap);