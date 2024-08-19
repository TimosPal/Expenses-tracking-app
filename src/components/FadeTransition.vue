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
  <Transition name="fade" @after-enter="handleAfterEnter" @after-leave="handleAfterLeave" appear>
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
