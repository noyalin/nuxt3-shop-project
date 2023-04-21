<script setup lang="ts">
interface Query {
  value?: ''
}
const query: Query = reactive({})

const dataSource = [
  {
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号',
  },
  {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号',
  },
]

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
  },
]
</script>

<template>
  <div>
    <a-row class="search-box">
      <a-col :span="8">
        <a-input v-model:value="query.value" placeholder="name" />
      </a-col>
      <a-col :span="8" c><a-button type="primary">搜索</a-button></a-col>
    </a-row>

    <a-row>
      <a-col :span="24">
        <a-table :data-source="dataSource" :columns="columns"></a-table>
      </a-col>
    </a-row>
  </div>
</template>

<style scoped>
.search-box {
  margin-bottom: 24px;
}
</style>
