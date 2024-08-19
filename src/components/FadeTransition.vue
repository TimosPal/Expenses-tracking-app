<script setup></script>

<template>
  <Transition name="fade">
    <slot></slot>
  </Transition>
</template>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity $transition-speed ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
