<script setup lang="ts"></script>

<template>
  <div>
    <a-result status="error" title="错误" sub-title="未知错误">
      <template #extra>
        <a-button type="primary">
          <NuxtLink to="/">返回首页</NuxtLink>
        </a-button>
      </template>
    </a-result>
  </div>
</template>

<style scoped></style>
