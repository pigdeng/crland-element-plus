<template>
  <CrlandCodeShow :fileUrl="CodePath">
    <slot></slot>
  </CrlandCodeShow>
</template>
<script lang="ts" setup>
import { CrlandCodeShow } from "crland-base";

const props = defineProps({
  fileUrl: {
    type: String,
    default: "",
  },
});
const CodePath = `${import.meta.env.VITE_CODE_PATH}${props.fileUrl}`;
</script>
