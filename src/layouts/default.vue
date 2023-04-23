<script setup lang="ts">
import { useMenuStore } from '~/stores'

const menuList = useMenuStore().menuList
const collapsed = ref<boolean>(false)
</script>

<template>
  <div>
    <a-layout>
      <a-layout-header
        :style="{
          position: 'fixed',
          zIndex: 1,
          paddingLeft: '24px',
          width: '100%',
        }">
        <div class="logo text-xl">Logo</div>
      </a-layout-header>

      <a-layout>
        <a-layout-sider
          v-model:collapsed="collapsed"
          :style="{
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            left: 0,
            top: '64px',
            bottom: 0,
          }"
          :trigger="null"
          theme="light"
          collapsible>
          <Menu
            :collapsed="collapsed"
            :list="menuList"
            @toggle-collapesd="() => (collapsed = !collapsed)">
          </Menu>
        </a-layout-sider>
      </a-layout>

      <a-layout-content
        :style="{
          margin: collapsed ? '88px 16px 24px 96px' : '88px 16px 24px 216px',
          padding: '24px',
          background: '#fff',
          minHeight: '100vh',
        }">
        <slot></slot>
      </a-layout-content>

      <Loading></Loading>
    </a-layout>
  </div>
</template>

<style scoped>
.logo {
  color: white;
  height: 100%;
  display: flex;
  align-items: center;
}
</style>
