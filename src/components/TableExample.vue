<script setup>
const headers = [
  { key: 'name', name: 'Name' },
  { key: 'age', name: 'Age' }
]

const data = [
  { id: 1, name: 'Alice', age: 30 },
  { id: 2, name: 'Bob', age: 25 }
]
</script>

<template>
  <Table :headers="headers" :data="data">
    <template #header-name="{ headerProps }"> </template>
    <template #header-age="{ headerProps }"> </template>

    <template #column-name="{ rowProps }"> {{ rowProps.name.toUpperCase() }} </template>
    <template #column-age="{ rowProps }"> {{ rowProps.age }} years </template>
  </Table>
</template>

<style lang="scss" scoped></style>
