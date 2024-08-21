<script setup>
import { ref } from 'vue'
import dummyData from '@/assets/data/dummyData.json'
import dummyOptions from '@/assets/data/dummyOptions.json'

const expenses = ref(dummyData)
const colorOptions = dummyOptions.Colors

function getColor(option) {
  return colorOptions[option] || colorOptions.Default
}

const deleteExpense = (id) => {
  expenses.value = expenses.value.filter((expense) => expense.id !== id)
}
const editExpense = () => {}

const headers = [
  { id: 'date', name: 'Date' },
  { id: 'category', name: 'Category' },
  { id: 'money', name: 'Money' },
  { id: 'status', name: 'Status' },
  { id: 'method', name: 'Method' },
  { id: 'actions', name: 'Actions' }
]
</script>

<template>
  <Table :headers="headers" :data="expenses" :style="{ width: '100%' }">
    <template #column-category="{ rowProps }">
      <div :style="{ backgroundColor: getColor(rowProps.category) }">
        {{ rowProps.category }}
      </div>
    </template>
    <template #column-actions="{ rowProps }">
      <button @click="editExpense"><i class="pi pi-pencil"></i></button>
      <button @click="deleteExpense(rowProps.id)"><i class="pi pi-trash"></i></button>
    </template>
  </Table>
</template>

<style lang="scss" scoped>
button {
  all: unset;
  margin: 0 0.3rem;

  i {
    font-size: 1.2rem;
    &:hover {
      -webkit-text-stroke-width: 1px;
      -webkit-text-stroke-color: rgb(0, 0, 0);
    }
  }
}
</style>
