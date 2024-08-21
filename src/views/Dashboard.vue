<script setup>
import FinancialInfo from '@/components/FinancialInfo.vue'
import DateRange from '@/components/DateRange.vue'
import { Pie } from 'vue-chartjs'

// Define chart data
const data = {
  responsive: true,
  maintainAspectRatio: false,
  labels: ['Red', 'Blue', 'Yellow'],
  datasets: [
    {
      label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)'],
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
    <div class="chart-container">
      <Pie :data="data" :options="options" />
    </div>
  </Page>
</template>

<style lang="scss" scoped>
.chart-container {
  width: 20rem;
  height: 20rem;
}
</style>
