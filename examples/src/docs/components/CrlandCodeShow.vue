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

let CODE_PATH;
try {
  CODE_PATH = import.meta.env.VITE_CODE_PATH;
} catch (error) {
  CODE_PATH = process.env.VUE_APP_CODE_PATH;
}
const CodePath = `${CODE_PATH}${props.fileUrl}`;
</script>
