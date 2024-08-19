<script setup></script>

<template>
  <Transition name="move" appear>
    <slot></slot>
  </Transition>
</template>

<style lang="scss">
.move-enter-active,
.move-leave-active {
  transition:
    opacity $transition-speed ease,
    transform $transition-speed ease;
}

.move-enter-from {
  opacity: 0;
  transform: translateY(10%);
}

.move-leave-to {
  opacity: 0;
  transform: translateY(100%);
}
</style>
