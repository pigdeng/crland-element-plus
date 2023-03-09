<template>
  <el-menu
    :default-active="defaultActive === 'name' ? route.name : route.fullPath"
    class="crland-menu-pro"
    :collapse="isCollapse"
    :collapse-transition="false"
    :router="defaultActive === 'name' ? false : true"
  >
    <!-- :style="{ width: isCollapse ? 'auto' : computedSize(width) }" -->

    <div class="menu-logo-wrap" @click="emit('handLogo')">
      <img
        v-if="!isCollapse"
        class="expand-logo"
        src="./img/expand-logo.png"
        alt="logo"
      />
      <img
        v-else
        class="collapse-logo"
        src="./img/collapse-logo.png"
        alt="logo"
      />
    </div>
    <CrlandItem :data="data" @handMenuItem="handMenuItem"></CrlandItem>
  </el-menu>
</template>
<script lang="ts">
  import { defineComponent } from 'vue'
  export default defineComponent({
    name: 'crland-menu-pro'
  })
</script>
<script lang="ts" setup>
  import './style/CrlandMenuPro.scss'
  import { ElMenu } from 'element-plus'
  import CrlandItem from './item.vue'
  import { computedSize } from '../Utils/index'
  import { propsData } from './CrlandMenuPro'

  import { useRouter, useRoute } from 'vue-router'
  const router: any = useRouter()
  const route: any = useRoute()

  const props = defineProps(propsData)
  const emit = defineEmits(['handLogo'])

  const handMenuItem = (index: string) => {
    if (props.defaultActive === 'name') {
      router.push({
        name: index
      })
    }
  }
</script>
