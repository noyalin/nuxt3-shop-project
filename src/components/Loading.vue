<script setup lang="ts">
import { useGlabalStore } from '~/stores'

const store = useGlabalStore()
</script>

<template>
  <div v-if="store.isFullLoading" class="loading-box">
    <div class="loading-box-bg"></div>
    <a-spin></a-spin>
  </div>
</template>

<style lang="scss" scoped>
.loading-box {
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;

  .loading-box-bg {
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.1;
    position: absolute;
  }
}
</style>
