<script setup>
import { ref } from 'vue'
import { popup } from '@/state/store'
import { disablePopupComponent, disablePopup } from '@/composables/UsePopup'
import { dateObjToStringFormat } from '@/misc/DateUtils'

// Define form structure.
const form = ref({
  date: String(dateObjToStringFormat(new Date())),
  category: '',
  money: '',
  method: ''
})

const submitForm = () => {
  console.log('Form submitted:', form.value)

  // Reset the form after submission
  form.value = {
    date: String(new Date()),
    category: '',
    amount: '',
    paymentMethod: ''
  }

  disablePopupComponent()
}
</script>

<template>
  <MoveTransition :onLeaveComplete="disablePopup">
    <Card v-if="popup.componentIsActive.value === true">
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
              placeholder="e.g. Card (Bank name)"
              required
            />
          </div>
          <div class="buttons">
            <button type="button" @click="disablePopupComponent">Cancel</button>
            <button type="submit">Add Expense</button>
          </div>
        </form>
      </div>
    </Card>
  </MoveTransition>
</template>

<style lang="scss" scoped>
.expense-form {
  padding: 1.5rem;
  min-width: 35vw;

  h2 {
    text-align: center;
    color: $secondary-color;
    margin-bottom: 1rem;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .form-group {
      display: flex;
      flex-direction: column;

      label {
        font-weight: bold;
        margin-bottom: 0.5rem;
        color: $secondary-color;
      }

      input,
      select {
        padding: 0.5rem;
        border-radius: 0.3rem;
        border: 1px solid #ddd;
        font-size: 1rem;
        color: #333;
      }

      input:focus,
      select:focus {
        outline: none;
        border-color: $secondary-color-shade;
      }
    }

    .buttons {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      button {
        padding: 12px;
        background-color: $secondary-color;
        color: $primary-color;
        border: none;
        border-radius: 6px;
        font-size: 1rem;
        cursor: pointer;
        margin-top: 10px;

        min-width: 5rem;
        min-height: 1rem;

        &:hover {
          background-color: $secondary-color-shade;
        }
      }
    }
  }
}
</style>
