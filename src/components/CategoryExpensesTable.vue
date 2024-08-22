<script setup>
import { ref } from 'vue'
import dummyData from '@/assets/data/dummyCategoryData.json'
import dummyOptions from '@/assets/data/dummyOptions.json'

const expenses = ref(dummyData)
const colorOptions = dummyOptions.Colors

function getColor(option) {
  return colorOptions[option] || colorOptions.Default
}

const headers = [
  { id: 'category', name: 'Category' },
  { id: 'sum', name: 'Sum' }
]
</script>

<template>
  <Table :headers="headers" :data="expenses" :style="{ width: '100%' }">
    <template #column-category="{ rowProps }">
      <div class="color-identifier" :style="{ backgroundColor: getColor(rowProps.category) }">
        {{ rowProps.category }}
      </div>
    </template>
  </Table>
</template>

<style lang="scss" scoped>
.color-identifier {
  width: 100%;
  text-align: center;
  border-radius: 1rem;
  padding: 0.2rem;

  font-weight: bold;
}
</style>
