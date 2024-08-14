<script setup>
import { defineProps } from 'vue'

defineProps(['headerTitle'])
</script>

<template>
  <div class="card">
    <div v-if="headerTitle != null" class="card-header">
      <h3>{{ headerTitle }}</h3>
    </div>
    <div class="main-content">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/components/card';

.card {
  margin: $card-margin;
  border-radius: $card-border-radius;
  background-color: $card-background-color;
  @include preset-shadow;

  .card-header {
    text-align: center;
    color: $card-header-text-color;
    padding: $card-header-padding;

    background-color: $secondary-color;
    color: $card-header-text-color;
    border-top-left-radius: $card-border-radius;
    border-top-right-radius: $card-border-radius;
  }

  .main-content {
    padding: $card-main-content-padding;
    color: $card-main-content-text-color;

    width: fit-content;
    height: fit-content;
  }
}
</style>
