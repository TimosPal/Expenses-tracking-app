<script setup>
import { sidebarModeClass, sidebarIsActive } from '@/state/store'

function navButtonHandler() {
  if (sidebarModeClass.value == 'min-hover') {
    // TODO: fix manual variable setting.
    sidebarModeClass.value = 'invis'
    sidebarIsActive.value = false
  }
}
</script>

<template>
  <aside class="sidebar" :class="sidebarModeClass">
    <div class="logo-container">
      <h1>Tracking</h1>
    </div>
    <ul class="links" @click="navButtonHandler">
      <li>
        <router-link to="/">
          <i class="pi pi-home"></i>
          <h4>Home</h4>
        </router-link>
      </li>
      <li>
        <router-link to="Expenses">
          <i class="pi pi-wallet"></i>
          <h4>Expenses</h4>
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

@mixin sidebarToggle($width, $visibility, $opacity) {
  width: $width;
  li h4,
  .logo-container h1 {
    visibility: $visibility;
    opacity: $opacity;
  }
}

.sidebar {
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 101;
  height: 100%;
  background-color: $sidebar-background-color;
  color: $sidebar-text-color;
  transition: width $transition-speed ease;

  &.max-no-hover {
    @include sidebarToggle($sidebar-maximised-width, visible, 1);
  }
  &.min-no-hover {
    @include sidebarToggle($sidebar-minimised-width, hidden, 0);
    &:hover {
      @include sidebarToggle($sidebar-maximised-width, visible, 1);
    }
  }
  &.min-hover {
    @include sidebarToggle($sidebar-maximised-width, visible, 1);
  }
  &.invis {
    @include sidebarToggle(0, hidden, 0);
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
          font-weight: normal;
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
      transition:
        opacity $transition-speed ease-out,
        visibility $transition-speed ease-out;
    }
  }
}
</style>
