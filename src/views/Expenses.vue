<script setup>
import { enablePopup } from '@/state/popup'
import ExpenseForm from '@/components/ExpenseForm.vue'

const addExpense = () => {
  enablePopup(ExpenseForm)
}
</script>

<template>
  <Page title="Expenses" subtitle="Where expenses are added">
    <DateRange></DateRange>
    <div class="new-expense-input">
      <button @click="addExpense()">
        <h4>Add new expense</h4>
      </button>
    </div>
    <ExpensesTable></ExpensesTable>
  </Page>
</template>

<style lang="scss" scoped>
.new-expense-input {
  display: flex;
  flex-direction: row;
  justify-content: end;
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
