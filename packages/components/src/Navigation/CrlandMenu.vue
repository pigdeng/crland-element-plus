<template>
  <el-menu :default-active="route[defaultActive]" class="crland-menu">
    <template v-for="i in menuData" :key="i.index">
      <el-sub-menu v-if="i.child && i.child.length > 0" :index="i.index">
        <template #title>
          <span>{{ i.title }}</span>
        </template>
        <el-menu-item
          v-for="s in i.child"
          :key="s.index"
          :index="s.index"
          :disabled="s.disabled"
          @click="goPage(s.index)"
          >{{ s.title }}</el-menu-item
        >
      </el-sub-menu>
      <el-menu-item
        v-else
        :index="i.index"
        :disabled="i.disabled"
        class="no-child"
        @click="goPage(i.index)"
      >
        {{ i.title }}
      </el-menu-item>
    </template>
  </el-menu>
</template>
<script lang="ts">
  import { defineComponent } from 'vue'
  export default defineComponent({
    name: 'crland-menu'
  })
</script>
<script lang="ts" setup>
  import './style/index.scss'
  import { propsData } from './types'
  import { useRouter, useRoute } from 'vue-router'
  import { ElMenu, ElMenuItem, ElSubMenu } from 'element-plus'

  const router: any = useRouter()
  const route: any = useRoute()

  const props = defineProps(propsData)

  const goPage = (value: string) => {
    if (props.defaultActive === 'name') {
      router.push({
        name: value
      })
    } else {
      router.push({
        path: value
      })
    }
  }
</script>
