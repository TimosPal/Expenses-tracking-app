<script setup>
import { computed } from 'vue'
import { sidebarIsActive, sidebarModeClass } from '@/state/store'
import { enableFog } from '@/state/fog'
import { toggleSidebar } from '@/state/sidebar'

function toggle() {
  toggleSidebar()
  if (sidebarIsActive.value === true && sidebarModeClass.value === 'invis') {
    // sidebarIsActive does not trigger watch change before the invis check.
    // (We would expect max-hover)
    enableFog(102)
  }
}

const iconClass = computed(() => (sidebarIsActive.value ? 'pi pi-bars' : 'pi pi-times'))
</script>

<template>
  <header class="app-header">
    <div class="container" :class="sidebarModeClass">
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
    padding: $container-padding;

    &.max-no-hover {
      margin-left: $sidebar-maximised-width;
    }
    &.min-no-hover {
      margin-left: $sidebar-minimised-width;
    }
    &.max-hover {
      margin-left: $sidebar-maximised-width;
    }
    &.invis {
      margin-left: 0;
    }

    button {
      all: unset;
      cursor: pointer;
    }
  }
}
</style>
