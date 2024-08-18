<script setup>
import { ref } from 'vue'
import dummyData from '@/assets/data/dummyData.json'
import { popup, fogIsActivated } from '@/state/store'
import ExpenseForm from '@/components/ExpenseForm.vue'

const expenses = ref(dummyData)

const deleteExpense = (index) => {
  expenses.value.splice(index, 1)
}

const addExpense = () => {
  popup.isActive.value = true
  popup.component = ExpenseForm
  fogIsActivated.value = true
}
</script>

<template>
  <Page title="Expenses" subtitle="Where expenses are added">
    <div class="new-expense-input">
      <h4>Add new expense:</h4>
      <button @click="addExpense()"><i class="pi pi-plus"></i></button>
    </div>
    <div class="table-main">
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Category</th>
            <th>Money</th>
            <th>Paying method</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(expense, index) in expenses" :key="index">
            <td>{{ expense.date }}</td>
            <td>{{ expense.category }}</td>
            <td>{{ expense.money }}</td>
            <td>{{ expense.method }}</td>
            <td>
              <button @click="deleteExpense(index)"><i class="pi pi-pencil"></i></button>
              <button @click="deleteExpense(index)"><i class="pi pi-trash"></i></button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </Page>
</template>

<style lang="scss" scoped>
.new-expense-input {
  display: flex;
  flex-direction: row;
  margin: 1rem;

  button {
    all: unset;
  }

  h4 {
    margin: 1rem;
  }
}

.table-main {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  background-color: #f9f9f9;

  table {
    width: 100%;
    border-collapse: collapse;

    thead {
      background-color: $secondary-color;
      color: $primary-color;

      th {
        padding: 1rem;
        text-align: left;
        font-weight: bold;
        font-size: 1rem;
      }

      th:last-child {
        text-align: right;
        padding-right: 2rem;
      }
    }

    tbody {
      tr:nth-child(even) {
        background-color: #f2f2f2;
      }

      tr:nth-child(odd) {
        background-color: #ffffff;
      }

      td {
        padding: 0.8rem 1rem;
        border-bottom: 1px solid #ddd;
        font-size: 1rem;
        color: $secondary-color-shade;

        button {
          all: unset;
          margin: 0 0.3rem;
        }

        &:last-child {
          text-align: right;
          padding-right: 2rem;
        }
      }

      tr:last-child td {
        border-bottom: none;
      }
    }
  }
}
</style>
