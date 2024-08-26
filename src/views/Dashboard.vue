<script setup>
import FinancialInfo from '@/components/FinancialInfo.vue'
import DateRange from '@/components/DateRange.vue'
import { Pie } from 'vue-chartjs'
import { Line } from 'vue-chartjs'
import CategoryExpensesTable from '@/components/CategoryExpensesTable.vue'

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

const chartData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Dummy Data',
      backgroundColor: '#42A5F5',
      borderColor: '#42A5F5',
      data: [30, 50, 70, 40, 60, 80, 100],
      fill: false // Keeps it as a line chart without filling below the line
    },
    {
      label: 'Dummy Data2',
      backgroundColor: '#12A2F2',
      borderColor: '#1005C1',
      data: [10, 60, 73, 2, 120, 30, 10],
      fill: false // Keeps it as a line chart without filling below the line
    }
  ]
}

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      title: {
        display: true,
        text: 'Months'
      }
    },
    y: {
      title: {
        display: true,
        text: 'Values'
      },
      beginAtZero: true
    }
  }
}
</script>

<template>
  <Page title="Dashboard" subtitle="General overview">
    <DateRange />
    <FinancialInfo />

    <div class="chart-container">
      <div class="lineChart">
        <Line :data="chartData" :options="chartOptions"></Line>
      </div>
      <div class="pieChart">
        <Pie :data="data" :options="options" />
        <CategoryExpensesTable
          :style="{ width: '12rem', height: '10rem', marginLeft: '2rem' }"
        ></CategoryExpensesTable>
      </div>
    </div>
  </Page>
</template>

<style lang="scss" scoped>
.chart-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  margin-top: 2rem;

  .pieChart {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    width: 30rem;
    height: 20rem;

    margin-bottom: 4rem;
  }

  .lineChart {
    width: 25rem;
    height: 20rem;

    margin-bottom: 2rem;
  }
}
</style>
