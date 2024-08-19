import { sidebarIsActive, sidebarModeClass } from '@/state/store'

function enableSidebar() {
  sidebarIsActive.value = true
}

function disableSidebar() {
  sidebarIsActive.value = false
}

function toggleSidebar() {
  sidebarIsActive.value = !sidebarIsActive.value
}

function setSidebarMode(mode) {
  console.log(mode)
  sidebarModeClass.value = mode
}

export { enableSidebar, disableSidebar, toggleSidebar, setSidebarMode }
