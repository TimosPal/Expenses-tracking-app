<script setup>
import FinancialInfo from '@/components/FinancialInfo.vue'
import DateRange from '@/components/DateRange.vue'
import { Pie } from 'vue-chartjs'
import CategoryExpensesTable from '@/components/CategoryExpensesTable.vue'

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

// Define chart data
const data = {
  responsive: true,
  maintainAspectRatio: false,
  labels: ['Transport', 'Food', 'Default'],
  datasets: [
    {
      label: 'My First Dataset',
      data: [15, 30, 120],
      backgroundColor: ['#38aa51', '#aa3838', '#8ca7c7'],
      hoverOffset: 4
    }
  ]
}

// Define chart options if needed
const options = {
  plugins: {
    legend: {
      position: 'top'
    },
    tooltip: {
      callbacks: {
        label: function (tooltipItem) {
          return `${tooltipItem.label}: ${tooltipItem.raw}`
        }
      }
    }
  }
}
</script>

<template>
  <Page title="Dashboard" subtitle="General overview">
    <DateRange />
    <FinancialInfo />

    <div class="categories-info">
      <div class="chart-container">
        <Pie :data="data" :options="options" />
      </div>
      <CategoryExpensesTable :style="{ width: '12rem' }"></CategoryExpensesTable>
    </div>
  </Page>
</template>

<style lang="scss" scoped>
.categories-info {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  margin: 2rem;
}

.chart-container {
  width: 20rem;
  height: 20rem;
}
</style>
