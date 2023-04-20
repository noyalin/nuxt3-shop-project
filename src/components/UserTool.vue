<script setup lang="ts">
import { useUserStore } from '~/stores'
const userInfo = useUserStore().userInfo
</script>

<template>
  <div>
    <span>用户：{{ userInfo.name }}</span>
    |
    <span>用户ID：{{ userInfo.id }}</span>
  </div>
</template>

<style scoped></style>
