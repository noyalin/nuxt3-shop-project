<script setup lang="ts">
import {
  LeftOutlined,
  RightOutlined,
  FileOutlined,
} from '@ant-design/icons-vue'
import { RouteRecordName } from 'vue-router'
import { useMenuStore } from '~/stores'

type propsType = {
  collapsed?: boolean
  list?: Array<{ title: string; route: string }>
}

const props = withDefaults(defineProps<propsType>(), {
  collapsed: false,
  list: () => [],
})

const emit = defineEmits<{ (e: 'toggleCollapesd'): void }>()

const toggle = () => {
  emit('toggleCollapesd')
}

const store = useMenuStore()
const router = useRouter()
const goRoute = (name: RouteRecordName) => {
  store.setCurrentMenu(name)
  router.push({ name })
}

let selectedKeys = ref<RouteRecordName[]>([store.currentMenu])
</script>

<template>
  <div>
    <div class="menu-toggle-btn cursor-pointer" @click="toggle">
      <left-outlined v-if="props.collapsed" class="trigger" />
      <right-outlined v-else class="trigger" />
    </div>
    <a-menu
      v-model:selectedKeys="selectedKeys"
      style="border: 0"
      class="box-content"
      mode="inline">
      <template v-for="curr in list" :key="curr.route">
        <a-menu-item @click="goRoute(curr.route)">
          <div class="flex items-center">
            <file-outlined />
            <span>{{ curr.title }}</span>
          </div>
        </a-menu-item>
      </template>
    </a-menu>
  </div>
</template>

<style scoped>
.menu-toggle-btn {
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
