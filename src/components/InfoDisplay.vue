<script setup>
import { computed, defineProps } from 'vue'

const props = defineProps(['arg1', 'arg2', 'resultOptions'])

const remaining = computed(() => props.arg2.value - props.arg1.value)
// A result might have positive or negative meaning
// so we pass the inverse option to decide for each case.
const getClassOrName = (inverse, positive, negative) => {
  return remaining.value >= 0 ? (inverse ? positive : negative) : inverse ? negative : positive
}

const colorClass = computed(() =>
  getClassOrName(props.resultOptions.inverseMeaning, 'positive', 'negative')
)
const resultName = computed(() =>
  getClassOrName(
    props.resultOptions.inverseMeaning,
    props.resultOptions.positiveName,
    props.resultOptions.negativeName
  )
)
</script>

<template>
  <div class="info-display">
    <div class="info">
      <div class="info-container">
        <h4>{{ arg1.name }}</h4>
        <div class="actualValue">{{ arg1.value }}$</div>
      </div>
      <div class="info-container">
        <h4>{{ arg2.name }}</h4>
        <div class="budgetValue">{{ arg2.value }}$</div>
      </div>
      <div class="info-container">
        <h4>{{ resultName }}</h4>
        <div class="budgetValue" :class="colorClass">{{ Math.abs(remaining) }}$</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.info-display {
  display: flex;
  flex-direction: row;
  align-items: center;

  .info {
    display: flex;
    flex-direction: row;

    .info-container {
      display: flex;
      flex-direction: column;
      align-items: center;

      margin: 0.5rem;

      h4 {
        font-size: 0.9rem;
        margin-bottom: 0.1rem;
        color: $secondary-color-shade;
      }

      .actualValue,
      .budgetValue {
        font-size: 1.2rem;
        font-weight: 700px;
      }
    }
  }
}

.positive {
  color: $positive-color;
}

.negative {
  color: $negative-color;
}
</style>
