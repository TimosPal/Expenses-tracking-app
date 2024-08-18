<script setup>
import { ref } from 'vue'
import { popup } from '@/state/store'

// Define form structure.
const form = ref({
  date: '',
  category: 'Food',
  money: '',
  method: 'Card (Revolut)'
})

const submitForm = () => {}
</script>

<template>
  <Transition>
    <div class="expense-form" v-if="popup.isActive">
      <h2>Add New Expense</h2>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="date">Date:</label>
          <input v-model="form.date" type="date" id="date" required />
        </div>
        <div class="form-group">
          <label for="category">Category:</label>
          <select v-model="form.category" id="category" required>
            <option>Food</option>
            <option>Transport</option>
            <option>Entertainment</option>
            <option>Utilities</option>
            <option>Others</option>
          </select>
        </div>
        <div class="form-group">
          <label for="money">Amount:</label>
          <input v-model="form.money" type="text" id="money" placeholder="$0.00" required />
        </div>
        <div class="form-group">
          <label for="method">Payment Method:</label>
          <input
            v-model="form.method"
            type="text"
            id="method"
            placeholder="e.g., Card (Revolut)"
            required
          />
        </div>
        <button type="submit">Add Expense</button>
      </form>
    </div>
  </Transition>
</template>

<style lang="scss" scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity $transition-speed ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.expense-form {
  max-width: 500px;
  margin: 20px auto;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
}

h2 {
  text-align: center;
  color: #333;
  margin-bottom: 20px;
}

form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.form-group {
  display: flex;
  flex-direction: column;
}

label {
  font-weight: 600;
  margin-bottom: 8px;
  color: #555;
}

input,
select {
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #ddd;
  font-size: 1rem;
  color: #333;
}

input:focus,
select:focus {
  outline: none;
  border-color: #007bff;
}

button {
  padding: 12px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 10px;
}

button:hover {
  background-color: #0056b3;
}
</style>
