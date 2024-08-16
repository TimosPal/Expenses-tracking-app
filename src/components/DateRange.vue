<script setup>
import { ref } from 'vue'

function dateObjToStringFormat(date) {
  return date.toISOString().split('T')[0]
}

function getStartOfTheWeekDate(date) {
  // Weeks start on Monday.
  const temp = new Date(date)
  const offset = temp.getDay() === 0 ? 6 : temp.getDay() - 1
  return temp.getDate() - offset
}

function handlePreset(presetID) {
  if (presetID == '') {
    return
  }

  activePreset.value = presetID

  const fromDateObj = new Date()
  const toDateObj = new Date()
  switch (presetID) {
    case 'today':
      // Already set by default
      break
    case 'week':
      // Start of the week.
      fromDateObj.setDate(getStartOfTheWeekDate(fromDateObj))
      break
    case 'month':
      // Start of the month
      fromDateObj.setDate(1)
      break
    case 'year':
      // Start of the year
      fromDateObj.setDate(1)
      fromDateObj.setMonth(0)
      break
    default:
  }

  fromDate.value = dateObjToStringFormat(fromDateObj)
  toDate.value = dateObjToStringFormat(toDateObj)
}

// TODO: implement min, max values in date pickers.
const fromDate = ref('')
const toDate = ref('')
const activePreset = ref('')
handlePreset('month')
</script>

<template>
  <div class="date-range">
    <div class="presets">
      <button
        type="button"
        :class="{ activated: activePreset == 'today' }"
        @click="handlePreset('today')"
      >
        Today
      </button>
      <button
        type="button"
        :class="{ activated: activePreset == 'week' }"
        @click="handlePreset('week')"
      >
        Week
      </button>
      <button
        type="button"
        :class="{ activated: activePreset == 'month' }"
        @click="handlePreset('month')"
      >
        Month
      </button>
      <button
        type="button"
        :class="{ activated: activePreset == 'year' }"
        @click="handlePreset('year')"
      >
        Year
      </button>
    </div>
    <div class="custom">
      <div class="from">
        <h4>From:</h4>
        <input type="date" id="from" v-model="fromDate" />
      </div>
      <div class="to">
        <h4>To:</h4>
        <input type="date" id="to" v-model="toDate" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.date-range {
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  margin: 1.5rem 0;

  .presets {
    display: flex;
    flex-direction: row;

    button {
      all: unset;

      font-size: 1rem;

      text-align: center;

      min-width: 5rem;
      padding: 0.2rem;
      margin: 0.6rem 0.5rem;

      background-color: $secondary-color;
      color: $primary-color;

      border-radius: 1.5rem;

      &:hover {
        background-color: $secondary-color-shade;
        cursor: pointer;
      }

      &.activated {
        background-color: $secondary-color-shade;
        font-weight: bold;
      }
    }
  }

  .custom {
    display: flex;
    flex-direction: row;

    .from,
    .to {
      display: flex;
      flex-direction: row;
      align-items: center;

      margin: 0.3rem;

      input {
        font-size: 1rem;
      }

      h4 {
        color: $secondary-color;
        margin-right: 0.7rem;
      }
    }
  }
}
</style>
