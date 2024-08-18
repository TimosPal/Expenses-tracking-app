<script setup>
import { isActive, toggleClass, popUpComponent } from '@/state/store'
import { onMounted, onUnmounted, watch } from 'vue'

let firstTimeSmall = true
let firstTimeBig = true
function getToggleClass() {
  const phoneScreenWidth = 600
  if (window.innerWidth >= phoneScreenWidth) {
    if (firstTimeBig) {
      // When resizing from small to big -> activate.
      isActive.value = true
      firstTimeBig = false
      firstTimeSmall = true
    }
    if (isActive.value) {
      // Max mode sidebar. Not hovering.
      return 'max-no-hover'
    } else {
      // Min mode sidebar. Not hovering.
      return 'min-no-hover'
    }
  } else {
    if (firstTimeSmall) {
      // When resizing from big to small -> de-activate.
      isActive.value = false
      firstTimeSmall = false
      firstTimeBig = true
    }
    if (isActive.value) {
      // Min mode sidebar. Hovering.
      return 'min-hover'
    } else {
      // Invisible.
      return 'invis'
    }
  }
}

toggleClass.value = getToggleClass() // TODO: better init (?)

const handleResize = () => {
  toggleClass.value = getToggleClass()
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})

watch(isActive, () => {
  toggleClass.value = getToggleClass()
})
</script>

<template>
  <div class="app">
    <transition name="fade">
      <Popup v-if="popUpComponent !== null">
        <component :is="popUpComponent" />
      </Popup>
    </transition>
    <TopBar />
    <SideBar />
    <div class="main-body" :class="toggleClass">
      <RouterView />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/components/sidebar';
@import '@/assets/styles/components/topbar';

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}

.main-body {
  position: fixed;
  top: $topbar-height;
  height: calc(100vh - $topbar-height);

  overflow-x: hidden;
  overflow-y: auto;

  padding: $main-body-padding;

  background-color: $primary-color-shader;

  @include preset-shadow;

  transition: left $transition-speed ease;

  &.max-no-hover {
    left: $sidebar-maximised-width;
    width: calc(100vw - $sidebar-maximised-width);
  }
  &.min-no-hover {
    left: $sidebar-minimised-width;
    width: calc(100vw - $sidebar-minimised-width);
  }
  &.min-hover,
  &.invis {
    left: 0;
    width: calc(100vw);
  }
}
</style>
