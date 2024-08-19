<script setup>
import { defineProps } from 'vue'

const props = defineProps(['onEnterComplete', 'onLeaveComplete'])

const handleAfterEnter = () => {
  if (props.onEnterComplete && typeof props.onEnterComplete === 'function') {
    props.onEnterComplete()
  }
}

const handleAfterLeave = () => {
  if (props.onLeaveComplete && typeof props.onLeaveComplete === 'function') {
    props.onLeaveComplete()
  }
}
</script>

<template>
  <Transition name="move" @after-enter="handleAfterEnter" @after-leave="handleAfterLeave" appear>
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
  transform: translateY(10%);
}
</style>
