<script setup>
import { isActive } from '@/state/store'
import { computed } from 'vue'

function toggle() {
  isActive.value = !isActive.value
}

const iconClass = computed(() => (isActive.value ? 'pi pi-bars' : 'pi pi-times'))
</script>

<template>
  <header class="app-header">
    <div class="container" :class="{ isActive: isActive }">
      <button @click="toggle">
        <i :class="iconClass"></i>
      </button>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/components/topbar';
@import '@/assets/styles/components/sidebar';

.app-header {
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;

  width: 100%;
  height: $topbar-height;
  background-color: $topbar-background-color;

  display: flex;
  align-items: center;

  border-bottom: 1px solid rgb(222, 222, 222);

  .container {
    transition: margin $transition-speed ease;
    margin-left: 0; // Small screen, not active
    padding: $container-padding;

    @media (min-width: $phone-screen-width) {
      // Normal screem, not active.
      margin-left: $sidebar-minimised-width;
    }

    &.isActive {
      // Active, no matter the screen
      margin-left: $sidebar-maximised-width;
    }

    button {
      all: unset;
      cursor: pointer;
    }
  }
}
</style>
