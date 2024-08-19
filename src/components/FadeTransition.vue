<script setup></script>

<template>
  <Transition name="fade" appear>
    <slot></slot>
  </Transition>
</template>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
