<script setup>
import { computed, defineProps } from 'vue'

const props = defineProps(['actualValue', 'budgetValue'])
const value = computed(() => Math.min(100, (100 * props.actualValue) / props.budgetValue))
</script>

<template>
  <div class="info-display">
    <div class="main-body">
      <div class="info">
        <div class="info-container">
          <h4>Current:</h4>
          <div class="actualValue">{{ actualValue }} $</div>
        </div>
        <div class="info-container">
          <h4>Budget:</h4>
          <div class="budgetValue">{{ budgetValue }} $</div>
        </div>
        <div class="info-container">
          <h4>Remaining:</h4>
          <div class="budgetValue">{{ budgetValue }} $</div>
        </div>
      </div>
      <div class="visual">
        <Knob :model-value="value" readonly />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.info-display {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 200px;

  .main-body {
    display: flex;
    flex-direction: row;
    align-items: center;

    .info {
      display: flex;
      flex-direction: column;

      .info-container {
        display: flex;
        flex-direction: column;
        align-items: start;

        margin-bottom: 0.5rem;

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

  .visual {
    margin-left: 1rem;
  }
}
</style>
