<template>
    <div class="echarts">
      <div :style="{height:'400px',width:'100%'}" ref="myEchart"></div>
    </div>
  </template>
  <script lang="ts">
  
  export default {
    name: 'echarts',
    props: ['userJson'],
    data () {
      return {
        chart: null
      }
    },

  }
  </script>
  
  