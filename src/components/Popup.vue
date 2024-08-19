<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { disablePopupComponent } from '@/composables/UsePopup'

const popupContainer = ref(null)

function disablePopupMouse(event) {
  if (!popupContainer.value.contains(event.target)) {
    disablePopupComponent()
  }
}

function disablePopupEscapeKey(event) {
  if (event.key === 'Escape') {
    disablePopupComponent()
  }
}

onMounted(() => {
  document.addEventListener('keydown', disablePopupEscapeKey)
})

onUnmounted(() => {
  document.removeEventListener('keydown', disablePopupEscapeKey)
})
</script>

<template>
  <div class="popup-window" @click="disablePopupMouse">
    <div ref="popupContainer">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.popup-window {
  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;

  width: 100vw;
  height: 100vh;

  z-index: 106;
}
</style>
