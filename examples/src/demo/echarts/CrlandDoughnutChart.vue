<template>
  <el-row>
    <el-col :span="12">
      <crland-doughnut-chart
        :resOption="resOption"
        :resData="resData"
        :isDivider="isDivider"
        :borderRadius="borderRadius"
        :key="diyColor"
        style="height: 300px"
        ref="refChart"
      ></crland-doughnut-chart>
    </el-col>
    <el-col :span="12" class="right-style">
      <el-form :label-width="100">
        <el-form-item label="千位数分割符">
          <el-radio-group v-model="isDivider" @change="againInit">
            <el-radio :label="true">true</el-radio>
            <el-radio :label="false">false</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item label="自定义颜色">
          <el-switch
            v-model="diyColor"
            inline-prompt
            active-text="是"
            inactive-text="否"
            @change="colorChange"
          />
        </el-form-item>
        <el-form-item label="圆角">
          <el-slider
            v-model="borderRadius"
            @change="againInit"
            :min="0"
            :max="30"
          ></el-slider>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import { ref, reactive, nextTick } from "vue";
import { CrlandDoughnutChart } from "crland-base";
const isDivider = ref(false);
const diyColor = ref(false);
const borderRadius = ref(0);

const diyColorList = [
  "#1F8EFB",
  "#F7C34E",
  "#80DB9C",
  "#F56367",
  "#77CFF7",
  "#AED36C",
  "#A378FA",
  "#D6A178",
];

const resOption = reactive({
  unit: "亿元",
  title: { top: "35%" },
  sub: "动态成本总额",
  graphic: { text: "", top: "42%" },
  series: { radius: ["55%", "80%"], center: ["50%", "46%"] },
  width: "96%",
  tooltip: { show: true },
});

const resData = {
  total: "9040.77",
  pieData: [
    { name: "CB01", value: "3865.75", percent: "42.76" },
    { name: "CB02", value: "4162.84", percent: "46.05" },
    { name: "CB03", value: "247.83", percent: "2.74" },
    { name: "CB04", value: "764.35", percent: "8.45" },
  ],
};

const refChart = ref();

const colorChange = (res: any) => {
  if (res) {
    resOption.color = diyColorList;
  } else {
    delete resOption.color;
  }
  againInit();
};
const againInit = () => {
  nextTick(() => {
    refChart.value.againInit();
  });
};
</script>
<style lang="scss" scoped>
.right-style {
  display: flex;
  align-items: center;
  > form {
    width: 100%;
  }
}
</style>
