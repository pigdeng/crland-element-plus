<template>
  <el-menu :default-active="route[defaultActive]" class="crland-menu">
    <template v-for="i in menuData" :key="i.index">
      <el-sub-menu :index="i.index" v-if="i.child && i.child.length > 0">
        <template #title>
          <span>{{ i.title }}</span>
        </template>
        <el-menu-item
          :index="s.index"
          v-for="s in i.child"
          :key="s.index"
          :disabled="s.disabled"
          @click="goPage(s.index)"
          >{{ s.title }}</el-menu-item
        >
      </el-sub-menu>
      <el-menu-item
        :index="i.index"
        :disabled="i.disabled"
        v-else
        @click="goPage(i.index)"
      >
        {{ i.title }}
      </el-menu-item>
    </template>
  </el-menu>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "crland-menu",
});
</script>
<script lang="ts" setup>
import "./style/index.scss";
import { propsData } from "./types";
import { defineProps } from "vue";
import { useRouter, useRoute } from "vue-router";
import { ElMenu, ElMenuItem, ElSubMenu } from "element-plus";

const router: any = useRouter();
const route: any = useRoute();

const props = defineProps(propsData);

const goPage = (value: string) => {
  if (props.defaultActive === "name") {
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
