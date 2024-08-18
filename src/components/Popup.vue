<script setup></script>

<template>
  <div class="popup-window">
    <slot></slot>
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
