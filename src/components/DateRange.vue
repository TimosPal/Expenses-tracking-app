<script setup>
import { ref, watch } from 'vue'
import { dateObjToStringFormat, getStartOfTheWeekDate } from '@/misc/DateUtils'

function handlePreset(presetID) {
  if (!presetID) return

  presetJustSet.value = true
  activePreset.value = presetID

  const fromDateObj = new Date()
  let toDateObj = new Date()

  switch (presetID) {
    case 'today':
      // Already set by default
      break
    case 'week':
      fromDateObj.setTime(getStartOfTheWeekDate(fromDateObj))
      break
    case 'month':
      fromDateObj.setDate(1)
      break
    case 'year':
      fromDateObj.setMonth(0, 1)
      break
    default:
      return
  }

  fromDate.value = dateObjToStringFormat(fromDateObj)
  toDate.value = dateObjToStringFormat(toDateObj)
}

function dateChange() {
  if (presetJustSet.value) {
    presetJustSet.value = false
    return
  }
  // If the user manually changes the date, deactivate any active preset
  activePreset.value = ''
}

// Implement min, max values in date pickers
let presetJustSet = ref(false)
const fromDate = ref('')
const toDate = ref('')
const activePreset = ref('')
handlePreset('month')

watch([fromDate, toDate], dateChange)
</script>

<template>
  <div class="date-range">
    <div class="presets">
      <button
        type="button"
        :class="{ activated: activePreset === 'today' }"
        @click="handlePreset('today')"
      >
        Today
      </button>
      <button
        type="button"
        :class="{ activated: activePreset === 'week' }"
        @click="handlePreset('week')"
      >
        Week
      </button>
      <button
        type="button"
        :class="{ activated: activePreset === 'month' }"
        @click="handlePreset('month')"
      >
        Month
      </button>
      <button
        type="button"
        :class="{ activated: activePreset === 'year' }"
        @click="handlePreset('year')"
      >
        Year
      </button>
    </div>
    <div class="custom">
      <div class="from">
        <h4>From:</h4>
        <input type="date" id="from" v-model="fromDate" :max="toDate" />
      </div>
      <div class="to">
        <h4>To:</h4>
        <input type="date" id="to" v-model="toDate" :min="fromDate" />
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
    justify-content: center;
    flex-wrap: wrap;

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
    justify-content: center;
    flex-wrap: wrap;

    .from,
    .to {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin: 0.3rem;

      input {
        all: unset;
        font-size: 1rem;
        padding: 0.1rem;
        width: 8rem;
        color: $secondary-color;
        background-color: $primary-color;
        border-radius: 0.2rem;
        border: 2px solid $secondary-color;

        &:hover,
        &:focus {
          border-color: $secondary-color-shade;
          cursor: pointer;
        }
      }

      h4 {
        color: $secondary-color;
        margin-right: 0.7rem;
      }
    }
  }
}
</style>
