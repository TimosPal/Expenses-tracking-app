<script setup>
import { isActive } from '@/state/store'
</script>

<template>
  <div class="app">
    <TopBar />
    <SideBar />
    <div class="main-body" :class="{ isActive: isActive }">
      <RouterView />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/components/sidebar';
@import '@/assets/styles/components/topbar';

.main-body {
  // Used for sidebar resizing.
  position: fixed;
  top: $topbar-height;
  left: 0;
  height: calc(100vh - $topbar-height);
  width: calc(100vw);

  overflow-x: hidden;
  overflow-y: auto;

  padding: $main-body-padding;

  background-color: $primary-color-shader;

  @include preset-shadow;

  transition: left $transition-speed ease;

  @media (min-width: $phone-screen-width) {
    // Normal screem, not active.
    left: $sidebar-minimised-width;
    width: calc(100vw - $sidebar-minimised-width);
  }

  &.isActive {
    left: $sidebar-maximised-width;
    width: calc(100vw - $sidebar-maximised-width);
  }
}
</style>
