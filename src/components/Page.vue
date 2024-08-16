<script setup>
import { defineProps } from 'vue'

defineProps(['title', 'subtitle'])
</script>

<template>
  <div class="page-header">
    <h2>{{ title }}</h2>
    <hr />
    <h5>{{ subtitle }}</h5>
  </div>
  <slot></slot>
</template>

<style lang="scss" scoped>
.page-header {
  margin-bottom: 2rem;

  h2 {
    color: $secondary-color;
  }

  h5 {
    color: $secondary-color-shade;
  }

  hr {
    width: 8rem;
  }
}
</style>
