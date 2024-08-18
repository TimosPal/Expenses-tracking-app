<script setup></script>

<template>
  <div class="screen-blur"></div>
</template>

<style lang="scss" scoped>
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
