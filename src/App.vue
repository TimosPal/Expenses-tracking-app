<script setup>
import { sidebarIsActive, sidebarModeClass, popup } from '@/state/store'
import { onMounted, onUnmounted, watch } from 'vue'
import { enableSidebar, disableSidebar, setSidebarMode } from '@/state/sidebar'
import { disableFog } from '@/state/fog'

let firstTimeSmall = true
let firstTimeBig = true
function getToggleClass() {
  const phoneScreenWidth = 600
  if (window.innerWidth >= phoneScreenWidth) {
    if (firstTimeBig) {
      // When resizing from small to big -> activate.
      enableSidebar()
      if (popup.isActive.value === false) {
        // Disable original smoke only if it was active from sidebar and not a popup
        disableFog()
      }
      // disablePopupComponent() // Disable any probably popup before resizing.
      firstTimeBig = false
      firstTimeSmall = true
    }
    if (sidebarIsActive.value) {
      // Max mode sidebar. Not hovering.
      return 'max-no-hover'
    } else {
      // Min mode sidebar. Not hovering.
      return 'min-no-hover'
    }
  } else {
    if (firstTimeSmall) {
      // When resizing from big to small -> de-activate.
      disableSidebar()
      firstTimeSmall = false
      firstTimeBig = true
    }
    if (sidebarIsActive.value) {
      // Min mode sidebar. Hovering.
      return 'max-hover'
    } else {
      // Invisible.
      return 'invis'
    }
  }
}

function windowResize() {
  setSidebarMode(getToggleClass())
}

setSidebarMode(getToggleClass()) // TODO: better init (?)

onMounted(() => {
  window.addEventListener('resize', windowResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', windowResize)
})

watch(sidebarIsActive, () => {
  setSidebarMode(getToggleClass())
})
</script>

<template>
  <div class="app">
    <Popup v-if="popup.isActive.value === true">
      <component :is="popup.component" />
    </Popup>
    <FogScreen />

    <TopBar />
    <SideBar />

    <div class="main-body" :class="sidebarModeClass">
      <RouterView />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/components/sidebar';
@import '@/assets/styles/components/topbar';

.main-body {
  position: fixed;
  top: $topbar-height;
  height: calc(100vh - $topbar-height);

  overflow-x: hidden;
  overflow-y: auto;

  padding: $main-body-padding;

  background-color: der$primary-color-shade;

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
  &.max-hover,
  &.invis {
    left: 0;
    width: calc(100vw);
  }
}
</style>
