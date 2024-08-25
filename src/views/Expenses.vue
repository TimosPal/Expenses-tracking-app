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
    <Button :clickCallback="addExpense">Add new expense</Button>
    <ExpensesTable></ExpensesTable>
  </Page>
</template>

<style lang="scss" scoped>
Button {
  margin-bottom: 0.4rem;
}
</style>
