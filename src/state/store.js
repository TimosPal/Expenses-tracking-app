import { ref } from 'vue'

// Toggle state of sidebar.
const sidebarIsActive = ref(true)
const sidebarModeClass = ref('')
// Needed so the effects are applied at top level.
const popup = { isActive: ref(false), componentIsActive: ref(false), component: null }
const fogIsActivated = ref(false)

export { sidebarIsActive, sidebarModeClass, popup, fogIsActivated }
