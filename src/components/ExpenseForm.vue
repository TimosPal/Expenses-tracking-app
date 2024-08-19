<script setup>
import { ref } from 'vue'

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
  <MoveTransition>
    <Card>
      <div class="expense-form">
        <h2>Add new expense</h2>
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
    </Card>
  </MoveTransition>
</template>

<style lang="scss" scoped>
.expense-form {
  padding: 1.5rem;
  min-width: 10rem;

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
}
</style>
