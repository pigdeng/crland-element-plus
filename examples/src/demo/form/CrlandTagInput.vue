<template>
  <crland-tag-input v-model:value="value"></crland-tag-input>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { CrlandTagInput } from "crland-element-plus";
const value = ref(["鲨鱼", "螃蟹", "田螺"]);
</script>
