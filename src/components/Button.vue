<script setup>
import { defineProps } from 'vue'

defineProps(['clickCallback'])
</script>

<template>
  <button class="genericButton" @click="clickCallback()">
    <h4><slot></slot></h4>
  </button>
</template>

<style lang="scss" scoped>
button.genericButton {
  all: unset;
  background-color: $secondary-color;
  color: $primary-color;
  border-radius: $border-radius;

  padding: 0.5em;

  &:hover {
    background-color: $secondary-color-shade;
    cursor: pointer;
  }

  &.activated {
    background-color: $secondary-color-shade;
    font-weight: bold;
  }
}
</style>
