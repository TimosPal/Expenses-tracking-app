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
  justify-content: start;

  margin-bottom: 0.5rem;

  button {
    all: unset;
    background-color: $secondary-color;
    color: $primary-color;
    border-radius: 8px;

    padding: 0.5em;

    &:hover {
      background-color: $secondary-color-shade;
    }
  }
}
</style>
