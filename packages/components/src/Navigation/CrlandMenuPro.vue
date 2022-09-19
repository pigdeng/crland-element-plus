<template>
  <div class="crland-menu-pro">

    <el-menu>
            <transition-group name="sub-sidebar">
                <template v-for="(route, index) in menuData">
                    <SidebarItem v-if="route.meta.sidebar !== false" :key="route.path || index" :item="route" :base-path="route.path" />
                </template>
            </transition-group>
    </el-menu>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'crland-menu-pro'
})
</script>
<script lang="ts" setup>
import './style/index.scss'
import { propsData } from './types'
import {defineProps} from 'vue';
import {useRouter, useRoute} from 'vue-router';
import { ElMenu, ElMenuItem, ElSubMenu } from "element-plus";
import SidebarItem from './SidebarItem/index.vue'
import menuData from './menuData';

const router:any = useRouter();
const route: any = useRoute();


const props = defineProps(propsData);

const goPage = (value: string) => {
  if (props.defaultActive === 'name') {
    router.push({
      name: value,
    });
  } else {
    router.push({
      path: value,
    });
  }
};
</script>
