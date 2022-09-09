<template>
  <el-button class="crland-button" :class="shadow === false ? '':'crland-button-shadow'" ref="button">
    <slot></slot>
  </el-button>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  export default defineComponent({
      name: 'crland-button'
  })
</script>

<script lang='ts' setup>
import './style/crland-button.scss'
import {defineProps} from 'vue';
import { ElButton } from 'element-plus';

// import { buttonProps } from './types'
const props = defineProps({
  shadow: {
    default: false,
  },
});
const emit = defineEmits([]);
</script>
