<script setup>
import { computed, defineProps } from 'vue'

const props = defineProps(['arg1', 'arg2', 'resultOptions'])

const remaining = computed(() => {
  // Only point in calculating this value if both props exist.
  if (props.arg1 && props.arg2) {
    return props.arg2.value - props.arg1.value
  }
  return 0
})

const getAttribute = (inverse, positive, negative) => {
  // A result might have positive or negative meaning
  // so we pass the inverse option to decide for each case.
  return remaining.value >= 0 ? (inverse ? positive : negative) : inverse ? negative : positive
}

const colorClass = computed(() =>
  remaining.value == 0
    ? 'neutral'
    : getAttribute(props.resultOptions?.inverseMeaning ?? null, 'positive', 'negative')
)
const resultName = computed(() =>
  getAttribute(
    // Incase of missing props pass null.
    props.resultOptions?.inverseMeaning ?? null,
    props.resultOptions?.positiveName ?? null,
    props.resultOptions?.negativeName ?? null
  )
)
</script>

<template>
  <div class="info-display">
    <div v-if="arg1 != null" class="info-container">
      <h4>{{ arg1.name }}</h4>
      <div class="value">{{ arg1.value }}$</div>
    </div>
    <div v-if="arg2 != null" class="info-container">
      <h4>{{ arg2.name }}</h4>
      <div class="value">{{ arg2.value }}$</div>
    </div>
    <div v-if="resultOptions != null" class="info-container">
      <h4>{{ resultName }}</h4>
      <div class="value" :class="colorClass">{{ Math.abs(remaining) }}$</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.info-display {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  min-width: 12rem;

  .info-container {
    display: flex;
    flex-direction: column;
    align-items: center;

    margin: 0.5rem;

    h4 {
      font-size: 0.9rem;
      margin-bottom: 0.1rem;
      color: $secondary-color-shade;
      font-weight: bolder;
    }

    .value {
      font-size: 1.2rem;
      font-weight: normal;
    }
  }
}

.positive,
.neutral {
  color: $positive-color;
}

.negative {
  color: $negative-color;
}
</style>
