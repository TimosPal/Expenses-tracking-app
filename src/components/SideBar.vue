<script setup>
import { isActive } from '@/state/store'
</script>

<template>
  <aside class="sidebar" :class="{ isActive: isActive }">
    <div class="logo-container">
      <h1>Tracking</h1>
    </div>
    <ul class="links">
      <li>
        <router-link to="/">
          <i class="pi pi-home"></i>
          <h4>Home</h4>
        </router-link>
      </li>
      <li>
        <router-link to="Options">
          <i class="pi pi-cog"></i>
          <h4>Options</h4>
        </router-link>
      </li>
      <li>
        <router-link to="About">
          <i class="pi pi-info-circle"></i>
          <h4>About</h4>
        </router-link>
      </li>
    </ul>
  </aside>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/components/topbar';
@import '@/assets/styles/components/sidebar';

.sidebar {
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 101;
  width: 0; // Small screen, not active
  height: 100%;
  background-color: $sidebar-background-color;
  color: $sidebar-text-color;
  transition: width $transition-speed ease;

  @media (min-width: $phone-screen-width) {
    // Normal screem, not active.
    width: $sidebar-minimised-width;
  }

  &.isActive,
  &:hover {
    // Active, no matter the screen
    width: $sidebar-maximised-width;

    .links li a h4,
    .logo-container h1 {
      opacity: 1;
      visibility: visible;
    }
  }

  .links {
    list-style: none;
    width: 100%;

    li {
      a {
        display: flex;
        align-items: center;
        padding: $nav-button-padding;
        text-decoration: none;
        color: inherit;

        h4 {
          font-weight: $nav-button-text-font-weight;
          visibility: hidden;
          opacity: 0;
          margin-left: $nav-button-text-margin-left;
          transition:
            opacity $transition-speed ease-out,
            visibility $transition-speed ease-out;
        }
      }

      .router-link-exact-active,
      &:hover {
        background-color: $selection-color;
      }

      &:hover {
        cursor: pointer;
      }
    }
  }

  .logo-container {
    display: flex;
    align-items: center;
    height: $topbar-height;
    width: 100%;
    background-color: $logo-container-color;

    border-bottom: 1px solid rgb(222, 222, 222);

    h1 {
      font-size: $header-font-size;
      padding: $header-padding;
      text-align: center;
      opacity: 0;
      visibility: hidden;
      transition:
        opacity $transition-speed ease-out,
        visibility $transition-speed ease-out;
    }
  }
}
</style>
