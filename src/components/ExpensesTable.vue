<script setup>
import { ref } from 'vue'
import dummyData from '@/assets/data/dummyData.json'
import dummyOptions from '@/assets/data/dummyOptions.json'
import { enablePopup } from '@/state/popup'
import ExpenseForm from '@/components/ExpenseForm.vue'

const expenses = ref(dummyData)
let expensesEditMode = null
const editModeID = ref(0)
const colorOptions = dummyOptions.Colors

function getColor(option) {
  return colorOptions[option] || colorOptions.Default
}

function getRow(id) {
  const index = expensesEditMode.findIndex((item) => item.id === id)
  return expensesEditMode[index]
}

function cancel() {
  editModeID.value = 0
  expensesEditMode = null
}

function accept(id) {
  const index = expensesEditMode.findIndex((item) => item.id === id)
  expenses.value[index] = JSON.parse(JSON.stringify(expensesEditMode[index]))

  cancel()
}

function deleteExpense(id) {
  expenses.value = expenses.value.filter((expense) => expense.id !== id)
}

function editExpense(id) {
  cancel()

  editModeID.value = id
  expensesEditMode = JSON.parse(JSON.stringify(expenses.value))
}

const addExpense = () => {
  enablePopup(ExpenseForm)
}

const headers = [
  { id: 'date', name: 'Date' },
  { id: 'category', name: 'Category' },
  { id: 'money', name: 'Money' },
  { id: 'method', name: 'Method' },
  { id: 'comment', name: ' Comment' },
  { id: 'status', name: 'Status' },
  { id: 'actions', name: 'Actions' }
]
</script>

<template>
  <div class="mainContent">
    <Button :clickCallback="addExpense">Add new</Button>

    <div class="filters">
      <div class="categoryFilter">
        <label>Category:</label>
        <select name="category-dropdown">
          <option value="none">-</option>
          <option value="Food">Food</option>
          <option value="Transport">Transport</option>
          <option value="Drink">Drink</option>
        </select>
      </div>
      <div class="statusFilter">
        <label>Status:</label>
        <select name="status-dropdown">
          <option value="none">-</option>
          <option value="Owes to:">Owes</option>
          <option value="Owed by:">Owed by</option>
          <option value="Done">Done</option>
        </select>
      </div>
      <div class="moneyFilterMin">
        <label>Min range:</label>
        <input type="number" />
      </div>
      <div class="moneyFilterMax">
        <label>Max range:</label>
        <input type="number" />
      </div>
    </div>

    <Table :headers="headers" :data="expenses" :style="{ width: '100%' }">
      <template #column-category="{ rowProps }">
        <div
          class="color-identifier"
          v-if="rowProps.id !== editModeID"
          :style="{ backgroundColor: getColor(rowProps.category) }"
        >
          {{ rowProps.category }}
        </div>
        <div v-else>
          <select name="category-dropdown" v-model="getRow(rowProps.id).category">
            <option value="Food">Food</option>
            <option value="Transport">Transport</option>
            <option value="Drink">Drink</option>
          </select>
        </div>
      </template>

      <template #column-money="{ rowProps }">
        <div v-if="rowProps.id !== editModeID">
          {{ rowProps.money }}
        </div>
        <div v-else>
          <input type="text" v-model="getRow(rowProps.id).money" />
        </div>
      </template>

      <template #column-comment="{ rowProps }">
        <div v-if="rowProps.id !== editModeID">
          {{ rowProps.comment }}
        </div>
        <div v-else>
          <input type="text" v-model="getRow(rowProps.id).comment" />
        </div>
      </template>

      <template #column-date="{ rowProps }">
        <div v-if="rowProps.id !== editModeID">
          {{ rowProps.date }}
        </div>
        <div v-else>
          <input type="date" v-model="getRow(rowProps.id).date" />
        </div>
      </template>

      <template #column-status="{ rowProps }">
        <div v-if="rowProps.id !== editModeID">
          {{ rowProps.status }}
        </div>
        <div v-else>
          <select name="status-dropdown" v-model="getRow(rowProps.id).status">
            <option value="Owes to:">Owes</option>
            <option value="Owed by:">Owed by</option>
            <option value="Done">Done</option>
          </select>
        </div>
      </template>

      <template #column-method="{ rowProps }">
        <div v-if="rowProps.id !== editModeID">
          {{ rowProps.method }}
        </div>
        <div v-else>
          <select name="status-dropdown" v-model="getRow(rowProps.id).method">
            <option value="Eurobank">Eurobank</option>
            <option value="Alphabank">Alphabank</option>
            <option value="Revolut">Revolut</option>
            <option value="Card">Card</option>
          </select>
        </div>
      </template>

      <template #column-actions="{ rowProps }">
        <div v-if="rowProps.id !== editModeID">
          <button @click="editExpense(rowProps.id)"><i class="pi pi-pencil"></i></button>
          <button @click="deleteExpense(rowProps.id)"><i class="pi pi-trash"></i></button>
        </div>
        <div v-else>
          <button @click="cancel()"><i class="pi pi-times"></i></button>
          <button @click="accept(rowProps.id, expensesEditMode)">
            <i class="pi pi-check"></i>
          </button>
        </div>
      </template>
    </Table>
  </div>
</template>

<style lang="scss" scoped>
.mainContent {
  width: 100%;
}

label {
  margin-right: 0.2rem;
}

select,
input {
  font-size: 0.9rem;
  text-justify: center;
  height: 1.5rem;

  background-color: $primary-color;
  color: $secondary-color;
  border-radius: $border-radius;
  border: 2px solid $secondary-color;
  outline: none;
}

select:focus,
input:focus {
  border-color: $secondary-color;
}

.filters {
  display: flex;
  flex-direction: row;

  margin-bottom: 0.5rem;

  .categoryFilter,
  .statusFilter,
  .moneyFilterMin,
  .moneyFilterMax {
    padding: 0.2rem;
  }
}

.color-identifier {
  width: 100%;
  text-align: center;
  border-radius: 1rem;
  padding: 0.2rem;

  font-weight: bolder;

  color: black;
}

select,
input[type='text'] {
  width: 10ch;
}

input[type='date'] {
  width: 13ch;
}

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

Button.genericButton {
  margin-bottom: 0.4rem;
}
</style>
