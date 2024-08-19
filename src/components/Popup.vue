<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { popup, fogIsActivated } from '@/state/store'

const popupContainer = ref(null)

function disablePopup() {
  popup.componentIsActive.value = false
  fogIsActivated.value = false
}

function disablePopupMouse(event) {
  if (!popupContainer.value.contains(event.target)) {
    disablePopup()
  }
}

function disablePopupEscapeKey(event) {
  if (event.key === 'Escape') {
    disablePopup()
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
