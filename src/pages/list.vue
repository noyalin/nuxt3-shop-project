<script setup lang="ts">
const foo = useFoo()
console.log(foo)

const { x, y } = useMouse()
</script>

<template>
  <div>
    list
    <div>x: {{ x }}</div>
    <div>y: {{ y }}</div>
    <div>foo:{{ foo }}</div>
    <TestComp></TestComp>
  </div>
</template>

<style scoped></style>
