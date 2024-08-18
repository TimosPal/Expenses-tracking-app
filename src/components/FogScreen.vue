<script setup>
import { fogIsActivated } from '@/state/store'
</script>

<template>
  <transition>
    <div class="screen-blur" v-if="fogIsActivated"></div>
  </transition>
</template>

<style lang="scss" scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity $transition-speed ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.screen-blur {
  position: fixed;
  top: 0;
  left: 0;

  z-index: 102;

  width: 100vw;
  height: 100vh;

  background-color: rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(2px);
}
</style>
